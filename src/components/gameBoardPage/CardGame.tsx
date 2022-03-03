import { motion } from "framer-motion";
import { useState } from "react";
import { gameCardType } from "../../types/allTypes";
import { gameCardFirstAni } from "../../utils/animation";
import Spell from "./Spell";

interface props {
  data: gameCardType;
  index: number;
}
const CardGame: React.FC<props> = ({ data, index }) => {
  //   const column = Math.ceil((index + 1) / 10);
  const spells = Array.from(Array(data.spellValue).keys());
  const column = (index % 4) + 1;
  const [cardColumn, setCardColumn] = useState(column);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={gameCardFirstAni}
      custom={index}
      className="transform-gpu w-20 flex flex-col justify-center items-center text-white absolute duration-500"
      style={{
        left: 50 + (cardColumn % 2) * 170 + index,
        top: 150 + (Math.floor(cardColumn / 2 + 0.5) - 1) * 150 + index,
      }}
    >
      <img
        className="w-full object-contain duration-500 hover:ring-2 hover:ring-blue-500 hover:scale-110"
        src={data.image}
        loading="lazy"
      />
      {/* <p className="text-4xl text-primary-500">{data.name}</p> */}
      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full relative">
          {spells.map((spell) => {
            return <Spell spell={spell} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default CardGame;
