import { motion } from "framer-motion";
import { tabsType } from "../../../types/allTypes";

interface props {
  name: string;
  activeGroup: boolean;
  setTabs: any;
  tabs: tabsType[];
}
const EachGroup: React.FC<props> = ({ name, activeGroup, setTabs, tabs }) => {
  const clickHandler = () => {
    const newGroup = [...tabs].map((tab) => {
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
        <motion.div
          layoutId="tabGroup"
          className="absolute left-0 bottom-0 w-full h-1 bg-primary-500"
        ></motion.div>
      )}
    </button>
  );
};

export default EachGroup;
