import { motion } from "framer-motion";
import { Dispatch, RefObject, SetStateAction } from "react";
import { activeIndexCardType, tabsType } from "../../../types/allTypes";
import deepClone from "lodash/cloneDeep";
import { eachTabAni } from "../../../utils/animation";
interface props {
  group: string;
  name: string;
  setActiveIndexCard: Dispatch<SetStateAction<activeIndexCardType>>;
  activeIndexCard: activeIndexCardType;
  index: number;
}
const EachTab: React.FC<props> = ({
  group,
  name,
  activeIndexCard,
  setActiveIndexCard,
  index,
}) => {
  const clickHandler = () => {
    setActiveIndexCard((prevState) => ({ ...prevState, [group]: index }));
  };
  console.log(activeIndexCard);

  return (
    <button
      className={`relative flex justify-center items-center w-[26px] h-[6px] bg-neutral-700 rounded-full duration-500`}
      onClick={clickHandler}
    >
      {activeIndexCard[group] === index && (
        <motion.div
          layoutId="eachTab"
          initial="hidden"
          animate="visible"
          exit="out"
          variants={eachTabAni}
          className="absolute left-0 bottom-0 w-full h-full bg-cyan-400 rounded-full shadow-cycle shadow-cyan-500 z-20"
        ></motion.div>
      )}
    </button>
  );
};

export default EachTab;
