import { GiBullHorns } from "react-icons/gi";

function GatchaIdleCard() {
  return (
    <div
      className="relative w-55 rounded-3xl border border-slate-600/40 
                    bg-slate-800/40 backdrop-blur-xl
                    flex flex-col items-center justify-center
                    px-6 py-10 text-center
                    animate-idle-breath"
    >
      <div className="relative mb-4">
        <GiBullHorns size={48} className="text-slate-400/70" />
      </div>

      <p className="text-sm tracking-widest text-slate-300 uppercase">
        Beast Sealed
      </p>

      <p className="mt-2 text-xs text-slate-400 max-w-[180px]">
        Perform a gatcha to summon a random EtherBeast.
      </p>
    </div>
  );
}

export default GatchaIdleCard;
