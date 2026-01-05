import { useAppKitAccount } from "@reown/appkit/react";
import React, { useState } from "react";
import { useReadContract } from "wagmi";
import EtherBeastTokenAbi from "../../../../../contract/abis/EtherBeastToken.abi.json";
import { useBalance } from "wagmi";

function useGetBalance() {
  const { isConnected, address } = useAppKitAccount({
    namespace: "eip155",
  });
  const enabled = typeof address === "string";
  const {
    data: balance,
    error,
    isLoading,
    refetch: refetchBalance,
  } = useReadContract({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: EtherBeastTokenAbi,
    functionName: "balanceOf",
    args: [address],
    query: {
      enabled, // 👈 controlled execution
      queryKey: ["balanceOf", address],
      staleTime: 0,
    },
    watch: true,
  });

  return { balance, error, isLoading, refetchBalance };
}

export default useGetBalance;
