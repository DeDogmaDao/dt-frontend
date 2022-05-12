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
      className={`w-[24.0625rem] h-[14.0625rem] flex flex-col justify-center items-start lg:items-center
       relative duration-75 lg:duration-300 ml-6 ssm:ml-0 font-normal backdrop-blur-3xl  ${
        activeIndex === index ? " text-white !font-bold -translate-y-3 scale-[1.12]" : "text-neutral-50/30 "
      }`}
      onClick={benefitBtnClickHandler}
    >
      <motion.span className="w-full h-full will-change-transform"
      >
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
      <h3 className="lg:absolute lg:bottom-5 lg:text-white lg:font-bold lg:text-xl">{data.title}</h3>
      {activeIndex === index && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={eachBenefitAni}
          className="w-[1.625rem] h-[.375rem] bg-primary-500 absolute bottom-1 left-0 lg:hidden"
        ></motion.div>
      )}
    </motion.button>
  );
};

export default EachBenefit;
