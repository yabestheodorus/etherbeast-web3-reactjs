import React, { useState } from "react";
import { useReadContract } from "wagmi";
import EtherBeastTokenAbi from "../../../../contract/abis/EtherBeastToken.abi.json";
import { parseUnits } from "viem";

function useGetPrice(props) {
  const [tokenAmount, setTokenAmount] = useState(0);

  const parsedAmount =
    tokenAmount && tokenAmount !== "0"
      ? parseUnits(tokenAmount, 18) // adjust decimals if ETB ≠ 18
      : parseUnits("1", 18);

  const {
    data: price,
    error,
    isLoading,
  } = useReadContract({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: EtherBeastTokenAbi,
    functionName: "getPriceForTokenAmount",
    args: parsedAmount ? [parsedAmount] : undefined,
    query: {
      enabled: Boolean(parsedAmount), // 👈 controlled execution
      queryKey: ["getPrice", tokenAmount],
    },
  });

  return { tokenAmount, setTokenAmount, price, error, isLoading };
}

export default useGetPrice;
