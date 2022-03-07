import { motion, useAnimation, Variants } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { gameCardType, spellNumber } from "../../types/allTypes";
import { gameCardAni, newGameCardAni } from "../../utils/animation";
import Spell from "./Spell";

interface props {
  data: gameCardType;
  index: number;
  layoutID: string;
  turnNumber: number | null;
  setTurnNumber: Dispatch<SetStateAction<number | null>>;
  arrayLength: number;
  spellNumber: spellNumber;
  setSpellNumber: Dispatch<SetStateAction<spellNumber>>;
}
const CardGame: React.FC<props> = ({
  data,
  index,
  layoutID,
  turnNumber,
  setTurnNumber,
  arrayLength,
  spellNumber,
  setSpellNumber,
}) => {
  // states
  const [once, setOnce] = useState(false);
  const spells = Array.from(Array(data.spellValue).keys());
  const column = (index % 4) + 1;
  const [stage, setStage] = useState(0);
  const aniControls = useAnimation();

  useEffect(() => {
    aniControls.start("visible");
  }, [aniControls]);

  // Handler
  const cardAnimHandler = () => {
    if (turnNumber === null && index === arrayLength - 1) {
      setTurnNumber(0);
    }
    if (turnNumber === index) {
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
  if (turnNumber === index) {
    if (stage === 0) {
      setStage(1);
    }
    if (stage === 1 && !once) {
      aniControls.start("stage1");
      setTimeout(() => {
        if (data.spellGroup === "yellow") {
          spells.forEach((el, index) => {
            setTimeout(() => {
              setSpellNumber((prevState) => ({
                ...prevState,
                yellow: prevState.yellow + 1,
              }));
            }, 100 * index);
          });
        } else {
          spells.forEach((el, index) => {
            setTimeout(() => {
              setSpellNumber((prevState) => ({
                ...prevState,
                blue: prevState.blue + 1,
              }));
            }, 100 * index);
          });
        }
      }, 1000);
      setTimeout(() => {
        setStage(2);
      }, 3000);
      setOnce(true);
    }
  }

  const styles = {
    left: 50 + ((column % 2) * 170 + index),
    top: 150 + ((Math.floor(column / 2 + 0.5) - 1) * 150 + index),
  };

  return (
    <motion.div
      layout
      onAnimationComplete={cardAnimHandler}
      initial="hidden"
      animate={aniControls}
      variants={gameCardAni}
      custom={index}
      className="w-20 flex flex-col justify-center items-center text-white absolute z-10"
      style={styles}
    >
      <motion.div
        transition={{ duration: 1 }}
        className="w-full h-full flex flex-col justify-center items-center relative"
      >
        <motion.div className="w-full h-full relative">
          {spells.map((spell) => {
            return <Spell spell={spell} isFliped={false} />;
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
