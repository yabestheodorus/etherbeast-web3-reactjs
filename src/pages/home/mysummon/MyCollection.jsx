import React from "react";
import BeastCard from "../summon/components/BeastCard";
import useGetSummoned from "./hooks/useGetSummoned";
import BeastSummonedCard from "../summon/components/BeastSummonedCard";
import { decodeBase64Json } from "../../../Utils";

function MyCollection(props) {
  const { tokenURIs, tokenIds, error, isLoading } = useGetSummoned();

  const renderBeasts = () => {
    if (error) {
      return <div>Error: {JSON.stringify(error)}</div>;
    }

    return tokenURIs.map((tokenURI, i) => (
      <BeastSummonedCard
        key={tokenIds[i]?.toString()}
        tokenURIJson={decodeBase64Json(tokenURI)}
        tokenId={tokenIds[i]}
      />
    ));
  };

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
        {renderBeasts()}
      </div>

      <div class="mt-24 text-center text-xl text-slate-500">
        You haven’t summoned any beasts yet.
      </div>
    </div>
  );
}

export default MyCollection;
