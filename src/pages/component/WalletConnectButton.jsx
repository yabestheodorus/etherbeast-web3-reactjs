import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { SiWalletconnect } from "react-icons/si";
function WalletConnect(props) {
  // return <appkit-button />;
  const { open, close } = useAppKit();
  const { status, isConnected, address } = useAppKitAccount({
    namespace: "eip155",
  });
  const handleClick = () => {
    if (isConnected) {
      // Open the Account view (shows address, disconnect button, etc.)
      open({ view: "Account" });
    } else {
      // Open the Connect modal
      open({ view: "Connect", namespace: "eip155" });
    }
  };

  // Determine display text based on connection status
  let displayText = "Connect Wallet";
  if (status === "connecting" || status === "reconnecting") {
    displayText = "Connecting...";
  } else if (isConnected && address) {
    // Optional: truncate address
    const addr = address;
    displayText = `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  }

  return (
    <div
      onClick={(e) => handleClick()}
      className="flex items-center px-6 py-2 rounded-xl gap-x-2 font-semibold duration-300 text-white ml-6 hover:cursor-pointer  bg-linear-to-tr from-emerald-800  to-[#209574] hover:brightness-120 transition"
    >
      <h4>
        <SiWalletconnect let size={25} className="text-secondary2" />
      </h4>

      <h4 className="grow ">{displayText}</h4>
    </div>
  );
}

export default WalletConnect;
