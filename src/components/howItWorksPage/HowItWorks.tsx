import { motion } from "framer-motion";
import { pageAnimation } from "../../utils/animation";
import Benefits from "./benefits/Benefits";
import ToRoadmapAction from "./callToAction/ToRoadmapAction";
import Tabs from "./Tabs";

const HowItWorks: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="out"
      variants={pageAnimation}
    >
      {/* <HeaderImg />

        <SecOne />
        <Carosel allData={teamClone} Item={Card} initialQuantity={100} />
        <FAQ />
        <Tabs /> */}
      <Benefits />
      <Tabs />
      <ToRoadmapAction />
    </motion.div>
  );
};

export default HowItWorks;
