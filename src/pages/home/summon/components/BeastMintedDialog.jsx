import React, { useState } from "react";
import useWatchMintEvent from "../hooks/useWatchMintEvent";
import useGetTokenUri from "../hooks/useGetTokenUri";
import BeastSummonedCard from "./BeastSummonedCard";

import useGatcha from "../hooks/useGatcha";
import GatchaIdleCard from "./GatchaIdleCard";
import GatchaSummoningCard from "./GatchaSummoningCard";
import SummonButton from "./SummonButton";
function BeastMintedDialog(props) {
  const { mintedTokenId, dialogState } = useWatchMintEvent();
  const { error, isLoading, tokenURIJson } = useGetTokenUri(mintedTokenId);

  const {
    giveApproval,
    isApprovePending,
    approveError,
    isApproveConfirming,
    isGatchaConfirming,
    isGatchaConfirmed,
  } = useGatcha();

  // const buttonText = validate is approving, is gatcha confirming, or is gatcha pending using ? : annotation
  const buttonText = isApprovePending
    ? "APPROVING..."
    : isApproveConfirming
    ? "CONFIRMING APPROVE..."
    : isGatchaConfirming
    ? "CONFIRMING GATCHA..."
    : isGatchaConfirmed && dialogState !== "RESULT"
    ? "Getting NFT metadata..."
    : dialogState === "RESULT"
    ? "Congratulations! You got a new beast!"
    : "HOLD TO SUMMON";

  const buttonDisabled =
    isApprovePending || isApproveConfirming || isGatchaConfirming;

  const isTxPending = isGatchaConfirming || isGatchaConfirmed;
  const isMetadataLoading = isLoading;
  const hasResult = mintedTokenId && tokenURIJson;

  const renderSummonButton = () => (
    <>
      <SummonButton
        buttonText={"Hold to summon"}
        buttonDisabled={buttonDisabled}
        action={() => giveApproval()}
      />
      <p className="mt-4 text-lg text-slate-500">
        Spend 1 ETB to perform a summon
      </p>
    </>
  );
  return (
    <>
      <button
        className="btn bg-black px-16 py-12 w-fit rounded-full mx-auto hover:animate-pulse hover:bg-emerald-500/15 text-emerald-300 text-2xl font-semibold tracking-widest select-none border border-emerald-600 hover:cursor-pointer"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Start Summon
      </button>
      <dialog id="my_modal_2" className="modal  ">
        <div className="modal-box flex flex-col items-center text-emerald-400 bg-slate-900/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-2xl p-8  w-5xl ">
          <span className="block text-2xl  w-full text-center  font-extrabold text-white">
            {buttonText}
          </span>

          <div className="min-h-120 w-full flex items-center justify-center">
            {error ? (
              <pre className="text-red-400 text-sm">{String(error)}</pre>
            ) : hasResult ? (
              <BeastSummonedCard
                tokenURIJson={tokenURIJson}
                tokenId={mintedTokenId}
              />
            ) : isTxPending ? (
              <GatchaSummoningCard />
            ) : mintedTokenId && isMetadataLoading ? (
              <div className="text-slate-400 text-sm animate-pulse">
                Revealing your beast…
              </div>
            ) : (
              <GatchaIdleCard />
            )}
          </div>

          {mintedTokenId && tokenURIJson ? (
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="relative z-10 w-fit py-4 px-12 rounded-full 
                         border border-slate-600/40 bg-slate-800 
                       text-slate-300 text-2xl font-semibold 
                         tracking-widest select-none  hover:cursor-pointer"
            >
              Confirm
            </button>
          ) : (
            renderSummonButton()
          )}
        </div>
        <form method="dialog" className="modal-backdrop ">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default BeastMintedDialog;
