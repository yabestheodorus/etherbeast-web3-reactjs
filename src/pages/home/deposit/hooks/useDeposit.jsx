import React, { useEffect } from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import EtherBeastTokenAbi from "../../../../../contract/abis/EtherBeastToken.abi.json";
import { parseUnits } from "viem";

function useDeposit(refetchBalance) {
  const buyTokenMutation = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash: buyTokenMutation.data,
    });

  useEffect(() => {
    if (isConfirmed) {
      refetchBalance();
    }
  }, [isConfirmed]);

  const buyTokens = (tokenAmount, price) => {
    if (!tokenAmount || !price) {
      console.warn("Missing amount or price");
      return;
    }

    const parsedAmount =
      tokenAmount && tokenAmount !== "0"
        ? parseUnits(tokenAmount, 18) // adjust decimals if ETB ≠ 18
        : undefined;

    // ✅ Use .mutate()
    buyTokenMutation.mutate({
      address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
      abi: EtherBeastTokenAbi,
      functionName: "buyToken",
      args: [parsedAmount],
      value: price,
    });
  };

  return {
    buyTokens,
    buyTokenError: buyTokenMutation.error,
    buyTokenIsLoading: buyTokenMutation.isPending,
    isConfirming,
    isConfirmed,
  };
}

export default useDeposit;
