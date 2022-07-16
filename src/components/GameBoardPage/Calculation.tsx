import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { gameCardType } from "../../types/allTypes";
import {
  calcCardSideAni,
  calcFadeAni,
  calcFirstResultAni,
} from "../../utils/animation";
import CalcItem from "./CalcItem";
import CardNum from "./CardNum";
interface props {
  currentCard: gameCardType | null;
  firstCardNum: number;
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
  firstCardNum,
}) => {
  const [isWinner, setIsWinner] = useState(false);

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

      // there is an issue here************** come back to fix it (resultRef.current)
      setTimeout(() => {
        resultRef.current =
          currentCard.cardNum * currentCard.communityNum +
          currentCard.individualNum;
      }, 1000);
    }
    if(currentCard?.isWinner){
      setTimeout(() => {
        setIsWinner(true);
      }, 9000);
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
  if(isWinner) return null;

  return (
    <>
      <CalcItem
        framerVariant={calcCardSideAni}
        tailwindClasses="absolute left-[3vw] top-[20.5vw] bg-blue-900/0 text-[1.4vw] text-white p-3"
      >
        {firstCardNum}
      </CalcItem>
      {showNum === false && (
        <CalcItem
          framerLayoutId={resultLayoutId.sideCard}
          tailwindClasses="absolute left-[3vw] top-[22vw] bg-blue-900/0 text-[1.4vw] text-white p-3"
        >
          {resultRef.current && resultRef.current % 5250}
        </CalcItem>
      )}
      <motion.div
        initial="hidden"
        animate="visible"
        exit="out"
        className="flex flex-col justify-start items-center absolute left-[5.5vw] bottom-[2.6vw] text-[1.4vw] w-[22vw] h-[5vw]"
      >
        <AnimatePresence>
          {showNum && calcStage === 0 && (
            <>
              <CalcItem
                {...framer}
                framerVariant={calcFirstResultAni}
                framerCustom={1}
                framerLayoutId={resultLayoutId.firstLine}
                tailwindClasses="w-[4.5vw] h-[2.5vw] bg-lime-300/0 left-0 top-0"
              >
                {currentCard && currentCard.cardNum}
              </CalcItem>

              <CalcItem
                framerVariant={calcFadeAni}
                framerCustom={1}
                tailwindClasses="w-[1.5vw] h-[2.5vw] bg-gray-300/0 left-[4.5vw] top-0"
              >
                ×
              </CalcItem>
              <CalcItem
                framerVariant={calcFadeAni}
                tailwindClasses="w-[3vw] h-[2.5vw] bg-blue-300/0 left-[6vw] top-0"
              >
                <CardNum
                  num={currentCard?.communityNum}
                  styles={communityNumStyles}
                  layoutID={layId.community}
                  showHidden={false}
                  transferNum={transferNum}
                />
              </CalcItem>
              <CalcItem
                framerVariant={calcFadeAni}
                framerCustom={2}
                tailwindClasses="w-[1.5vw] h-[2.5vw] bg-gray-300/0 left-[9vw] top-0"
              >
                +
              </CalcItem>
              <CalcItem
                framerVariant={calcFadeAni}
                tailwindClasses="w-[3vw] h-[2.5vw] bg-purple-300/0 left-[10.5vw] top-0"
              >
                <CardNum
                  num={currentCard?.individualNum}
                  styles={individualNumStyles}
                  layoutID={layId.individual}
                  showHidden={false}
                  transferNum={transferNum}
                />
              </CalcItem>
              <CalcItem
                framerVariant={calcFadeAni}
                framerCustom={3}
                tailwindClasses="w-[1.5vw] h-[2.5vw] bg-gray-300/0 left-[13.5vw] top-0"
              >
                =
              </CalcItem>
              {currentCard && transferNum === true && (
                <CalcItem
                  framerVariant={calcFirstResultAni}
                  framerLayoutId="calcFirstResult"
                  framerCustom={0}
                  tailwindClasses="w-[7vw] h-[2.5vw] left-[15vw] top-0"
                >
                  {resultRef.current}
                </CalcItem>
              )}
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {calcStage === 1 && (
            <>
              {currentCard && transferNum === true && (
                <CalcItem
                  framerVariant={calcFirstResultAni}
                  framerCustom={1}
                  framerLayoutId="calcFirstResult"
                  tailwindClasses="w-[7vw] h-[2.5vw] left-[0vw] top-[2.5vw]"
                >
                  {resultRef.current}
                </CalcItem>
              )}
              <CalcItem
                framerVariant={calcFadeAni}
                framerCustom={1}
                tailwindClasses="w-[1.5vw] h-[2.5vw] bg-gray-300/0 left-[6.5vw] top-[2.5vw]"
              >
                %
              </CalcItem>
              <CalcItem
                framerVariant={calcFadeAni}
                framerCustom={2}
                tailwindClasses="w-[5.5vw] h-[2.5vw] bg-red-300/0 left-[8vw] top-[2.5vw]"
              >
                5250
              </CalcItem>
              <CalcItem
                framerVariant={calcFadeAni}
                framerCustom={3}
                tailwindClasses="w-[1.5vw] h-[2.5vw] bg-gray-300/0 left-[13.5vw] top-[2.5vw]"
              >
                =
              </CalcItem>
              <CalcItem
                framerCustom={4}
                framerVariant={calcFadeAni}
                framerLayoutId={resultLayoutId.secondLine}
                tailwindClasses="w-[7vw] h-[2.5vw] bg-blue-300/0 left-[15vw] top-[2.5vw]"
              >
                {resultRef.current && resultRef.current % 5250}
              </CalcItem>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Calculation;
