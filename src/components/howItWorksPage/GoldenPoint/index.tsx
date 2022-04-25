import { motion } from "framer-motion";
import { goldenFirstAni } from "../../../utils/animation";


const GoldenPoint: React.FC = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-col justify-center items-center z-100">
      <motion.div  className="flex justify-center gap-x-1">
        <motion.span variants={goldenFirstAni}>Demmortal Treasure is more than a{" "}</motion.span>
        <motion.div>
          {"Collectable".split("").map((word,index) => {
            return <motion.span className="text-primary-500">{word}</motion.span>;
          })}
        </motion.div>
      </motion.div>
      <div>
        Sustainable economy empowered by Anti-Rug Protocols and a Daily Lottery
        with guaranteed prize. All by owning a NFT!
      </div>
    </motion.div>
  );
};

export default GoldenPoint;
