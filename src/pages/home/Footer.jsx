import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaCubes,
  FaDice,
  FaCoins,
} from "react-icons/fa6";

function Footer(props) {
  const ETHERSCAN_BASE = "https://sepolia.etherscan.io/address";

  const NFT_ADDRESS = import.meta.env.VITE_NFT_CONTRACT_ADDRESS;
  const GATCHA_ADDRESS = import.meta.env.VITE_GATCHA_CONTRACT_ADDRESS;
  const TOKEN_ADDRESS = import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS;

  return (
    <footer className="pt-24 z-40">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between border-t border-slate-800 backdrop-blur shadow-[0_-10px_40px_rgba(16,185,129,0.05)]">
        {/* Left */}
        <div className="flex flex-col gap-1">
          <span className="text-lg text-slate-500">
            A project by{" "}
            <a
              href="https://profile.yabestheo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald-400 hover:text-emerald-300 transition"
            >
              yabestheo.dev
            </a>
          </span>
          <span className="text-md text-slate-600">
            © 2025 EtherBeast. All Beasts are summoned on-chain.
          </span>
        </div>

        {/* Contracts */}
        <div className="flex flex-col text-sm text-slate-500 gap-2">
          <span className="text-xs uppercase tracking-wide text-slate-600 mb-1">
            Contract Addresses
          </span>

          <a
            href={`${ETHERSCAN_BASE}/${NFT_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition"
          >
            <FaCubes size={14} />
            <span>NFT Contract</span>
          </a>

          <a
            href={`${ETHERSCAN_BASE}/${GATCHA_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition"
          >
            <FaDice size={14} />
            <span>Gatcha Contract</span>
          </a>

          <a
            href={`${ETHERSCAN_BASE}/${TOKEN_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition"
          >
            <FaCoins size={14} />
            <span>Token Contract</span>
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5 text-slate-500">
          <a
            href="https://github.com/yabex"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition drop-shadow-[0_0_6px_rgba(16,185,129,0.25)]"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://instagram.com/yabestheodorus"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition drop-shadow-[0_0_6px_rgba(16,185,129,0.25)]"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://linkedin.com/in/yabestheodorus"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition drop-shadow-[0_0_6px_rgba(16,185,129,0.25)]"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://wa.me/+6285155287233"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition drop-shadow-[0_0_6px_rgba(16,185,129,0.25)]"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
