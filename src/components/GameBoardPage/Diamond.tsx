import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Dispatch, SetStateAction, useEffect } from "react";
import { gameCardType, spellNumber } from "../../types/allTypes";
import {
  allDiamondAni,
  diamondAniDown,
  diamondAniUp,
} from "../../utils/animation";
import { colorSpell, diamondSpells, times } from "../../utils/game";
import Spell from "./Spell";

interface props {
  spellNumber: spellNumber;
  currentCard: gameCardType | null;
  doorStage: number;
  setDoorStage: Dispatch<SetStateAction<number>>;
}

const Diamond: React.FC<props> = ({
  spellNumber,
  currentCard,
  doorStage,
  setDoorStage,
}) => {
  const controls = useAnimation();
  const allControls = useAnimation();
  useEffect(() => {
    controls.start("visible");
  }, [spellNumber]);
  useEffect(() => {
    if (doorStage === 2) {
      setTimeout(() => {
        allControls.start("visible");
        setDoorStage(3);
      }, times.door3StageTime);
    }
  }, [doorStage]);
  return (
    <>
      <motion.div className="w-[1.8vw] h-[3vw] absolute top-[2.55vw] right-[32.4vw] z-100">
        {diamondSpells.map((spell) => {
          return (
            <Spell
              key={spell + "d-spell"}
              spellIndex={spell + 51}
              spellGroup={currentCard?.spellGroup ?? "blue"}
              spellNumber={spellNumber}
              showOrHidden={false}
              spellStyles={{
                bottom: "1.4vw",
                right: "0.8vw",
                width: "0.2vw",
                height: "0.2vw",
              }}
            />
          );
        })}
      </motion.div>
      <motion.div className="w-[1.8vw] h-[3vw] absolute top-[2.55vw] right-[32.4vw] hover:scale-125 duration-300 z-[1000]">
        <motion.div
          initial="hidden"
          animate={allControls}
          variants={allDiamondAni}
          className="w-ful h-full relative flex justify-center items-center"
        >
          <motion.span
            initial="hidden"
            animate={controls}
            variants={diamondAniUp}
            custom={{
              color: currentCard?.spellGroup,
              spellDiff: spellNumber.blue - spellNumber.yellow,
              spellSum: spellNumber.blue + spellNumber.yellow,
            }}
            className="z-0 w-0 h-0 border-[0.9vw] border-transparent border-b-[1.5vw] relative top-[-1.3vw]"
          >
            <motion.span
              initial="hidden"
              animate={controls}
              variants={diamondAniDown}
              custom={{
                color: currentCard?.spellGroup,
                spellDiff: spellNumber.blue - spellNumber.yellow,
                spellSum: spellNumber.blue + spellNumber.yellow,
              }}
              className="absolute left-[-0.9vw] top-[1.5vw] w-0 h-0  border-[0.9vw]
          border-transparent border-t-[1.55vw] "
            ></motion.span>
          </motion.span>
          <motion.img
            className="w-full h-full z-110 absolute left-0 top-0"
            src="/img/game/diamond.png"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Diamond;
