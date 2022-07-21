import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { spellNumber } from "../../types/allTypes";
import {
  doorLightAnimation,
  doorRingAni,
  doorToLeftAnimation,
  doorToRightAnimation,
} from "../../utils/animation";
import RingPin from "./RingPin";

interface props {
  spellNumber: spellNumber;
  doorStage: number;
}

const Door: React.FC<props> = ({ spellNumber, doorStage }) => {
  const doorAnimControls = useAnimation();
  const lightControls = useAnimation();

  useEffect(() => {
    // if (doorStage === 0) {
      setTimeout(() => {
        lightControls.start("visible");
      }, 1000);
    // }
  }, [doorStage]);

  return (
    <div className="absolute  top-[10.53vw] left-[59.05vw] w-[15.391vw] h-[26vw] bg-red-500">
      <div className="relative w-full h-full">
        <motion.div
          className="absolute bottom-0 right-0 w-[7.7vw] h-full z-0"
          initial="hidden"
          animate={doorAnimControls}
          variants={doorToRightAnimation}
        >
          <span className="w-full h-full relative">
            <motion.img
              src="/img/game/door.png"
              className="w-full h-full z-0"
            />
            <motion.span
              initial="hidden"
              animate={lightControls}
              variants={doorLightAnimation}
              className="absolute right-0 bottom-0 overflow-hidden"
            >
              <motion.img
                src="/img/game/light.png"
                className="w-[7.7vw] h-[26vw] max-w-[100vw] float-right"
              />
            </motion.span>
          </span>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-[7.7vw] h-full z-0 scale-x-[-1]"
          initial="hidden"
          animate={doorAnimControls}
          variants={doorToLeftAnimation}
        >
          <span className="w-full h-full relative">
            <motion.img
              src="/img/game/door.png"
              className="w-full h-full z-0 "
            />
              <motion.span
              initial="hidden"
              animate={lightControls}
              variants={doorLightAnimation}
              className="absolute right-0 bottom-0 overflow-hidden"
            >

            <img
              src="/img/game/light.png"
              className="w-[7.7vw] h-[26vw] max-w-[100vw] float-right "
              />
              </motion.span>
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={doorAnimControls}
          variants={doorToLeftAnimation}
          className="relative w-full h-full"
        >
          <RingPin spellNumber={spellNumber} />

          {/* {spellNumber.blue === spellNumber.yellow && (
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
          )} */}
        </motion.div>
      </div>
    </div>
  );
};

export default Door;
