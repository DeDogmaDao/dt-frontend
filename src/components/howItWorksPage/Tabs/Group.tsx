import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { tabsType } from "../../../types/allTypes";
import { tabGroupAni } from "../../../utils/animation";
interface props {
  tabs: tabsType[];
}
const Group: React.FC<props> = ({ children, tabs }) => {
  const controls = useAnimation();
  useEffect(() => {
    if (tabs[0].activeGroup === true) {
      controls.start("left").then(() => {
        controls.start("hidden");
      });
    } else {
      controls.start("right").then(() => {
        controls.start("hidden");
      });
    }
  }, [tabs[0].activeGroup]);

  return (
    <div
      className="h-11 mt-4"
      style={{ perspective: "100px", perspectiveOrigin: "50% 50%" }}
    >
      <motion.div
        variants={tabGroupAni}
        initial="hidden"
        animate={controls}
        className="h-full flex justify-center items-center gap-x-3 text-2xl  bg-secondary-800 rounded-full px-3"
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Group;
