import { motion } from "framer-motion";
import { RefObject, useEffect } from "react";
import { tabsType } from "../../../types/allTypes";

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
  useEffect(() => {
    setTimeout(() => {
      
      if(activeCard === true){
        cardRef.current!.scrollIntoView({
          behavior: "smooth", block: "end", inline: "nearest"
        });
        console.log(cardRef.current)
      }
    }, 100);
  }, [tabs])
  
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
