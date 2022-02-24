import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { discordBtnAni } from "../../../utils/animation";
const DiscordBtn: React.FC = () => {
  const controls: AnimationControls = useAnimation();
  return (
    <motion.button
      onHoverStart={() => controls.start("visible")}
      onHoverEnd={() => controls.start("hidden")}
      className="relative w-[180px] h-[40px] flex justify-center items-center gap-x-5 bg-primary-500 hover:bg-opacity-90 hover:scale-110 duration-500 text-blackPrime font-bold text-xl"
    >
      <motion.svg
        width="180px"
        height="40px"
        viewBox="0 0 180 40"
        className="absolute top-0 left-0 z-0"
      >
        <motion.polyline
          initial="hidden"
          animate={controls}
          variants={discordBtnAni}
          points="179,1 179,39 1,39 1,1 179,1"
          strokeWidth={5}
          stroke={"#fff"}
          fill="none"
          className="bg-gray-500"
        />
      </motion.svg>
      Join Discord <FontAwesomeIcon icon={faArrowRight} />
    </motion.button>
  );
};

export default DiscordBtn;
