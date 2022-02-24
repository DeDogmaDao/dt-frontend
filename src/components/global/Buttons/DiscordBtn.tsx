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
      onTapStart={() => controls.start("visible")}
      onTapCancel={() => controls.start("hidden")}
      className=" relative w-[180px] h-[50px] flex justify-center items-center gap-x-5 bg-primary-500 hover:bg-opacity-90 hover:scale-110 duration-500 text-blackPrime font-bold text-xl rounded-2xl overflow-hidden"
    >
      <motion.svg
        width="180px"
        height="50px"
        viewBox="0 0 180 50"
        className="absolute top-0 left-0 z-0 overflow-visible"
      >
        <motion.rect
          x="0"
          y="0"
          width="180"
          height="50"
          rx="15"
          strokeWidth={6}
          stroke="white"
          fill="none"
          initial="hidden"
          animate={controls}
          variants={discordBtnAni}
        />
      </motion.svg>
      Join Discord
      <span className="animate-bounceX"><FontAwesomeIcon icon={faArrowRight} /></span>
    </motion.button>
  );
};

export default DiscordBtn;
