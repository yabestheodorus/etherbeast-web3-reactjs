import React from "react";
import Hero from "./Hero";
import Deposit from "./Deposit";
import Summon from "./Summon";
import MyCollection from "./MyCollection";
import Footer from "./Footer";

function Home(props) {
  return (
    <div className="text-white flex flex-col select-none">
      <Hero />

      <Deposit />
      <Summon />

      <MyCollection />

      <Footer />
    </div>
  );
}

export default Home;
