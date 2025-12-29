import React from "react";
import { FaCircle, FaCrown, FaGem, FaStar } from "react-icons/fa";
import { GiBullHorns, GiCheckedShield, GiImperialCrown } from "react-icons/gi";
import { PiHeartbeatFill } from "react-icons/pi";
import { RiSwordFill } from "react-icons/ri";
import { TbShieldFilled } from "react-icons/tb";

function BeastCard({ imageName, beastName, description, rarity }) {
  //RENDER RARITY
  const renderRarity = () => {
    switch (rarity) {
      // common, rare, unique
      case "common":
        return (
          <span
            class="absolute flex items-center gap-x-1 top-2 right-2 px-2 py-0.5 rounded-full
    text-[10px] font-semibold uppercase tracking-wide
    bg-slate-500/20 text-slate-300 backdrop-blur"
          >
            <FaCircle size={8} /> Common
          </span>
        );
      case "rare":
        return (
          <span
            class="absolute flex items-center gap-x-1 top-2 right-2 px-2 py-0.5 rounded-full
    text-[10px] font-semibold uppercase tracking-wide
    bg-blue-500/20 text-blue-300 backdrop-blur"
          >
            <FaGem size={8} /> Rare
          </span>
        );
      case "unique":
        return (
          <span
            class="absolute flex items-center gap-x-1 top-2 right-2 px-2 py-0.5 rounded-full
    text-[10px] font-semibold uppercase tracking-wide
    bg-violet-500/25 text-violet-300 backdrop-blur"
          >
            <FaStar size={8} /> Unique
          </span>
        );

      case "legendary":
        return (
          <span
            class="absolute flex items-center gap-x-1 top-2 right-2 px-2 py-0.5 rounded-full
    text-[10px] font-semibold uppercase tracking-wide
    bg-amber-500/30 text-amber-300 backdrop-blur"
          >
            <GiImperialCrown lHorns size={10} /> Legendary
          </span>
        );
    }
  };
  return (
    <div className="relative z-10 flex w-55 items-center  justify-center hover:cursor-pointer hover:-translate-y-1.5 duration-200 ">
      <div
        className={
          "flex flex-col  bg-linear-to-br from-slate-600/40 to-slate-800/40  backdrop-blur-xl  border border-" +
          rarity +
          " items-center  rounded-3xl px-4 py-2"
        }
      >
        {renderRarity()}
        <div className="rounded-3xl flex w-fit overflow-hidden mt-2">
          <img
            src={"/" + imageName + ".png"}
            alt={beastName}
            className="w-full h-auto object-cover "
          />
        </div>

        <h1 className="text-left text-white font-semibold text-md w-full ml-1 mt-4 font-orbitron">
          {beastName}
        </h1>

        <div className="flex flex-col items-start gap-x-4 w-full">
          <div className="flex items-center gap-x-1 w-fit ">
            <RiSwordFill /> 1,500 - 4,500
          </div>

          <div className="flex items-center gap-x-1">
            <GiCheckedShield /> 1,500 - 4,500
          </div>

          <div className="flex items-center gap-x-1">
            <PiHeartbeatFill /> 15,000 - 65,535
          </div>
        </div>

        <p className="mt-2 text-gray-200 text-xs mb-2">{description}</p>
      </div>
    </div>
  );
}

export default BeastCard;
