import { motion, MotionStyle, useAnimation } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { gameCardType, spellNumber } from "../../types/allTypes";
import { opacityBlinkAni, pinAniDown, pinAniUp, ringPinAni } from "../../utils/animation";

interface props {
  spellNumber: spellNumber;
  currentCard: gameCardType | null;
  doorStage: number;
  setDoorStage:Dispatch<SetStateAction<number>>;
}
const RingPin: React.FC<props> = ({ spellNumber, currentCard, doorStage, setDoorStage }) => {
  const [styles, setStyles] = useState({
    topPin: {} as MotionStyle,
    bottomPin: {} as MotionStyle,
    ring: {} as MotionStyle,
  });
  const controls = useAnimation();
  const ringPinControls = useAnimation();
  const opacityControls = useAnimation();

  useEffect(() => {
    if (spellNumber.blue + spellNumber.yellowCardCount > 0) {
      controls.start("visible");
      ringPinControls.start("visible");
    }
    setTimeout(() => {
      const plusOrMinus = spellNumber.blue - spellNumber.yellow >= 0 ? -1 : 1;
      const delta: number = spellNumber.yellow - spellNumber.blue;
      setStyles({
        ring: { translateX: delta / 3 + "vw" },
        topPin: { translateY: (plusOrMinus * Math.pow(delta, 2)) / 350 + "vw" },
        bottomPin: {
          translateY: (plusOrMinus * -Math.pow(delta, 2)) / 400 + "vw",
        },
      });
    }, 3000);
  }, [spellNumber]);

  useEffect(() => {
    if (doorStage === 0) {
      setTimeout(() => {
        opacityControls.start("visible");
        controls.start("blink");
        setDoorStage(1);
      }, 7000);
    }
  }, [doorStage]);

  const customAni = {
    color: currentCard?.spellGroup,
    spellDiff: spellNumber.blue - spellNumber.yellow,
    spellSum: spellNumber.blue + spellNumber.yellow,
  };
  return (
    <motion.div
      style={styles.ring}

      className="absolute top-[12vw] left-1/2 ml-[-0.8vw] w-[1.6vw] h-[1.6vw] z-10 duration-2000 rounded-full
       "
    >
      <motion.div
            initial="hidden"
            animate={ringPinControls}
            variants={ringPinAni}
            custom={customAni}
      className="relative w-full h-full rounded-full">
        <img
          src="/img/game/ring.png"
          className="absolute bottom-0 left-0 w-full h-full"
        />
        <motion.img
          initial="hidden"
          animate={opacityControls}
          variants={opacityBlinkAni}
          src="/img/game/ringLight.png"
          className="absolute top-px left-0 w-full h-full z-10"
        />

        <motion.div
          style={styles.topPin}
          className="absolute  left-1/2 ml-[-0.33vw] top-[-0.58vw] z-20 duration-2000 flex"
        >
          <motion.span
            initial="hidden"
            animate={controls}
            variants={pinAniUp}
            custom={customAni}
            className="border-[0.3vw] border-transparent border-b-[0.28vw]  w-0 h-0 relative"
          >
            <motion.span
              initial="hidden"
              animate={controls}
              variants={pinAniDown}
              custom={customAni}
              className="w-0 h-0 absolute left-[-0.34vw] top-[0.27vw] border-[0.33vw] border-transparent border-t-[0.7vw] "
            ></motion.span>
          </motion.span>
        </motion.div>
        <motion.div
          style={{ ...styles.bottomPin, scaleY: -1 }}
          className="absolute bottom-[-0.8vw] left-1/2 ml-[-0.33vw] w-0 h-0 z-20 duration-2000 flex justify-start items-start"
        >
          <motion.span
            initial="hidden"
            animate={controls}
            variants={pinAniUp}
            custom={customAni}
            className="border-[0.3vw] border-transparent border-b-[0.28vw] w-0 h-0 relative"
          >
            <motion.span
              initial="hidden"
              animate={controls}
              variants={pinAniDown}
              custom={customAni}
              className="w-0 h-0 absolute left-[-0.34vw] top-[0.27vw] border-[0.33vw] border-transparent border-t-[0.7vw]  "
            ></motion.span>
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RingPin;
