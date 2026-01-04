import React from "react";
import EtherBeastNftAbi from "../../../../../contract/abis/EtherBeastNFT.abi.json";
import { useReadContract } from "wagmi";

function useGetTokenUri(tokenId) {
  const enabled = tokenId !== null && tokenId !== undefined;
  function decodeBase64Json(dataUri) {
    // 1. buang prefix "data:application/json;base64,"
    const base64 = dataUri.split(",")[1];

    // 2. decode base64 → string
    const jsonString = atob(base64);

    // 3. bersihkan control characters (ini penting)
    const sanitized = jsonString.replace(/[\x00-\x1F\x7F]/g, "");

    // 4. parse JSON
    return JSON.parse(sanitized);
  }

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
