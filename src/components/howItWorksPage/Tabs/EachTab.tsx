import { motion } from "framer-motion";
import { tabsType } from "../../../types/allTypes";

interface props {
  group: string;
  name: string;
  activeCard: boolean;
  setTabs: any;
  tabs: tabsType[];
}
const EachTab: React.FC<props> = ({
  group,
  name,
  activeCard,
  setTabs,
  tabs,
}) => {

  const clickHandler = () => {
    const newCard = [...tabs].map((tab) => {
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
      className="relative flex justify-center items-center"
      onClick={clickHandler}
    >
      {name}
      {activeCard && (
        <motion.div
          layoutId="eachTab"
          className="absolute left-0 bottom-0 w-full h-1 bg-primary-500"
        ></motion.div>
      )}
    </button>
  );
};

export default EachTab;
