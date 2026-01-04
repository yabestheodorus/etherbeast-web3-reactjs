import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
function Footer(props) {
  return (
    <footer className="pt-24  z-40">
      <div className="mx-auto  max-w-6xl px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-t border-slate-800  backdrop-blur shadow-[0_-10px_40px_rgba(16,185,129,0.05)]">
        {/* Left */}
        <div className="flex flex-col gap-1">
          <span className="text-lg text-slate-500">
            A project by{" "}
            <a
              href="https://yabex.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald-400 hover:text-emerald-300 transition"
            >
              yabes.dev
            </a>
          </span>
          <span className="text-md text-slate-600">
            © 2025 EtherBeast. All Beasts are summoned on-chain.
          </span>
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
            aria-label="LinkedIn"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
