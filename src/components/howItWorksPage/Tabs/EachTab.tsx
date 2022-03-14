import { motion } from "framer-motion";
import { RefObject } from "react";
import { tabsType } from "../../../types/allTypes";
import deepClone from "lodash/cloneDeep";
import underLine from "../../images/Union.png";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
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
  // const isSmallDevice = useMediaQuery(746);

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
      className={`relative flex justify-center items-center min-w-[80px] h-14 duration-500 
      }`}
      onClick={clickHandler}
    >
      {activeCard && (
        <motion.img
          src={underLine.src}
          layoutId={"eachGroup"}
          className={
            "absolute left-0 -bottom-4 w-20 h-10 flex justify-center items-start"
          }
        />
      )}
      <h4 className="z-10">{name}</h4>
    </button>
  );
};

export default EachTab;
