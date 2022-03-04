import { motion } from "framer-motion";
import { spellAni } from "../../utils/animation";
interface props {
  spell: number;
  stage: number;
}
const Spell: React.FC<props> = ({ spell, stage }) => {
  const column = (spell % 3) + 1;
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
      variants={stage === 1 ? spellAni : {}}
      initial="hidden"
      animate="visible"
    ></motion.div>
  );
};

export default Spell;
