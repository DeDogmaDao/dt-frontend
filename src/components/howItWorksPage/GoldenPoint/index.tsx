import { motion } from "framer-motion";
import { useOnScrollAnimation } from "../../../hooks/useOnScrollAnimation";
import { goldenSecondAni } from "../../../utils/animation";

const GoldenPoint: React.FC = () => {
  const [element, controls] = useOnScrollAnimation(0.5);
  return (
    <motion.div className="flex flex-col justify-center items-center z-100 px-5 pt-10">
      <motion.h1 className="text-center text-[1.75rem] font-bold">
        DeDogma is more than just a
        <motion.span className="text-primary-500"> Launchpad</motion.span>
      </motion.h1>
      <motion.p
        initial="hidden"
        variants={goldenSecondAni}
        ref={element}
        animate={controls}
        className="text-[1.25rem] font-extralight flex gap-x-1.5 justify-center flex-wrap"
      >
        {"It offers a guaranteed launch for games powered by anti-rug system and a unique judgment protocol on polygon!"
          .split(" ")
          .map((word, index) => {
            return (
              <span
                key={word + index}
                className={`whitespace-nowrap ${
                  (index === 6 ||
                    index === 9 ||
                    index === 10 ||
                    index === 17) &&
                  "font-semibold"
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
