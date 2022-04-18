import { ReactElement } from "react";
import { activeIndexCardType } from "../../../types/allTypes";
import { motion } from "framer-motion";
import { tabInfoContainerAni } from "../../../utils/animation";
interface props {
  name: string;
  titleOfHonor: string;
  desc: ReactElement<any, any>;
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
    <>
      {activeIndexCard[tabGroup] === index && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="out"
          variants={tabInfoContainerAni}
          className="absolute flex flex-col justify-start items-center w-9/12"
        >
          <h6 className="flex flex-col sm:flex-row justify-center items-center gap-x-2 text-2xl md:text-3xl font-bold">
            <span>{name}</span>
            <p className="text-cyan-400">“{titleOfHonor}”</p>
          </h6>
          <p
            className="flex justify-center items-center mt-3 text-center  text-lg font-extralight "
          >
            {desc}
          </p>
        </motion.div>
      )}
    </>
  );
};

export default TabInfo;
