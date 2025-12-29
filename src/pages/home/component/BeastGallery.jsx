import React from "react";
import FloatingAnimation from "../../component/FloatingAnimation";

function BeastGallery({ imageName, beastName, index }) {
  return (
    <FloatingAnimation index={index}>
      <div className="rounded-3xl flex w-fit overflow-hidden mt-2 ">
        <img
          src={"/" + imageName + ".png"}
          alt={beastName}
          className="w-full h-auto object-cover "
        />
      </div>
    </FloatingAnimation>
  );
}

export default BeastGallery;
