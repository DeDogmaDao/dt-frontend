import { motion } from "framer-motion";
import {
  callToActionSvgAni,
  callToactionSvgArrowRightAni,
} from "../../../utils/animation";

const CallToActionSvg: React.FC = () => {
  return (
    <motion.div
      className="relative"
      style={{ width: "17.125rem", height: "7.125rem" }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="current"
        height="current"
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
          d="M2 3C16.5 41 51.3402 72.9477 84 88.5C105 98.5 126.5 101.726 153 99.5C175.532 97.6077 186.873 91 191.5 78.7256C200.736 54.2256 152.127 47.4512 149.127 67.7256C146.127 88 167.138 96.1487 178 101.5C186 105.441 195.5 106.5 200 107C204.5 107.5 211 107.5 218 106"
        />
      </motion.svg>
    </motion.div>
  );
};

export default CallToActionSvg;
