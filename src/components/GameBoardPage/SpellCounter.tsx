import { AnimatePresence, motion, MotionStyle } from "framer-motion";
import React, { useEffect, useState } from "react";
import { numsList } from "../../store/allData";
import { spellNumber } from "../../types/allTypes";
import { spellCounterAni } from "../../utils/animation";
import { colorSpell } from "../../utils/game";

interface props {
  spellNumber: spellNumber;
  spellGroup: string;
  doorStage: number;
}
const styles = (spellGroup: string): MotionStyle => {
  if (spellGroup === "yellow") {
    return {
      right: "54.3vw",
      top: "26vw",
      rotateZ: "50deg",
      rotateY: "70deg",
      scaleY: 0.8,
      fontSize: "1.5vw",
      textShadow: `0px 0px 10px ${colorSpell(spellGroup === "yellow")}`,
      color: colorSpell(spellGroup === "yellow"),
    };
  }
  return {
    right: "9.4vw",
    top: "26vw",
    scale: 0.8,
    rotateZ: "40deg",
    rotateY: "-65deg",
    fontSize: "1.7vw",
    textShadow: `0px 0px 10px ${colorSpell(spellGroup === "yellow")}`,
    color: colorSpell(spellGroup === "yellow"),
  };
};

const SpellCounter: React.FC<props> = ({
  spellNumber,
  spellGroup,
  doorStage,
}) => {
  const [nums, setNums] = useState(numsList);
  const [off, setOff] = useState(false);
  useEffect(() => {
    const activeIndex = nums.findIndex((el) => el.active === true);
    const timeBetweenTwoCounts = 300;
    if (off) return;
    setTimeout(() => {
      for (let i = activeIndex; i < spellNumber[spellGroup] && i <= 50; i++) {
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
          if (i <= 49) {
            setNums(newNums);
          }
        }, (i - activeIndex) * timeBetweenTwoCounts);
      }
    }, 3000);
    if (doorStage > -1) {
      setOff(true);
    }
  }, [spellNumber]);

  return (
    <motion.div
      style={styles(spellGroup)}
      className=" w-[3vw] h-[3vw] absolute flex justify-center items-center overflow-hidden "
    >
      <motion.div className="relative flex justify-center items-center w-full h-full -rotate-45">
        {nums.map((num) => {
          return (
            <React.Fragment key={num.number + "counter"}>
              <AnimatePresence exitBeforeEnter>
                {num.active && (
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    exit="out"
                    variants={spellCounterAni}
                    custom={0.4}
                    className="absolute"
                  >
                    {num.number}
                  </motion.span>
                )}
              </AnimatePresence>
            </React.Fragment>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default SpellCounter;
