import { motion, useAnimation, Variants } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { gameCardType, spellNumber } from "../../types/allTypes";
import { gameCardAni, newGameCardAni } from "../../utils/animation";
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
}
const CardGame: React.FC<props> = ({
  data,
  cardIndex,
  layoutID,
  turnNumber,
  setTurnNumber,
  gameCardData,
  spellNumber,
  setSpellNumber,
}) => {
  // states
  const [once, setOnce] = useState(false);
  const spells = Array.from(Array(data.spellValue).keys());
  const column = (cardIndex % 4) + 1;
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
      setTimeout(() => {
        setTurnNumber((prevState) => {
          if (prevState !== null) {
            return prevState + 1;
          }
          return null;
        });
      }, 3000);
    }
  };

  // Stages
  if (turnNumber === cardIndex) {
    if (stage === 0) {
      setStage(1);
    }
    if (stage === 1 && !once) {
      aniControls.start("stage1");
      setTimeout(() => {
        if (data.spellGroup === "yellow") {
          setSpellNumber((prevState) => ({
            ...prevState,
            yellow: prevState.yellow + data.spellValue,
          }));
        } else {
          setSpellNumber((prevState) => ({
            ...prevState,
            blue: prevState.blue + data.spellValue,
          }));
        }
      }, 1000);
      setTimeout(() => {
        setStage(2);
      }, 3000);
      setOnce(true);
    }
  }

  const styles = {
    left: 50 + ((column % 2) * 170 + cardIndex),
    top: 150 + ((Math.floor(column / 2 + 0.5) - 1) * 150 + cardIndex),
  };
  return (
    <motion.div
      layout
      onAnimationComplete={cardAnimHandler}
      initial="hidden"
      animate={aniControls}
      variants={gameCardAni}
      custom={cardIndex}
      className="w-20 flex flex-col justify-center items-center text-white absolute z-10"
      style={styles}
    >
      <motion.div
        transition={{ duration: 1 }}
        className="w-full h-full flex flex-col justify-center items-center relative"
      >
        <motion.div className="w-full h-full relative">
          {spells.map((spell, index) => {
            return (
              <Spell
                spell={spell}
                isFliped={false}
                cardIndex={cardIndex}
                spellIndex={index}
                data={data}
                gameCardData={gameCardData}
                spellNumber={spellNumber}
              />
            );
          })}
        </motion.div>
        <motion.img
          className="w-full object-contain"
          src={data.image}
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
};

export default CardGame;
