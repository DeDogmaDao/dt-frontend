import { motion } from "framer-motion";
import { pageAnimation } from "../../utils/animation";
import Benefits from "./benefits/Benefits";
import ToRoadmapAction from "./callToAction/ToRoadmapAction";
import Hero from "./hero/Hero";
import InteroVideo from "./IntroVideo";
import Tabs from "./Tabs";

const HowItWorks: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="out"
      variants={pageAnimation}
      className="w-full h-full flex flex-col"
    >
      <Hero />
      <Benefits />
      <InteroVideo />
      <Tabs />
      <ToRoadmapAction />
    </motion.div>
  );
};

export default HowItWorks;
