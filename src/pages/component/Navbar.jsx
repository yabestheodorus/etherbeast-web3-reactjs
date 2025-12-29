import React from "react";
import { AppKitButton } from "@reown/appkit/react";
import WalletConnect from "./WalletConnectButton";

function Navbar(props) {
  return (
    <div className="sticky top-0 z-50 flex items-center py-6 bg-emerald-100/10 px-24 border-b border-emerald-500/20 backdrop-blur-xl">
      <img src="/logo2.png" alt="logo" className="w-[200px]" />

      <div className="flex items-center grow justify-end ">
        <a
          href="#"
          className="text-white text-xl hover:-translate-y-1 duration-300 px-6"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white text-xl hover:-translate-y-1 duration-300 px-6"
        >
          Gatcha
        </a>
        <a
          href="#"
          className="text-white text-xl hover:-translate-y-1 duration-300 px-6"
        >
          Collection
        </a>
        <WalletConnect />
      </div>
    </div>
  );
}

export default Navbar;
