import React, { useState } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import { useReadContract, useReadContracts } from "wagmi";
import EtherBeastNftAbi from "../../../../../contract/abis/EtherBeastNFT.abi.json";

function useGetSummoned(props) {
  const { isConnected, address } = useAppKitAccount({
    namespace: "eip155",
  });

  const {
    data: tokenData,
    error,
    isLoading,
  } = useReadContract({
    address: import.meta.env.VITE_NFT_CONTRACT_ADDRESS,
    abi: EtherBeastNftAbi,
    functionName: "getBeastsTokenURIsByOwner",
    args: [],
    account: address,
    query: {
      enabled: isConnected, // 👈 controlled execution
      queryKey: ["getBeastsTokenURIsByOwner", address],
    },
  });
  const tokenURIs = tokenData && tokenData[0] ? tokenData[0] : [];
  const tokenIds = tokenData && tokenData[1] ? tokenData[1] : [];

  return {
    tokenURIs,
    tokenIds,
    error,
    isLoading,
  };
}

export default useGetSummoned;
