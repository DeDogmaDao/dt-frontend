import { motion } from "framer-motion";
import { tabsType } from "../../../types/allTypes";
import deepClone from "lodash/cloneDeep";
import { tabEachGroupAni } from "../../../utils/animation";

interface props {
  name: string;
  activeGroup: boolean;
  setTabs: any;
  tabs: tabsType[];
}
const EachGroup: React.FC<props> = ({ name, activeGroup, setTabs, tabs }) => {
  const clickHandler = () => {
    const clonedState = deepClone(tabs);
    const newGroup = clonedState.map((tab) => {
      if (tab.tabGroup === name) {
        tab.activeGroup = true;
      } else {
        tab.activeGroup = false;
      }
      return tab;
    });
    setTabs(newGroup);
  };
  return (
    <button
      className={`relative flex justify-center items-center p-3`}
      onClick={clickHandler}
    >
      <p className={`text-3xl z-10 ${activeGroup && "text-blackPrime"}`}>
        {name}
      </p>
      {activeGroup && (
        <motion.div
          layoutId="eachGroup"
          className={`absolute left-0 bottom-0 w-full h-full bg-primText z-0 rounded-full shadow-cycle shadow-slate-200
          `}
        ></motion.div>
      )}
    </button>
  );
};

export default EachGroup;
