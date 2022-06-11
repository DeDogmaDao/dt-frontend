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
  innerWidth: number;
}
const TabInfo: React.FC<props> = ({
  name,
  titleOfHonor,
  desc,
  index,
  activeIndexCard,
  tabGroup,
  innerWidth,
}) => {
  const activeIndexBasedOnWidth = innerWidth < 1280 ? 1 : 2;
  return (
    <AnimatePresence>
      {activeIndexCard[tabGroup][activeIndexBasedOnWidth] === index && (
        <motion.div
          initial={"hidden"}
          animate="visible"
          exit="out"
          variants={tabInfoContainerAni}
          custom={{ innerWidth }}
          className="absolute flex flex-col justify-start items-center w-[90%] md:w-[80%] lg:w-[65%] xl:w-full z-[150] pointer-events-none"
        >
          <h3
            className="flex flex-col w-full sm:flex-row xl:flex-wrap justify-center items-center xl:justify-start
           gap-x-2 text-2xl md:text-3xl font-bold"
          >
            <span className="xl:whitespace-nowrap xl:text-left">{name}</span>
            {titleOfHonor && (
              <p className="text-primary-500 text-center xl:text-left">
                “{titleOfHonor}”
              </p>
            )}
          </h3>
          <ul className="flex flex-col justify-start items-start mt-3 text-lg font-extralight">
            {desc.map((item) => {
              return (
                <li
                  key={item.substring(0, 20)}
                  className="flex gap-x-2 select-text"
                >
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
