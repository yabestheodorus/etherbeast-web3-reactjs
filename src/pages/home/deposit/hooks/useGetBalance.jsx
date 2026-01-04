import { useAppKitAccount } from "@reown/appkit/react";
import React, { useState } from "react";
import { useReadContract } from "wagmi";
import EtherBeastTokenAbi from "../../../../../contract/abis/EtherBeastToken.abi.json";

function useGetBalance() {
  const { isConnected, address } = useAppKitAccount({
    namespace: "eip155",
  });

  const {
    data: balance,
    error,
    isLoading,
  } = useReadContract({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: EtherBeastTokenAbi,
    functionName: "balanceOf",
    args: [address],
    query: {
      enabled: isConnected, // 👈 controlled execution
      queryKey: ["balanceOf", address],
    },
  });
  console.log("error get balance  ", error);
  return { balance, error, isLoading };
}

export default useGetBalance;
