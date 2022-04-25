import { motion } from "framer-motion";
import {
  goldenFirstAni,
  goldenSecondAni,
  goldenSplitAni,
} from "../../../utils/animation";

const GoldenPoint: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center z-100"
    >
      <motion.div className="flex justify-center gap-x-1 text-[1.75rem] font-bold">
        <motion.span variants={goldenFirstAni}>
          Demmortal Treasure is more than a{" "}
        </motion.span>
        <motion.div className="flex justify-between">
          {"Collectable".split("").map((word, index) => {
            return (
              <motion.span
                variants={goldenSplitAni}
                custom={index}
                className="text-primary-500"
              >
                {word}
              </motion.span>
            );
          })}
        </motion.div>
      </motion.div>
      <motion.div
        variants={goldenSecondAni}
        className="text-[1.25rem] font-semibold text-white/60"
      >
        Sustainable economy empowered by{" "}
        <span className=" text-white">Anti-Rug Protocols</span> and a{" "}
        <span className=" text-white">Daily Lottery</span> with
        guaranteed prize. All by owning a NFT!
      </motion.div>
    </motion.div>
  );
};

export default GoldenPoint;
