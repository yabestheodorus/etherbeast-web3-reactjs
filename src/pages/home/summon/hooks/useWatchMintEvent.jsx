import { useAppKitAccount } from "@reown/appkit/react";
import React, { useState } from "react";
import { useWatchContractEvent } from "wagmi";

import EtherBeastNFTAbi from "../../../../../contract/abis/EtherBeastNFT.abi.json";
import { zeroAddress } from "viem";
function useWatchMintEvent(props) {
  const [mintedTokenId, setMintedTokenId] = useState(null);
  const [dialogState, setDialogState] = useState("IDLE");

  const { isConnected, address } = useAppKitAccount({
    namespace: "eip155",
  });

  useWatchContractEvent({
    address: import.meta.env.VITE_NFT_CONTRACT_ADDRESS,
    abi: EtherBeastNFTAbi,
    eventName: "Transfer",
    args:
      isConnected && address
        ? {
            from: zeroAddress,
            to: address,
          }
        : undefined,
    enabled: isConnected && !!address,
    onLogs(logs) {
      const log = logs[0];
      const tokenId = log.args.tokenId;

      // STOP animasi
      // TAMPILKAN NFT
      setMintedTokenId(tokenId);
      setDialogState("RESULT");
    },
  });

  return { mintedTokenId, dialogState };
}

export default useWatchMintEvent;
