import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { eachBenefitDescAni } from "../../../utils/animation";

interface props {
  descData: string;
  index: number;
}
const EachDesc: React.FC<props> = ({ descData, index }) => {
  return (
    <motion.li
      initial="hidden"
      animate="visible"
      variants={eachBenefitDescAni}
      custom={index}
      className="flex gap-x-2 text-base px-8 py-7 rounded-full bg-neutral-600/30"
    >
      <span className="mt-1">
        <FontAwesomeIcon icon={faCircleDot} />
      </span>
      <p className="text-extera-large-medium">{descData}</p>
    </motion.li>
  );
};

export default EachDesc;
