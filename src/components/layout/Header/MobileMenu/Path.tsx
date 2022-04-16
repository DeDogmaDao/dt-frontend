import { motion, Transition, Variants } from "framer-motion";

interface props {
  variants: Variants;
  d?: string;
  transition?: Transition;
}
const Path: React.FC<props> = (props) => (
  <motion.path
    fill={"transparent"}
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap={"round"}
    {...props}
  />
);

export default Path;
