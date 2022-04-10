import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { activeIndexCardType } from "../../../types/allTypes";
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
    if (index > activeIndexCard[group]) {
      for (let i = activeIndexCard[group], j = 0; i < index; i++, j++) {
        setTimeout(() => {
          setActiveIndexCard((prevState) => ({
            ...prevState,
            [group]: prevState[group] + 1,
          }));
        }, 30 * j);
      }
    }
    if (index < activeIndexCard[group]) {
      for (let i = activeIndexCard[group], j = 0; i > index; i--, j++) {
        console.log(j);
        setTimeout(() => {
          setActiveIndexCard((prevState) => ({
            ...prevState,
            [group]: prevState[group] - 1,
          }));
        }, 30 * j);
      }
    }
  };

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
          className="absolute left-0 bottom-0 w-full h-full bg-cyan-400 rounded-full shadow-cycle shadow-cyan-400 z-20"
        ></motion.div>
      )}
    </button>
  );
};

export default EachTab;
