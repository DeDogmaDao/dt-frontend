import { ReactElement } from "react";
import { activeIndexCardType } from "../../../types/allTypes";
import { AnimatePresence, motion } from "framer-motion";
import { tabInfoContainerAni } from "../../../utils/animation";

interface props {
  name: string;
  titleOfHonor?: string;
  desc: string[];
  index: number;
  activeIndexCard: activeIndexCardType;
  tabGroup: string;
}
const TabInfo: React.FC<props> = ({
  name,
  titleOfHonor,
  desc,
  index,
  activeIndexCard,
  tabGroup,
}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {activeIndexCard[tabGroup][1] === index && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="out"
          variants={tabInfoContainerAni}
          className="absolute flex flex-col justify-start items-center w-[90%] md:w-[80%] lg:w-[65%] z-[150]"
        >
          <h6 className="flex flex-col sm:flex-row justify-center items-center gap-x-2 text-2xl md:text-3xl font-bold">
            <span>{name}</span>
            {titleOfHonor && (
              <p className="text-primary-500 text-center">“{titleOfHonor}”</p>
            )}
          </h6>
          <ul className="flex flex-col justify-start items-start mt-3 text-lg font-extralight">
            {desc.map((item) => {
              return (
                <li key={item.substring(0,20)} className="flex gap-x-2 select-text">
                  <span className="h-[.5625rem] aspect-square rounded-full bg-white mt-[.5625rem]" />
                  {item}
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TabInfo;
