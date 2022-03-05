import { motion } from "framer-motion";
import { RefObject } from "react";
import { tabsType } from "../../../types/allTypes";
import deepClone from 'lodash/cloneDeep';
import { eachTabAni } from "../../../utils/animation";
interface props {
  group: string;
  name: string;
  activeCard: boolean;
  setTabs: any;
  tabs: tabsType[];
  cardRef: RefObject<HTMLDivElement>;
}
const EachTab: React.FC<props> = ({
  group,
  name,
  activeCard,
  setTabs,
  tabs,
  cardRef,
}) => {
  const clickHandler = () => {
    const clonedState = deepClone(tabs);
    const newCard = clonedState.map((tab) => {
      if (tab.tabGroup === group) {
        tab.tabInfo.forEach((item) => {
          if (item.name === name) {
            item.activeCard = true;
          } else {
            item.activeCard = false;
          }
        });
      }
      return tab;
    });
    setTabs(newCard);
  };

  return (
    <button
      className={`relative flex justify-center items-center min-w-[80px] h-14 duration-500 ${
        activeCard ? "text-blackPrime" : ""
      }`}
      onClick={clickHandler}
    >
      {activeCard && (
        <motion.div
          layoutId="eachTab"
          initial="hidden"
          animate="visible"
          exit="out"
          variants={eachTabAni}
          className="absolute left-0 bottom-0 w-full h-full bg-white z-0 rounded-full shadow-cycle shadow-slate-200 "
        ></motion.div>
      )}
      <h4 className="z-10">{name}</h4>
    </button>
  );
};

export default EachTab;
