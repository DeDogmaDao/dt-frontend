import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { gameCardType } from "../../types/allTypes";
import { calcFadeAni, calcFirstResultAni } from "../../utils/animation";
import CardNum from "./CardNum";
interface props {
  firstCardNum: number;
  currentCard: gameCardType | null;
  transferNum: boolean;
  setTransferNum: Dispatch<SetStateAction<boolean>>;
}

const communityNumStyles: React.CSSProperties = {};
const individualNumStyles: React.CSSProperties = {};
const framer = {
  initial: "hidden",
  animate: "visible",
  exit: "out",
};

const Calculation: React.FC<props> = ({
  firstCardNum,
  currentCard,
  transferNum,
  setTransferNum,
}) => {

  const [showNum, setShowNum] = useState(true);
  const [layId, setLayId] = useState({
    community: "communityNum",
    individual: "individualNum",
  });

  useEffect(() => {
    if (currentCard !== null) {
      setTimeout(() => {
        setShowNum(false);
        setLayId({
          community: "",
          individual: "",
        });
      }, 8000);
    }
  }, [currentCard]);

  useEffect(() => {
    if (transferNum === false) {
      setTimeout(() => {
        setShowNum(true);
        setLayId({
          community: "communityNum",
          individual: "individualNum",
        });
      }, 2000);
    }
  }, [transferNum]);

  return (
    <>
      <motion.div
        layoutId="cardNum"
        className="absolute left-[3vw] top-[22vw] bg-blue-900 text-white p-3"
      >
        {firstCardNum}
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="out"
        className="flex flex-col justify-start items-center absolute left-[5.5vw] bottom-[2.6vw] text-2xl bg-red-400 w-[22vw] h-[5vw]"
      >
        <AnimatePresence>
          {showNum && (
            <>
              <motion.div
                layoutId="cardNum"
                className="w-[4.5vw] h-[2.5vw] bg-lime-300 absolute left-0 top-0"
              ></motion.div>

              <motion.div
                {...framer}
                variants={calcFadeAni}
                className="w-[1.5vw] h-[2.5vw] bg-gray-300 absolute left-[4.5vw] top-0 text-center"
              >
                ×
              </motion.div>
              <motion.div
                {...framer}
                variants={calcFadeAni}
                className="w-[3vw] h-[2.5vw] bg-blue-300 absolute left-[6vw] top-0 text-center"
              >
                <motion.div
                  className="w-full h-full relative flex justify-center items-center"
                >
                  <CardNum
                    num={currentCard?.communityNum}
                    styles={communityNumStyles}
                    layoutID={layId.community}
                    showHidden={false}
                    transferNum={transferNum}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                {...framer}
                variants={calcFadeAni}
                className="w-[1.5vw] h-[2.5vw] bg-gray-300 absolute left-[9vw] top-0 text-center"
              >
                +
              </motion.div>
              <motion.div
                {...framer}
                variants={calcFadeAni}
                className="w-[3vw] h-[2.5vw] bg-purple-300 absolute left-[10.5vw] top-0 text-center"
              >
                <motion.div className="w-full h-full relative flex justify-center items-center">
                  <CardNum
                    num={currentCard?.individualNum}
                    styles={individualNumStyles}
                    layoutID={layId.individual}
                    showHidden={false}
                    transferNum={transferNum}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                {...framer}
                variants={calcFadeAni}
                className="w-[1.5vw] h-[2.5vw] bg-gray-300 absolute left-[13.5vw] top-0 text-center"
              >
                =
              </motion.div>
              {currentCard && transferNum ===true && (
              <motion.div
                {...framer}
                variants={calcFirstResultAni}
                
                className="w-[7vw] h-[2.5vw] bg-orange-300 absolute left-[15vw] top-0 text-center"
              >
                  <div className="relative flex justify-center items-center h-full w-full">
                    {currentCard?.cardNum * currentCard?.communityNum +
                      currentCard?.individualNum}
                  </div>
              </motion.div>
                )}
            </>
          )}
        </AnimatePresence>

        <motion.div    {...framer}
                variants={calcFadeAni} className="w-[6.5vw] h-[2.5vw] bg-green-300/20 absolute left-[0vw] top-[2.5vw] text-center"></motion.div>
        <motion.div    {...framer}
                variants={calcFadeAni} className="w-[1.5vw] h-[2.5vw] bg-gray-300 absolute left-[6.5vw] top-[2.5vw] text-center">
          %
        </motion.div>
        <motion.div    {...framer}
                variants={calcFadeAni} className="w-[5.5vw] h-[2.5vw] bg-red-300 absolute left-[8vw] top-[2.5vw] text-center"></motion.div>
        <motion.div    {...framer}
                variants={calcFadeAni} className="w-[1.5vw] h-[2.5vw] bg-gray-300 absolute left-[13.5vw] top-[2.5vw] text-center">
          %
        </motion.div>
        <motion.div    {...framer}
                variants={calcFadeAni} className="w-[7vw] h-[2.5vw] bg-blue-300 absolute left-[15vw] top-[2.5vw] text-center"></motion.div>
      </motion.div>
    </>
  );
};

export default Calculation;
