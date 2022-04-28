import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { benefitType } from "../../../types/allTypes";
import { eachBenefitAni } from "../../../utils/animation";
interface props {
  data: benefitType;
  index: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  activeIndex: number;
}
const EachBenefit: React.FC<props> = ({
  data,
  index,
  activeIndex,
  setActiveIndex,
  setIsPlaying,
}) => {
  const benefitBtnClickHandler = () => {
    setActiveIndex((prevState) => {
      if (prevState === index) {
        return prevState;
      }
      return -1;
    });
    setTimeout(() => {
      setActiveIndex((prevState) => {
        if (prevState === -1) {
          return index;
        }
        return prevState;
      });
    }, 100);
  };

  return (
    <motion.button
      onTap={() => setIsPlaying(false)}
      className={`h-12 flex flex-col justify-center items-start relative duration-75 ml-6 ssm:ml-0 font-normal  ${
        activeIndex === index ? " text-white !font-bold" : "text-neutral-50/30 "
      }`}
      onClick={benefitBtnClickHandler}
    >
      <div>{data.title}</div>
      {activeIndex === index && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={eachBenefitAni}
          className="w-[1.625rem] h-[.375rem] bg-primary-500 absolute bottom-1 left-0"
        ></motion.div>
      )}
    </motion.button>
  );
};

export default EachBenefit;
