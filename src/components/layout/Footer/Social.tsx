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
      className="group text-xl w-10 h-10 hover:scale-125 duration-500 flex justify-center items-center"
    >
      <a
        className=" w-full h-full group-hover:text-blackPrime duration-500 flex justify-center items-center relative"
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
              style={{ backgroundColor: data.color }}
              className="w-10 h-10 rounded-full bg-red-400  absolute left-0 top-0 -mt-0.5 z-0"
            ></motion.div>
          )}
        </AnimatePresence>
        <span className="z-10">
          <FontAwesomeIcon icon={data.icon} />
        </span>
      </a>
    </motion.li>
  );
};

export default Social;
