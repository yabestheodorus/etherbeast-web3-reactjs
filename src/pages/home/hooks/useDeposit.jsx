import React from "react";
import { useWriteContract } from "wagmi";
import EtherBeastTokenAbi from "../../../../contract/abis/EtherBeastToken.abi.json";
import { parseUnits } from "viem";
function useDeposit() {
  const buyTokenMutation = useWriteContract();

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
  };
}

export default useDeposit;
