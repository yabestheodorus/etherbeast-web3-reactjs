import React from "react";
import BeastCard from "./component/BeastCard";

function MyCollection(props) {
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
  ];
  return (
    <div class="text-white px-6 pb-10 z-40 pt-24 ">
      <div class="max-w-7xl mx-auto w-full text-center">
        <span className="block text-6xl   font-extrabold text-white">
          Your Collection
        </span>
        <span className="mt-4 block text-lg md:text-xl font-medium text-white/70">
          Your summoned beasts, randomized and minted on-chain.
        </span>
      </div>

      <div class="max-w-7xl w-fit mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {beasts.map((beast, i) => (
          <BeastCard
            key={`${beast.id}-${i}`}
            imageName={beast.imageName}
            beastName={beast.beastName}
            description={beast.description}
            rarity={beast.rarity}
          />
        ))}
      </div>

      <div class="mt-24 text-center text-xl text-slate-500">
        You haven’t summoned any beasts yet.
      </div>
    </div>
  );
}

export default MyCollection;
