import { motion } from "framer-motion";
import { useState } from "react";
import { gameCardType } from "../../types/allTypes";
import { gameCardFirstAni } from "../../utils/animation";

interface props {
  data: gameCardType;
  index: number;
}

const CardGame: React.FC<props> = ({ data, index }) => {
  const column = Math.ceil((index + 1) / 10);
  const [cardColumn, setCardColumn] = useState(column);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={gameCardFirstAni}
      custom={index}
      className=" w-20 flex flex-col justify-center items-center text-white absolute duration-500"
      style={{
        left: 50 + (cardColumn % 2) * 170 + (index % 10) * 5,
        top: 50 + (Math.floor(cardColumn / 2 + 0.5) -1)* 150,
      }}
    >
      <img className="w-full object-contain" src={data.image} loading="lazy" />
      {/* <p className="text-4xl text-primary-500">{data.name}</p> */}
    </motion.div>
  );
};

export default CardGame;
