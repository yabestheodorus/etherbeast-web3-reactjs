import React from "react";
import { GiBullHorns } from "react-icons/gi";

function GatchaSummoningCard(props) {
  return (
    <div
      className="
        relative flex flex-col items-center justify-center
        w-full h-90 
        overflow-hidden
      "
    >
      {/* Rotating sigil */}
      <div
        className="absolute w-46 h-46 rounded-full
          border border-common
           animate-ping"
      />

      <div
        className="absolute w-30 h-30 rounded-full
          border border-slate-400/30
          animate-ping"
      />

      {/* Beast icon */}
      <GiBullHorns
        size={72}
        className="text-slate-300/70 drop-shadow-[0_0_20px_rgba(148,163,184,0.4)]"
      />

      {/* Text */}
      <p className="mt-6 text-slate-300 text-sm tracking-widest uppercase">
        Summoning
      </p>
    </div>
  );
}

export default GatchaSummoningCard;
