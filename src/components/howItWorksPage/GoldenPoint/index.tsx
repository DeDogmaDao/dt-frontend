import { motion } from "framer-motion";
import { useOnScrollAnimation } from "../../../hooks/useOnScrollAnimation";
import {
  goldenContainerAni,
  goldenFirstAni,
  goldenSecondAni,
  goldenSplitAni,
} from "../../../utils/animation";

const GoldenPoint: React.FC = () => {
  const [element, controls] = useOnScrollAnimation(0.5);
  return (
    <motion.div className="flex flex-col justify-center items-center z-100 px-5">
      <motion.div className="flex flex-wrap justify-center gap-x-2 text-[1.75rem] font-bold">
        {"Demmortal Treasure is more than a".split(" ").map((word, index) => {
          return <motion.span>{word}</motion.span>;
        })}

        <motion.div className="flex justify-between whitespace-nowrap">
          {"Collectible".split("").map((word, index) => {
            return (
              <motion.span className="text-primary-500">{word}</motion.span>
            );
          })}
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        variants={goldenSecondAni}
        ref={element}
        animate={controls}
        className="text-[1.25rem] font-extralight flex gap-x-1.5 justify-center flex-wrap"
      >
        {"Sustainable economy empowered by Anti-Rug Protocols and a Daily Lottery with guaranteed prize. All by owning a NFT!"
          .split(" ")
          .map((word, index) => {
            return (
              <span
                className={`whitespace-nowrap ${
                  (index === 4 || index === 5 || index === 8 || index === 9) &&
                  "font-semibold"
                }`}
              >
                {word}
              </span>
            );
          })}
      </motion.div>
    </motion.div>
  );
};

export default GoldenPoint;
