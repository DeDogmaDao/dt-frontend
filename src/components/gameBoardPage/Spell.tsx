import { motion } from "framer-motion";
interface props {
  spell: number;
}
const Spell: React.FC<props> = ({ spell }) => {
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
    ></motion.div>
  );
};

export default Spell;
