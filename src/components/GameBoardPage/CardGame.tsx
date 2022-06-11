import { motion, useAnimation } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { gameCardType, spellNumber } from "../../types/allTypes";
import { gameCardAni } from "../../utils/animation";
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
  const column = (cardIndex % 3) + 1;
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
    if (turnNumber === cardIndex && doorStage === -1) {
      setCurrentCard(data);
      setTimeout(() => {
        setTurnNumber((prevState) => {
          if (prevState !== null) {
            return prevState + 1;
          }
          return null;
        });
      }, 9000);
    }
  };

  // Stages
  if (turnNumber === cardIndex) {
    if (doorStage === -1 && data.isWinner === true) {
      setDoorStage(0);
    }
    if (stage === 0) {
      setStage(1);
      setTimeout(() => {
        setTransferNum(true);
      }, 1900);
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
      }, 1000);
      setTimeout(() => {
        setTransferNum(false);
        setStage(2);
      }, 9000);
      setOnce(true);
    }

    if (stage === 2 && !onceStage2) {
      setTimeout(() => {
        aniControls.start("stage2");
      }, 200);
      setOnceStage2(true);
    }
  }

  const styles = {
    left: 6.55 + (column % 3) * 6.7 + "vw",
    top: 4 + cardIndex / 50 + "vw",
  };
  const spellStyles = (spellIndex: number) => {
    const column = (spellIndex % 3) + 1;
    return {
      right: 5 - column * 0.5 + "vw",
      bottom: -5 + Math.floor(spellIndex / 3) * 0.5 + "vw",
      width: 0.2 + "vw",
      height: 0.2 + "vw",
    };
  };

  const communityNumStyles: React.CSSProperties = {
    left: "0.3vw",
    bottom: "0vw",
  };
  const individualNumStyles: React.CSSProperties = {
    right: "0.5vw",
    bottom: "0vw",
  };

  return (
    <motion.div
      onAnimationComplete={cardAnimHandler}
      initial="hidden"
      animate={aniControls}
      variants={gameCardAni}
      custom={{
        cardIndex: cardIndex,
        styles: styles,
        spellGroup: data.spellGroup,
        spellNumber: spellNumber,
      }}
      className="w-[5.15vw] flex flex-col justify-center items-center text-white absolute z-10"
      style={{
        ...styles,
        transformStyle: "preserve-3d",
        perspective: "1000px",
        perspectiveOrigin: "50% 50%",
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
          src={"/img/team/member3.png"}
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