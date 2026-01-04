import React from "react";
import { MdGeneratingTokens } from "react-icons/md";
import { formatEther } from "viem";
import ErrorIcon from "../../component/ErrorIcon";
import Spinner from "../../component/Spinner";
import useGetPrice from "./hooks/useGetPrice";
import useGetBalance from "./hooks/useGetBalance";
import useDeposit from "./hooks/useDeposit";
function Deposit(props) {
  const { tokenAmount, setTokenAmount, price, error, isLoading } =
    useGetPrice();
  const {
    buyTokens,
    buyTokenError,
    buyTokenIsLoading,
    isConfirming,
    isConfirmed,
  } = useDeposit();
  const {
    balance,
    error: errorBalance,
    isLoading: isLoadingBalance,
  } = useGetBalance();
  return (
    <section className="relative flex items-center  py-36 z-30 mt-12">
      <div className="w-1/2  px-6">
        <div className="flex flex-col w-fit mx-auto rounded-2xl border border-white/15 bg-white/15 backdrop-blur-xl p-6">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-lg text-white/60 ">
              Amount to Deposit
            </label>
            <span className="text-white flex items-center gap-x-2">
              {isLoading && <Spinner />}
              {error && <ErrorIcon />}
              {price && formatEther(price)} ETH
            </span>
          </div>

          <div className="flex items-center rounded-xl bg-black/40 border border-white/10 px-4 py-3 mt-2 mb-6">
            <input
              value={tokenAmount}
              onChange={(e) => setTokenAmount(e.target.value)}
              type="number"
              placeholder="0.0"
              className="flex-1 bg-transparent text-white text-lg outline-none placeholder:text-white/30"
            />

            <span className="ml-3 text-white/60 font-medium">ETB</span>
          </div>
          <button
            onClick={(e) => buyTokens(tokenAmount, price)}
            disabled={isLoading || error || !tokenAmount || !price}
            type="button"
            className="flex items-center px-12 w-fit mx-auto gap-x-2 py-4 rounded-xl font-semibold text-white text-lg bg-linear-to-tr from-emerald-600
        via-teal-500 to-cyan-500 hover:brightness-110 transition-all duration-300"
          >
            {buyTokenIsLoading ? (
              <Spinner />
            ) : buyTokenError ? (
              <ErrorIcon />
            ) : isConfirming ? (
              <>
                <Spinner />
                Confirming...
              </>
            ) : (
              <>
                <MdGeneratingTokens size={20} className="text-white" />
                Deposit Tokens
              </>
            )}
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <label className=" text-lg text-white/60 mb-2 flex items-center gap-x-2 select-text">
          Your Token (ETB) Balance :{" "}
          {isLoadingBalance ? (
            <Spinner />
          ) : errorBalance ? (
            <ErrorIcon />
          ) : (
            balance && formatEther(balance)
          )}
          {"  "}
          <img src="/coin2.png" className="w-6 h-6 object-contain" />
        </label>
        <h2 className="text-6xl font-bold text-white">
          Aquire EtherBeast Token
        </h2>

        <p className="mt-2 text-white/60">
          Lock EtherBeast tokens to earn rare drops.
        </p>
      </div>
    </section>
  );
}

export default Deposit;
