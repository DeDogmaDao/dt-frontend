import { motion } from "framer-motion";
import { tabsType } from "../../../types/allTypes";
import deepClone from "lodash/cloneDeep";
import { tabBlastAni, tabEachGroupAni } from "../../../utils/animation";

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
      className={`relative flex justify-center items-center p-4`}
      onClick={clickHandler}
    >
      <p
        className={`text-sm font-normal z-10 ${
          activeGroup && "text-blackPrime"
        }`}
      >
        {name}
      </p>
      {activeGroup && (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={tabBlastAni}
            className="w-10 h-10 absolute rounded-full"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%,rgba(255, 255, 255, 0) 0%,#ffffff 100%)",
            }}
          ></motion.div>

          <motion.div
            layoutId="eachGroup"
            transition={{type:"spring", stiffness:150}}
            className={`absolute flex justify-center items-center w-full h-7 bg-primText z-0 rounded-full shadow-cycle shadow-slate-200
          `}
          ></motion.div>
        </>
      )}
    </button>
  );
};

export default EachGroup;
