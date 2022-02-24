import {  faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { discordBtnAni } from "../../../utils/animation";
const DiscordBtn: React.FC = () => {
  const controls: AnimationControls = useAnimation();
  return (
    <motion.button
      onHoverStart={() => controls.start("visible")}
      onHoverEnd={() => controls.start("hidden")}
      className="relative w-[180px] h-[60px] flex justify-center items-center gap-x-2 bg-primary-500 rounded-2xl text-blackPrime font-bold"
    >
      <motion.svg
        width="180px"
        height="60px"
        viewBox="0 0 180 60"
        className="absolute top-0 left-0 z-0"
      >
        <motion.polyline
          initial="hidden"
          animate={controls}
          variants={discordBtnAni}
          points="179,1 179,59 1,59 1,1 179,1"
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
