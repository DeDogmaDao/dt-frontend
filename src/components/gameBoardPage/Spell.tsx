import { motion } from "framer-motion";
interface props {
  spell: number;
}
const Spell: React.FC<props> = ({ spell }) => {
  return (
    <motion.div
      className="h-px w-px bg-yellow-500"
      style={{ left: 20 + spell * 10, top: 20 }}
    ></motion.div>
  );
};

export default Spell;
