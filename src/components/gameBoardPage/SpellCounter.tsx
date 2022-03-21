import { AnimatePresence, motion, MotionStyle } from "framer-motion";
import { useState } from "react";
import { numsList } from "../../store/allData";
import { spellNumber } from "../../types/allTypes";
import { spellCounterAni } from "../../utils/animation";

interface props {
  spellNumber: spellNumber;
  spellGroup: string;
}
const styles = (spellGroup: string): MotionStyle => {
  if (spellGroup === "yellow") {
    return {
      right: "54.3vw",
      top: "26vw",
      rotateZ: "52deg",
      rotateY: "95deg",
    };
  }
  return {
    right: "9.4vw",
    top: "26vw",
    scale: 0.8,
    rotateZ: "35deg",
    rotateY: "-90deg",
  };
};

const SpellCounter: React.FC<props> = ({ spellNumber, spellGroup }) => {
  const [nums, setNums] = useState(numsList);
  return (
    <motion.div
      style={styles(spellGroup)}
      className=" w-[3vw] h-[3vw] absolute text-[1.7vw] flex justify-center items-center overflow-hidden"
    >
      <motion.div className="flex flex-col justify-center items-center w-full h-full -rotate-45">
        {nums.map((num) => {
          return (
            <>
              <AnimatePresence exitBeforeEnter>
                {spellNumber[spellGroup] === num && (
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    exit="out"
                    variants={spellCounterAni}
                  >
                    {num}
                  </motion.span>
                )}
              </AnimatePresence>
            </>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default SpellCounter;
