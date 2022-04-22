import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialType } from "../../../types/allTypes";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { socialAni } from "../../../utils/animation";
interface props {
  data: socialType;
  svgWidth:string;
  width:string;
  hasTransition:boolean;
}
const Social: React.FC<props> = ({ data,svgWidth,width, hasTransition }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <motion.li
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      className={`group text-xl  bg-neutral-700 rounded-full hover:scale-110  flex justify-center items-center
      fill-white hover:fill-neutral-900  aspect-square ${hasTransition && "duration-500 delay-200"}`}
      style={{width}}
    >
      <a
        className=" w-full h-full group-hover:text-blackPrime flex justify-center items-center relative"
        href={data.href}
        target="_blank"
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={socialAni}
              style={{width}}
              className=" rounded-full absolute left-0 top-0 z-0 bg-primary-500 aspect-square"
            ></motion.div>
          )}
        </AnimatePresence>
        <span className="z-10 will-change-transform"
        style={{width:svgWidth}}>
        {data.icon}
        </span>
      </a>
    </motion.li>
  );
};

export default Social;
