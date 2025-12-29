import React from "react";
import BeastCard from "./component/BeastCard";
import MotionCarousel from "../component/MotionCarousel";
import Rarity from "./component/Rarity";

import SummonButton from "../component/SummonButton";

function Summon(props) {
  const beasts = [
    {
      imageName: "ice",
      beastName: "Glaciron",
      rarity: "common",
      description:
        "An ancient ice guardian forged in eternal frost, crystallizing power through extreme cold.",
    },
    {
      imageName: "fire",
      beastName: "Pyrovane",
      rarity: "unique",

      description:
        "Born from raging infernos, its volatile flames surge unpredictably with raw destructive force.",
    },
    {
      imageName: "nature",
      beastName: "Sylvire",
      rarity: "rare",

      description:
        "A warden of living forests, bending wind and growth into perfect natural balance.",
    },
    {
      imageName: "thunder",
      beastName: "Voltan",
      rarity: "legendary",

      description:
        "Charged by storm clouds and lightning, striking with explosive speed and unstable energy.",
    },

    {
      imageName: "ice",
      beastName: "Glaciron",
      rarity: "rare",
      description:
        "An ancient ice guardian forged in eternal frost, crystallizing power through extreme cold.",
    },
    {
      imageName: "fire",
      beastName: "Pyrovane",
      rarity: "legendary",

      description:
        "Born from raging infernos, its volatile flames surge unpredictably with raw destructive force.",
    },
    {
      imageName: "nature",
      beastName: "Sylvire",
      rarity: "unique",

      description:
        "A warden of living forests, bending wind and growth into perfect natural balance.",
    },
    {
      imageName: "thunder",
      beastName: "Voltan",
      rarity: "common",

      description:
        "Charged by storm clouds and lightning, striking with explosive speed and unstable energy.",
    },
  ];
  const expandedBeasts = Array.from({ length: 4 }, () => beasts).flat();
  const items = expandedBeasts.map((beast, i) => (
    <BeastCard
      key={`${beast.id}-${i}`}
      imageName={beast.imageName}
      beastName={beast.beastName}
      description={beast.description}
      rarity={beast.rarity}
    />
  ));
  return (
    <div className="flex flex-col w-full z-40 mt-16">
      <span className="block text-6xl w-full text-center font-extrabold text-white">
        Summoning Portal
      </span>
      <span className="mt-4 block text-lg w-full text-center md:text-xl font-medium text-white/70">
        Burn tokens. Invoke randomness. Receive fate.
      </span>

      <div className="flex items-center mt-12">
        <div className="w-1/2">
          <MotionCarousel items={items} />
        </div>

        <div className="w-1/2">
          <Rarity />
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center">
        <SummonButton />
        <p className="mt-4 text-lg text-slate-500">
          Spend 1 ETB to perform a summon
        </p>
      </div>
    </div>
  );
}

export default Summon;
