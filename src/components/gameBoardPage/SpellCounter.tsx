import { AnimatePresence, motion, MotionStyle } from "framer-motion";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const activeIndex = nums.findIndex((el) => el.active === true);
    setTimeout(() => {
      for (let i = activeIndex; i < spellNumber[spellGroup]; i++) {
        setTimeout(() => {
          const newNums = nums.map((el, index) => {
            let returnValue = { ...el };

            if (index === 1 + i) {
              returnValue.active = true;
            } else {
              returnValue.active = false;
            }
            return returnValue;
          });
          setNums(newNums);
        }, (i - activeIndex) * 500);
      }
    }, 3000);
  }, [spellNumber[spellGroup]]);

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
                {num.active && (
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    exit="out"
                    variants={spellCounterAni}
                  >
                    {num.number}
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
