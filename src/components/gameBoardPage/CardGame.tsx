import { motion, Variants } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { gameCardType } from "../../types/allTypes";
import { gameCardFirstAni, newGameCardAni } from "../../utils/animation";
import Spell from "./Spell";

interface props {
  data: gameCardType;
  index: number;
  isStarted: number | null;
  setIsStarted: Dispatch<SetStateAction<number | null>>;
  layoutID: string;
  hiddenShow: boolean;
}
const CardGame: React.FC<props> = ({
  data,
  index,
  isStarted,
  setIsStarted,
  layoutID,
  hiddenShow,
}) => {
  const spells = Array.from(Array(data.spellValue).keys());
  const column = (index % 4) + 1;
  const [cardColumn, setCardColumn] = useState(column);
  const [animVariant, setAnimVariant] = useState<Variants>(gameCardFirstAni);
  const [isFliped, setIsFliped] = useState(false);
  const [isShowed, setIsShowed] = useState(hiddenShow);

  // starting
  const cardAnimHandler = () => {
    if (index === 51 && isStarted === null) {
      setIsStarted(0);
    }
    if (isStarted === index) {
      setTimeout(() => {
        // @ts-ignore
        setIsStarted((prevState) => prevState + 1);
      }, 3000);
    }
  };

  // flipping
  if (index === isStarted && isStarted !== null && !isFliped) {
    setIsFliped(true);
    setAnimVariant(newGameCardAni);
    if (hiddenShow === false) {
      setIsShowed(true);
    } else {
      setIsShowed(false);
    }
  }

  if (!isShowed) return null;
  return (
    <motion.div
      layoutId={layoutID}
      onAnimationComplete={cardAnimHandler}
      initial="hidden"
      animate="visible"
      variants={animVariant}
      custom={index}
      className="transform-gpu w-20 flex flex-col justify-center items-center text-white absolute z-10"
      style={{
        left: 50 + ((cardColumn % 2) * 170 + index),
        top: 150 + ((Math.floor(cardColumn / 2 + 0.5) - 1) * 150 + index),
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center relative duration-500 hover:ring-2 hover:-translate-y-5 hover:ring-blue-500 hover:scale-110">
        <div className="w-full h-full relative">
          {spells.map((spell) => {
            return <Spell spell={spell} isFliped={isFliped} />;
          })}
        </div>
        <img
          className="w-full object-contain "
          src={data.image}
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default CardGame;
