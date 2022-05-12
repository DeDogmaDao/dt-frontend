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
      className={`h-16 ml-8 lg:w-[280px] lg:h-[162px] xl:w-[21.5625rem] xl:h-[12.5rem] flex flex-col justify-center items-start lg:items-center
       relative duration-75 lg:duration-500 ssm:ml-0 font-normal lg:backdrop-blur-[5.625rem] 
        will-change-transform lg:rounded-[.9375rem] xl:rounded-[1.25rem]
        overflow-hidden  ${
         activeIndex === index
           ? " text-white !font-bold lg:-translate-y-3 lg:scale-[1.12]"
           : "text-neutral-50/30 "
       }`}
      onClick={benefitBtnClickHandler}
    >
      <motion.span className=" lg:w-[280px] lg:h-[162px] xl:w-[21.5625rem] xl:h-[12.5rem]  hidden lg:block will-change-transform">
        <span className=" w-full h-full will-change-transform">
          <Image
            alt="dedogmadao logo"
            src={benefitImg[index]}
            layout={"responsive"}
            quality={90}
            placeholder="blur"
            width="345"
            height="200"
          />
        </span>
      </motion.span>
      <h3 className="lg:absolute lg:bottom-5 lg:text-white lg:font-bold lg:text-lg will-change-transform">
        {data.title}
      </h3>
      {activeIndex === index && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={eachBenefitAni}
          className="w-[1.625rem] h-[.375rem] bg-primary-500 absolute bottom-1 left-0 lg:hidden will-change-transform"
        ></motion.div>
      )}
    </motion.button>
  );
};

export default EachBenefit;
