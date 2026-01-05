import React from "react";
import Footer from "./Footer";
import Summon from "./summon/Summon";
import Hero from "./hero/Hero";
import Deposit from "./deposit/Deposit";
import MyCollection from "./mysummon/MyCollection";

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
