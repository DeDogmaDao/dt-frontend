import { motion, MotionStyle } from "framer-motion";
import { useEffect, useState } from "react";
import { spellNumber } from "../../types/allTypes";
import RingPin from "./RingPin";

interface props {
  spellNumber: spellNumber;
}

const Door: React.FC<props> = ({ spellNumber }) => {
  return (
    <div className="absolute  top-[10.53vw] left-[59.05vw] w-[15.391vw] h-[26vw] bg-red-500">
      <div className="relative w-full h-full">
        <img
          src="/media/game/door.png"
          className="absolute bottom-0 right-0 w-[7.7vw] h-full z-0 "
        />
        <img
          src="/media/game/door.png"
          className="absolute bottom-0 left-0 w-[7.7vw] h-full z-0 scale-x-[-1]"
        />
      <RingPin spellNumber={spellNumber} />
      </div>
    </div>
  );
};

export default Door;
