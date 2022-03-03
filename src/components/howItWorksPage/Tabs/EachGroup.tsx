import { motion } from "framer-motion";
import { tabsType } from "../../../types/allTypes";
import underLine from "../../images/Union.png";
import deepClone from 'lodash/cloneDeep';

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
      className="relative flex justify-center items-center"
      onClick={clickHandler}
    >
      {name}
      {activeGroup && (
        <motion.img
          src={underLine.src}
          layoutId={"tabGroup"}
          className={
            "absolute left-0 -bottom-3 w-20 h-3 flex justify-center items-start"
          }
        />
      )}
    </button>
  );
};

export default EachGroup;
