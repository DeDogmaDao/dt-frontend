import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  callToActionSvgAni,
  callToactionSvgArrowRightAni,
} from "../../../utils/animation";

const CallToActionSvg: React.FC = () => {
  return (
    <motion.div className="relative" style={{ width: 274, height: 114 }}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="274"
        height="114"
        viewBox="0 0 274 114"
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <motion.path
              stroke={"#fff"}
              fill={"#fff"}
              initial="hidden"
              animate="visible"
              variants={callToactionSvgArrowRightAni}
              d="M 0 0 L 10 5 L 0 10 z"
            />
          </marker>
        </defs>
        <motion.path
          initial="hidden"
          animate="visible"
          variants={callToActionSvgAni}
          fill="none"
          stroke={"#fff"}
          strokeWidth={2}
          strokeDasharray={10}
          marker-end="url(#arrow)"
          d="M1 1C15.5 39 38.5 77.5183 108.5 95.5C115 97.1697 123.137 99.0183 148.5 93C178 86 194.885 80.6724 198 66.5C202.5 46.025 162.553 50.8934 156.5 63C151 74 169.138 96.6487 180 102C188 105.941 195.643 114 223.5 108C251.357 102 259 98 273 86.5"
        />
      </motion.svg>
    </motion.div>
  );
};

export default CallToActionSvg;
