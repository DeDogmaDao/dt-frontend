import { motion } from "framer-motion";
import { useOnScrollAnimation } from "../../../hooks/useOnScrollAnimation";
import { goldenSecondAni } from "../../../utils/animation";

const GoldenPoint: React.FC = () => {
  const [element, controls] = useOnScrollAnimation(0.5);
  return (
    <motion.div className="flex flex-col justify-center items-center z-100 px-5 pt-10">
      <motion.h1 className="text-center text-[1.75rem] font-bold">
        Demmortal Treasure is more than just a
        <motion.span className="text-primary-500"> Collectible</motion.span>
      </motion.h1>
      <motion.p
        initial="hidden"
        variants={goldenSecondAni}
        ref={element}
        animate={controls}
        className="text-[1.25rem] font-extralight flex gap-x-1.5 justify-center flex-wrap"
      >
        {"It's a no-loss lottery powered by BLAST native yield, offering a self-sustaining economy through NFT ownership!"
          .split(" ")
          .map((word, index) => {
            return (
              <span
                key={word + index}
                className={`whitespace-nowrap ${
                  (index === 2 ||
                    index === 3 ||
                    index === 6 ||
                    index === 7 ||
                    index === 8) &&
                  "font-semibold"
                } ${
                  (index === 6 || index === 7 || index === 8) &&
                  "text-[#FCF533]"
                }`}
              >
                {word}
              </span>
            );
          })}
      </motion.p>
    </motion.div>
  );
};

export default GoldenPoint;
