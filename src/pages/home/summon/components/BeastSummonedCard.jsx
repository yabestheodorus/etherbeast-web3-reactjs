import React, { useMemo } from "react";
import { FaCircle, FaCrown, FaGem, FaStar } from "react-icons/fa";
import { GiBullHorns, GiCheckedShield, GiImperialCrown } from "react-icons/gi";
import { PiHeartbeatFill } from "react-icons/pi";
import { RiSwordFill } from "react-icons/ri";
import { TbShieldFilled } from "react-icons/tb";

function BeastSummonedCard({ tokenURIJson, tokenId }) {
  const { name, image, attributes = [] } = tokenURIJson ?? {};

  // ---- normalize attributes into an object ----
  const stats = useMemo(() => {
    return attributes.reduce((acc, attr) => {
      acc[attr.trait_type] = attr.value;
      return acc;
    }, {});
  }, [attributes]);

  const rarity = (stats.Rarity || "Common").toLowerCase();
  const attack = stats.Attack ?? 0;
  const defense = stats.Defense ?? 0;
  const hp = stats.HP ?? 0;
  const element = stats.Element ?? 0;

  // ---- RARITY BADGE ----
  const renderRarity = () => {
    switch (rarity) {
      case "common":
        return (
          <span className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase bg-slate-500/20 text-slate-300">
            <FaCircle size={8} /> Common
          </span>
        );
      case "rare":
        return (
          <span className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase bg-blue-500/20 text-blue-300">
            <FaGem size={8} /> Rare
          </span>
        );
      case "unique":
        return (
          <span className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase bg-violet-500/25 text-violet-300">
            <FaStar size={8} /> Unique
          </span>
        );
      case "legendary":
        return (
          <span className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase bg-amber-500/30 text-amber-300">
            <GiImperialCrown size={10} /> Legendary
          </span>
        );
      default:
        return null;
    }
  };

  const renderName = () => {
    switch (element) {
      case "Fire":
        return "Pyrovane #" + tokenId;
      case "Ice":
        return "Glaciron #" + tokenId;

      case "Nature":
        return "Sylvire #" + tokenId;

      case "Thunder":
        return "Voltan #" + tokenId;

      default:
        return "Beast #" + tokenId;
    }
  };

  const renderDescription = () => {
    switch (element) {
      case "Fire":
        return "Born from raging infernos, its volatile flames surge unpredictably with raw destructive force.";
      case "Thunder":
        return "Charged by storm clouds and lightning, striking with explosive speed and unstable energy.";

      case "Nature":
        return "A warden of living forests, bending wind and growth into perfect natural balance.";

      case "Ice":
        return "An ancient ice guardian forged in eternal frost, crystallizing power through extreme cold.";

      default:
        return "Beast #" + tokenId;
    }
  };
  return (
    <div className="relative z-10 flex w-56 justify-center hover:-translate-y-1.5 transition">
      <div
        className={`flex flex-col items-center rounded-3xl px-4 py-3
        backdrop-blur-xl bg-slate-800/40 border border-${rarity}`}
      >
        {renderRarity()}

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden mt-2">
          <img
            src={image || "/placeholder.png"}
            alt={name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* NAME */}
        <h1 className="mt-4 w-full text-white font-semibold text-md font-orbitron">
          {renderName()}
        </h1>

        {/* STATS */}
        <div className="mt-2 flex flex-col gap-1 w-full text-gray-200 text-sm">
          <div className="flex items-center gap-1">
            <RiSwordFill /> {attack.toLocaleString()}
          </div>
          <div className="flex items-center gap-1">
            <GiCheckedShield /> {defense.toLocaleString()}
          </div>
          <div className="flex items-center gap-1">
            <PiHeartbeatFill /> {hp.toLocaleString()}
          </div>
        </div>

        <p className="mt-2 text-gray-200 text-xs mb-2">{renderDescription()}</p>
      </div>
    </div>
  );
}

export default BeastSummonedCard;
