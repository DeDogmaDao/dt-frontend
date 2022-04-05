import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { spellNumber } from "../../types/allTypes";
import {
  doorRingAni,
  doorToLefttAnimation,
  doorToRightAnimation,
} from "../../utils/animation";
import RingPin from "./RingPin";

interface props {
  spellNumber: spellNumber;
  doorStage: number;
}

const Door: React.FC<props> = ({ spellNumber, doorStage }) => {
  const doorAnimControls = useAnimation();

  useEffect(() => {
    if (doorStage === 0) {
      setTimeout(() => {
        doorAnimControls.start("visible");
      }, 9000);
    }
  }, [doorStage]);

  return (
    <div className="absolute  top-[10.53vw] left-[59.05vw] w-[15.391vw] h-[26vw] bg-red-500">
      <div className="relative w-full h-full">
        <motion.img
          initial="hidden"
          animate={doorAnimControls}
          variants={doorToRightAnimation}
          src="/media/game/door.png"
          className="absolute bottom-0 right-0 w-[7.7vw] h-full z-0 "
        />
        <motion.img
          initial="hidden"
          animate={doorAnimControls}
          variants={doorToLefttAnimation}
          src="/media/game/door.png"
          className="absolute bottom-0 left-0 w-[7.7vw] h-full z-0 scale-x-[-1]"
        />
        <motion.div
          initial="hidden"
          animate={doorAnimControls}
          variants={doorToLefttAnimation}
          className="relative w-full h-full"
        >
          <RingPin spellNumber={spellNumber} />

          {spellNumber.blue === spellNumber.yellow && (
            <motion.svg className="absolute overflow-visible top-[13.17vw] left-[7.65vw] z-0">
              <motion.circle
                initial="hidden"
                animate="visible"
                variants={doorRingAni}
                cx="0"
                cy="0"
                r="0.68vw"
                stroke="#16FBFF"
                strokeWidth="0.4vw"
                fill="none"
              />
            </motion.svg>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Door;
