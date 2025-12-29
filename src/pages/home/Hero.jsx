import React from "react";
import BeastCard from "./component/BeastCard";
import { BsStars } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import BeastGallery from "./component/BeastGallery";
import useGetPrice from "./hooks/useGetPrice";
import { formatEther } from "viem";
import Spinner from "../component/Spinner";
import ErrorIcon from "../component/ErrorIcon";

function Hero(props) {
  const { tokenAmount, setTokenAmount, price, error, isLoading } =
    useGetPrice();

  return (
    <div className="flex flex-col ">
      <div class="absolute inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[34px_34px]"></div>
      <div
        className="absolute z-10 left-1/2 -translate-x-1/2 
            w-300 h-300 rounded-full bg-radial from-emerald-400/30 via-teal-400/15 
            to-transparent blur-xl"
      />
      <div className="flex w-full items-center py-24 z-30">
        <div className="w-7/12 flex flex-col ">
          <span className="block text-6xl  font-extrabold text-white">
            Unleash your monsters. Conquer the blockchain.
          </span>
          <span className="mt-4 block text-lg md:text-xl font-medium text-white/70">
            Step into a world where digital monsters come alive on the
            blockchain. Summon your beasts, explore rare and legendary
            creatures, and compete with players around the globe.
          </span>

          <div className="flex items-center mt-6 gap-x-6">
            <button className="flex items-center gap-x-2 from-emerald-800  to-[#209574] bg-linear-to-tr text-white px-8 py-2 rounded-xl mt-4 text-lg hover:brightness-110 hover:cursor-pointer">
              <BsStars size={20} className="text-white" />
              <h4>Summon Beast</h4>
            </button>
            <button className="flex items-center gap-x-2  text-white  bg-white/10  px-8 py-2 rounded-xl mt-4 text-lg hover:brightness-110 hover:cursor-pointer">
              <MdRemoveRedEye size={20} className="text-white" />
              <h4>See Collection</h4>
            </button>
          </div>
        </div>
        <div className="w-5/12 flex flex-col relative ">
          {/* Content */}
          <div className="grid grid-cols-2 gap-6 z-20">
            <BeastGallery
              index={1}
              imageName={"ice"}
              beastName={"Glaciron #146"}
            />

            <BeastGallery
              index={2}
              imageName={"fire"}
              beastName={"Pyrovane #146"}
            />

            <BeastGallery
              index={3}
              imageName={"nature"}
              beastName={"Sylvire #146"}
            />

            <BeastGallery
              index={4}
              imageName={"thunder"}
              beastName={"Voltan #146"}
            />
          </div>
        </div>
      </div>

      {/* statistics section  */}
      <div className="flex w-full justify-center items-center gap-x-16 z-30">
        <div className="flex flex-col items-center">
          <span className="text-white text-4xl font-extrabold font-orbitron">
            1K+
          </span>
          <span className="text-white/70 text-md font-medium ">
            Beasts summoned
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-white text-4xl font-extrabold font-orbitron">
            5%
          </span>
          <span className="text-white/70 text-md font-medium ">
            Legendary Rate
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-white text-4xl font-extrabold font-orbitron">
            {isLoading && <Spinner />}
            {error && <ErrorIcon />}
            {price && formatEther(price)}
          </span>
          <span className="text-white/70 text-md font-medium ">
            Token Price (ETH)
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-white text-4xl font-extrabold font-orbitron">
            ETH Sepolia
          </span>
          <span className="text-white/70 text-md font-medium ">
            Network (Testnet)
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
