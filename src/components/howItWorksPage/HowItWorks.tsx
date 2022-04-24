import { motion } from "framer-motion";
import { useRef } from "react";
import { pageAnimation } from "../../utils/animation";
import BackToTop from "../global/BackToTop";
import Benefits from "./benefits/Benefits";
import ToRoadmapAction from "./callToAction/ToRoadmapAction";
import Hero from "./hero/Hero";
import InteroVideo from "./IntroVideo";
import Tabs from "./Tabs";

const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div
    ref={containerRef}
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
      <BackToTop containerRef={containerRef} />
    </motion.div>
  );
};

export default HowItWorks;
