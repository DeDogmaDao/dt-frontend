import { motion } from "framer-motion";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { eachBenefitDescAni } from "../../../utils/animation";

interface props {
  descData: ReactElement<any, any>;
  index: number;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}
const EachDesc: React.FC<props> = ({ descData, index, setIsPlaying }) => {
  return (
    <motion.li
      onHoverStart={() => setIsPlaying(false)}
      onHoverEnd={() => setIsPlaying(true)}
      initial="hidden"
      animate="visible"
      variants={eachBenefitDescAni}
      custom={index}
      className="flex"
    >

      <div className="text-2xl font-normal">
        {descData}
      </div>
    </motion.li>
  );
};

export default EachDesc;
