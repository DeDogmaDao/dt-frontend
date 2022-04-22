
import { motion } from "framer-motion";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { eachBenefitDescAni } from "../../../utils/animation";
import AngleRightSVG from "../../svgs/rightangle.svg";

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
      className="flex gap-x-2 text-base px-3 ssm:px-8 py-3 lg:py-7 rounded-full sm:bg-neutral-500/30"
    >
      <span className="flex justify-center items-start">
        <AngleRightSVG
          stroke="#2CEDFF"
          width={10}
          height={17}
          fill="none"
          style={{ marginTop: 7 }}
        />
      </span>
      <div className="text-large-medium lg:text-extera-large-medium">
        {descData}
      </div>
    </motion.li>
  );
};

export default EachDesc;
