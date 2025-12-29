import { FaCircle, FaGem, FaStar, FaCrown } from "react-icons/fa";
import { GiImperialCrown } from "react-icons/gi";

export default function Rarity() {
  return (
    <div className="max-w-md mx-auto text-center">
      <h3 className="text-xl tracking-widest text-slate-400 mb-4">
        SUMMON PROBABILITIES
      </h3>

      <div className="space-y-3">
        <RarityRow
          icon={<FaCircle />}
          label="Common"
          value="50%"
          className="border-common text-slate-300"
        />

        <RarityRow
          icon={<FaGem />}
          label="Rare"
          value="30%"
          className="border-rare text-blue-300"
        />

        <RarityRow
          icon={<FaStar />}
          label="Unique"
          value="15%"
          className="border-unique text-violet-300"
        />

        <RarityRow
          icon={<GiImperialCrown size={15} />}
          label="Legendary"
          value="5%"
          className="border-legendary text-amber-300"
        />
      </div>

      <p className="mt-4 text-lg text-slate-500">
        Rarity is determined on-chain using Chainlink VRF.
      </p>
    </div>
  );
}

function RarityRow({ icon, label, value, className }) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg px-4 py-2 bg-black/40 ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="text-sm opacity-90">{icon}</span>
        <span className="font-medium">{label}</span>
      </div>
      <span className="font-medium">{value}</span>
    </div>
  );
}
