import { motion, useAnimation } from "framer-motion";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { gameCardType, spellNumber } from "../../types/allTypes";
import { gameCardAni } from "../../utils/animation";
import {
  communityNumStyles,
  individualNumStyles,
  spellStyles,
  styles,
  times,
} from "../../utils/game";
import CardNum from "./CardNum";
import Spell from "./Spell";

interface props {
  data: gameCardType;
  gameCardData: gameCardType[];
  cardIndex: number;
  layoutID: string;
  turnNumber: number | null;
  setTurnNumber: Dispatch<SetStateAction<number | null>>;
  spellNumber: spellNumber;
  setSpellNumber: Dispatch<SetStateAction<spellNumber>>;
  setCurrentCard: Dispatch<SetStateAction<gameCardType | null>>;
  transferNum: boolean;
  setTransferNum: Dispatch<SetStateAction<boolean>>;
  doorStage: number;
  setDoorStage: Dispatch<SetStateAction<number>>;
}

const CardGame: React.FC<props> = ({
  data,
  cardIndex,
  turnNumber,
  setTurnNumber,
  gameCardData,
  spellNumber,
  setSpellNumber,
  setCurrentCard,
  transferNum,
  setTransferNum,
  doorStage,
  setDoorStage,
}) => {
  // states
  const [once, setOnce] = useState(false);
  const [onceStage2, setOnceStage2] = useState(false);
  const [stage, setStage] = useState(0);
  const aniControls = useAnimation();

  useEffect(() => {
    aniControls.start("visible");
  }, [aniControls]);

  // Handler
  const cardAnimHandler = () => {
    if (turnNumber === null && cardIndex === gameCardData.length - 1) {
      setTurnNumber(0);
    }
    if (turnNumber === cardIndex) {
      setCurrentCard(data);
    }
    if (turnNumber === cardIndex && doorStage === -1) {
      setTimeout(() => {
        setTurnNumber(prevState => prevState! + 1);
      }, times.turnTime);
    }
  };

  // Stages
  useLayoutEffect(() => {
    if (turnNumber === cardIndex) {
      if (doorStage === -1 && data.isWinner === true) {
        setTimeout(() => {
          setDoorStage(0);
        }, times.door0StageTime);
      }
      if (stage === 0) {
        setStage(1);
        setTimeout(() => {
          setTransferNum(true);
        }, times.transferNumTime);
      }
      if (stage === 1 && !once) {
        aniControls.start("stage1");
        setTimeout(() => {
          setSpellNumber((prevState) => ({
            ...prevState,
            [data.spellGroup + "CardCount"]:
              prevState[data.spellGroup + "CardCount"] + 1,
            [data.spellGroup]: data.total,
          }));
        }, times.transferSpellTime);
        setTimeout(() => {
          setTransferNum(false);
          setStage(2);
        }, times.turnTime);
        setOnce(true);
      }

      if (stage === 2 && !onceStage2 && !data.isWinner) {
        setTimeout(() => {
          aniControls.start("stage2");
        }, times.cardStage2AnimTime);
        setOnceStage2(true);
      }
    }
  }, [doorStage, turnNumber, stage]);

  return (
    <motion.div
      onAnimationComplete={cardAnimHandler}
      initial="hidden"
      animate={aniControls}
      variants={gameCardAni}
      custom={{
        cardIndex: cardIndex,
        styles: styles((cardIndex % 3) + 1, cardIndex),
        spellGroup: data.spellGroup,
        spellNumber: spellNumber,
      }}
      className="w-[5.15vw] flex flex-col justify-center items-center text-white absolute z-10"
      style={{
        ...styles((cardIndex % 3) + 1, cardIndex),
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        transition={{ duration: 1 }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full flex flex-col justify-center items-center relative"
      >
        <motion.div className="w-full h-full relative z-110">
          {data.spellValue.map((spell) => {
            return (
              <Spell
                key={spell + "d-spell"}
                spellIndex={data.total - data.spellValue.length + spell}
                spellNumber={spellNumber}
                spellGroup={data.spellGroup}
                showOrHidden={true}
                spellStyles={spellStyles(spell)}
              />
            );
          })}
        </motion.div>
        <motion.img
          style={{ translateZ: "-1px" }}
          className="w-full object-contain absolute top-0 left-0"
          src={"/img/game/cardBack.png"}
        />
        <motion.img className="w-full object-contain" src={data.image} />
        {stage === 1 && (
          <>
            <CardNum
              num={data.communityNum}
              styles={communityNumStyles}
              layoutID="communityNum"
              showHidden={true}
              transferNum={transferNum}
            />
            <CardNum
              num={data.individualNum}
              styles={individualNumStyles}
              layoutID="individualNum"
              showHidden={true}
              transferNum={transferNum}
            />
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CardGame;
