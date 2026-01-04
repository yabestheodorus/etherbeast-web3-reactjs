import React, { useEffect } from "react";
import EtherBeastGatchaAbi from "../../../../../contract/abis/EtherBeastGatcha.abi.json";
import EtherBeastTokenAbi from "../../../../../contract/abis/EtherBeastToken.abi.json";
import { parseUnits } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
function useGatcha(props) {
  const approveTransfer = useWriteContract();

  const giveApproval = () => {
    approveTransfer.mutate({
      address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
      abi: EtherBeastTokenAbi,
      functionName: "approve",
      args: [import.meta.env.VITE_GATCHA_CONTRACT_ADDRESS, parseUnits("1", 18)],
    });
  };

  const { isLoading: isApproveConfirming, isSuccess: isApproveConfirmed } =
    useWaitForTransactionReceipt({
      hash: approveTransfer.data,
    });

  // perform gatcha
  const performGatcha = useWriteContract();
  const hasGatchaHash = Boolean(performGatcha.data);
  const gatchaRequest = () => {
    performGatcha.mutate({
      address: import.meta.env.VITE_GATCHA_CONTRACT_ADDRESS,
      abi: EtherBeastGatchaAbi,
      functionName: "performGatcha",
      args: [],
    });
  };

  const { isLoading: isGatchaConfirming, isSuccess: isGatchaConfirmed } =
    useWaitForTransactionReceipt({
      hash: performGatcha.data,
      query: {
        enabled: hasGatchaHash,
      },
    });

  useEffect(() => {
    if (isApproveConfirmed) {
      gatchaRequest();
    }
  }, [isApproveConfirmed]);

  const gatchaError = performGatcha.error;

  useEffect(() => {
    if (gatchaError) {
      console.log("Error gatcha : ", gatchaError);
    }
  }, [gatchaError]);
  return {
    giveApproval,
    isApprovePending: approveTransfer.isPending,
    approveError: approveTransfer.error,
    isApproveConfirming,
    isGatchaConfirming,
    isGatchaConfirmed,
  };
}

export default useGatcha;
