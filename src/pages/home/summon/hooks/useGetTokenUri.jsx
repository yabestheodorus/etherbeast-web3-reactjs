import React from "react";
import EtherBeastNftAbi from "../../../../../contract/abis/EtherBeastNFT.abi.json";
import { useReadContract } from "wagmi";
import { decodeBase64Json } from "../../../../Utils";

function useGetTokenUri(tokenId) {
  const enabled = tokenId !== null && tokenId !== undefined;

  const {
    data: tokenURI,
    error,
    isLoading,
  } = useReadContract({
    address: import.meta.env.VITE_NFT_CONTRACT_ADDRESS,
    abi: EtherBeastNftAbi,
    functionName: "tokenURI",
    args: enabled ? [tokenId] : undefined,
    query: {
      enabled: enabled, // 👈 controlled execution
      queryKey: ["tokenURI", tokenId],
    },
  });

  const tokenURIJson = tokenURI ? decodeBase64Json(tokenURI) : null;

  return { tokenURIJson, error, isLoading };
}

export default useGetTokenUri;
