import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { benefitImg } from "../../../store/img";
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
      className={`w-[24.0625rem] h-[14.0625rem] flex flex-col justify-center items-start relative duration-75 ml-6 ssm:ml-0 font-normal  ${
        activeIndex === index ? " text-white !font-bold" : "text-neutral-50/30 "
      }`}
      onClick={benefitBtnClickHandler}
    >
      <motion.span className="w-[7.875rem] h-[6.375rem] will-change-transform">
        <span className="w-full h-full">
          <Image
            alt="dedogmadao logo"
            src={benefitImg[index]}
            layout={"fill"}
            quality={90}
            placeholder="blur"
          />
        </span>
      </motion.span>
      <h3>{data.title}</h3>
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
