import { motion } from "framer-motion";
import { useOnScrollAnimation } from "../../../hooks/useOnScrollAnimation";
import {
  goldenSecondAni,
} from "../../../utils/animation";

const GoldenPoint: React.FC = () => {
  const [element, controls] = useOnScrollAnimation(0.5);
  return (
    <motion.div className="flex flex-col justify-center items-center z-100 px-5 pt-10">
      <motion.div className="flex flex-wrap justify-center gap-x-2 text-[1.75rem] font-bold">
        {"Demmortal Treasure is more than just a"
          .split(" ")
          .map((word, index) => {
            return <motion.span key={word + index}>{word}</motion.span>;
          })}

        <motion.div className="flex justify-between whitespace-nowrap">
          {"Collectible".split("").map((word, index) => {
            return (
              <motion.span key={word + index} className="text-primary-500">{word}</motion.span>
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
        {"It’s a sustainable economy empowered by anti-rug protocols and a daily lottery with guaranteed prizes. All by owning a NFT!"
          .split(" ")
          .map((word, index) => {
            return (
              <span
              key={word + index}
                className={`whitespace-nowrap ${
                  (index === 6 ||
                    index === 7 ||
                    index === 10 ||
                    index === 11) &&
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
