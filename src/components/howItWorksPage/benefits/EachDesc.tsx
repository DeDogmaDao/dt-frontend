import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { eachBenefitDescAni } from "../../../utils/animation";

interface props {
  descData: ReactElement<any,any>;
  index: number;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}
const EachDesc: React.FC<props> = ({ descData, index,setIsPlaying }) => {
  return (
    <motion.li
    onHoverStart={()=>setIsPlaying(false)}
    onHoverEnd={()=>setIsPlaying(true)}
      initial="hidden"
      animate="visible"
      variants={eachBenefitDescAni}
      custom={index}
      className="flex gap-x-2 text-base px-3 ssm:px-8 py-3 lg:py-7 rounded-full sm:bg-neutral-500/30"
    >
      <span className="mt-1">
        <FontAwesomeIcon icon={faCircleDot} />
      </span>
      <div className="text-large-medium lg:text-extera-large-medium">{descData}</div>
    </motion.li>
  );
};

export default EachDesc;
