import { tabType } from "../../../types/allTypes";
import { AnimatePresence, motion } from "framer-motion";
import {
  tabDescContainerAni,
  tabImageAni,
  tabImageContainerAni,
} from "../../../utils/animation";

interface props {
  data: tabType;
  activeGroup: boolean;
}
const TabData: React.FC<props> = ({ data, activeGroup }) => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {data.activeCard && activeGroup && (
          <motion.div className="w-full h-full flex justify-center items-start gap-36 absolute top-0 left-0">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="out"
              variants={tabImageContainerAni}
              className="h-full w-[300px] relative"
            >
              <motion.div className="w-[300px] opacity-30 absolute -bottom-7 -left-10 h-[50%] bg-primary-700 rounded-tl-full rounded-tr-full z-20"></motion.div>
              <motion.img
                variants={tabImageAni}
                custom={0}
                src={data.image}
                className="absolute bottom-0 left-0 h-full w-[225px] z-10 -translate-y-10 drop-shadow-[0px_10px_20px_rgba(255,255,255,0.5)]"
              />
              {data.image2 && (
                <motion.img
                  variants={tabImageAni}
                  custom={1}
                  src={data.image2}
                  className="absolute bottom-0 left-0 h-full w-[225px] translate-x-32 rotate-[30deg] scale-75 drop-shadow-[0px_10px_20px_rgba(255,255,255,0.5)]"
                />
              )}
              {data.image3 && (
                <motion.img
                  variants={tabImageAni}
                  custom={2}
                  src={data.image3}
                  className="absolute bottom-0 left-0 h-full w-[225px] -translate-x-32 rotate-[-30deg] scale-75 drop-shadow-[0px_10px_20px_rgba(255,255,255,0.5)]"
                />
              )}
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="out"
              variants={tabDescContainerAni}
              className="flex flex-col gap-y-8 w-[385px]"
            >
              <h4 className="text-2xl">{data.name}</h4>
              <div className="w-full">{data.desc}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TabData;
