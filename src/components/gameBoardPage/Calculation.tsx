import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { gameCardType } from "../../types/allTypes";
import { calcFadeAni, calcFirstResultAni } from "../../utils/animation";
import CardNum from "./CardNum";
interface props {
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
  currentCard,
  transferNum,
  setTransferNum,
}) => {
  const [showNum, setShowNum] = useState(true);
  const [layId, setLayId] = useState({
    community: "communityNum",
    individual: "individualNum",
  });
  const [resultLayoutId, setResultLayoutId] = useState({
    sideCard: "sideCardNum",
    firstLine: "sideCardNum",
    secondLine: "",
  });

  const [calcStage, setCalcStage] = useState<null | number>(null);

  const resultRef = useRef<null | number>(null);

  useEffect(() => {
    if (currentCard !== null) {
      setTimeout(() => {
        setShowNum(false);
        setCalcStage(null);
        setLayId({
          community: "",
          individual: "",
        });
      }, 8000);

      resultRef.current =
        currentCard.cardNum * currentCard.communityNum +
        currentCard.individualNum;
    }
  }, [currentCard]);

  useEffect(() => {
    // for first card
    if (transferNum === false && currentCard === null) {
      setTimeout(() => {
        setCalcStage(0);
        setShowNum(true);
        setLayId({
          community: "communityNum",
          individual: "individualNum",
        });
      }, 2000 + 6500);
      setTimeout(() => {
        setCalcStage(1);
      }, 5000 + 7000);
    }

    // for second card and more
    if (transferNum === false && currentCard) {
      setTimeout(() => {
        setCalcStage(0);
        setShowNum(true);
        setLayId({
          community: "communityNum",
          individual: "individualNum",
        });
      }, 2000);
      setTimeout(() => {
        setCalcStage(1);
      }, 5000);
    }
  }, [transferNum]);

  useEffect(() => {
    if (calcStage === null) {
      setResultLayoutId({
        sideCard: "sideCardNum",
        firstLine: "sideCardNum",
        secondLine: "",
      });
    }
    if (calcStage === 0) {
      setTimeout(() => {
        setResultLayoutId({
          sideCard: "sideCardNum",
          firstLine: "",
          secondLine: "sideCardNum",
        });
      }, 2000);
    }
  }, [calcStage]);

  return (
    <>
      {showNum === false && (
        <motion.div
          layoutId={resultLayoutId.sideCard}
          className="absolute left-[3vw] top-[22vw] bg-blue-900 text-white p-3"
        >
          {currentCard && currentCard.cardNum}
        </motion.div>
      )}
      <motion.div
        initial="hidden"
        animate="visible"
        exit="out"
        className="flex flex-col justify-start items-center absolute left-[5.5vw] bottom-[2.6vw] text-2xl bg-red-400 w-[22vw] h-[5vw]"
      >
        <AnimatePresence>
          {showNum && calcStage === 0 && (
            <>
              <motion.div
                layoutId={resultLayoutId.firstLine}
                className="w-[4.5vw] h-[2.5vw] bg-lime-300/20 absolute left-0 top-0"
              >
                {currentCard && currentCard.cardNum}
              </motion.div>

              <motion.div
                {...framer}
                variants={calcFadeAni}
                custom={1}
                className="w-[1.5vw] h-[2.5vw] bg-gray-300 absolute left-[4.5vw] top-0 text-center"
              >
                ×
              </motion.div>
              <motion.div
                {...framer}
                variants={calcFadeAni}
                className="w-[3vw] h-[2.5vw] bg-blue-300 absolute left-[6vw] top-0 text-center"
              >
                <motion.div className="w-full h-full relative flex justify-center items-center">
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
                custom={2}
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
                custom={3}
                variants={calcFadeAni}
                className="w-[1.5vw] h-[2.5vw] bg-gray-300 absolute left-[13.5vw] top-0 text-center"
              >
                =
              </motion.div>
              <motion.div
                layoutId="calcFirstResult"
                variants={calcFirstResultAni}
                {...framer}
                custom={0}
                className="w-[7vw] h-[2.5vw]  absolute left-[15vw] top-0 text-center"
              >
                {currentCard && transferNum === true && (
                  <motion.div className="relative flex justify-center items-center h-full w-full">
                    {resultRef.current}
                  </motion.div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {calcStage === 1 && (
            <>
              <motion.div
                variants={calcFirstResultAni}
                {...framer}
                custom={1}
                layoutId="calcFirstResult"
                className="w-[7vw] h-[2.5vw]  absolute left-[0vw] top-[2.5vw] text-center"
              >
                {currentCard && transferNum === true && (
                  <motion.div className="relative flex justify-center items-center h-full w-full">
                    {resultRef.current}
                  </motion.div>
                )}
              </motion.div>
              <motion.div
                {...framer}
                custom={1}
                variants={calcFadeAni}
                className="w-[1.5vw] h-[2.5vw] bg-gray-300 absolute left-[6.5vw] top-[2.5vw] text-center"
              >
                %
              </motion.div>
              <motion.div
                {...framer}
                custom={2}
                variants={calcFadeAni}
                className="w-[5.5vw] h-[2.5vw] bg-red-300 absolute left-[8vw] top-[2.5vw] text-center"
              >
                5250
              </motion.div>
              <motion.div
                {...framer}
                custom={3}
                variants={calcFadeAni}
                className="w-[1.5vw] h-[2.5vw] bg-gray-300 absolute left-[13.5vw] top-[2.5vw] text-center"
              >
                =
              </motion.div>
              <motion.div
                {...framer}
                custom={4}
                variants={calcFadeAni}
                layoutId={resultLayoutId.secondLine}
                className="w-[7vw] h-[2.5vw] bg-blue-300 absolute left-[15vw] top-[2.5vw] text-center"
              >
                {resultRef.current && resultRef.current % 5250}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Calculation;
