import { motion, Variants } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { gameCardType } from "../../types/allTypes";
import { gameCardFirstAni, newGameCardAni } from "../../utils/animation";
import Spell from "./Spell";
import isEqual from "lodash/isEqual";

interface props {
  data: gameCardType;
  index: number;
  isStarted: number | null;
  setIsStarted: Dispatch<SetStateAction<number | null>>;
}
const CardGame: React.FC<props> = ({
  data,
  index,
  isStarted,
  setIsStarted,
}) => {
  const spells = Array.from(Array(data.spellValue).keys());
  const column = (index % 4) + 1;
  const [cardColumn, setCardColumn] = useState(column);
  const [animVariant, setAnimVariant] = useState<Variants>(gameCardFirstAni);
  const [isFliped, setIsFliped] = useState(0);

  const cardAnimHandler = () => {
    if (index === 51 && isStarted === null) {
      setIsStarted(0);
    }
    if (isStarted === index) {
      setTimeout(() => {
        // @ts-ignore
        setIsStarted((prevState) => prevState + 1);
      }, 1000);
    }
  };

  if (index === isStarted && isStarted !== null && isFliped === 0) {
    setIsFliped(1);
    setAnimVariant(newGameCardAni);
  }

  return (
    <motion.div
      onAnimationComplete={cardAnimHandler}
      initial="hidden"
      animate="visible"
      variants={animVariant}
      custom={index}
      className="transform-gpu w-20 flex flex-col justify-center items-center text-white absolute duration-500"
      style={{
        left: 50 + (cardColumn % 2) * 170 + index,
        top: 150 + (Math.floor(cardColumn / 2 + 0.5) - 1) * 150 + index,
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center relative duration-500 hover:ring-2 hover:-translate-y-5 hover:ring-blue-500 hover:scale-110">
        <div className="w-full h-full relative">
          {spells.map((spell) => {
            return <Spell spell={spell} />;
          })}
        </div>
        <img
          className="w-full object-contain "
          src={data.image}
          loading="lazy"
        />
        {/* <p className="text-4xl text-primary-500">{data.name}</p> */}
      </div>
    </motion.div>
  );
};

export default CardGame;
