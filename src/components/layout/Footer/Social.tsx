import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialType } from "../../../types/allTypes";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { socialAni } from "../../../utils/animation";
interface props {
  data: socialType;
}
const Social: React.FC<props> = ({ data }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <motion.li
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      className="group text-xl w-14 h-14 bg-neutral-900 rounded-full hover:scale-110 duration-500 flex justify-center items-center
      fill-white hover:fill-neutral-900 delay-200"
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

              className="w-14 h-14 rounded-full absolute left-0 top-0 z-0 bg-primary-500"
            ></motion.div>
          )}
        </AnimatePresence>
        <span className="z-10 will-change-transform">
        {data.icon}
        </span>
      </a>
    </motion.li>
  );
};

export default Social;
