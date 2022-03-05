import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { spellAni } from "../../utils/animation";
interface props {
  spell: number;
  isFliped: boolean;
}
const Spell: React.FC<props> = ({ spell, isFliped }) => {
  const column = (spell % 3) + 1;
  // const [animVariant, setAnimVariant] = useState<Variants>({});
  // useEffect(() => {
  //   if(isFliped){
  //     setTimeout(() => {
  //       setAnimVariant(spellAni);
  //     }, 500);
  //   }
  // }, [isFliped])
  return (
    <motion.div
      className="rounded-full bg-yellow-500 absolute"
      style={{
        left: 5 + column * 5,
        top: 5 + Math.floor(spell / 3) * 10,
        width: 3,
        height: 3,
      }}
      custom={spell}
      initial="hidden"
      animate="visible"
    ></motion.div>
  );
};

export default Spell;
