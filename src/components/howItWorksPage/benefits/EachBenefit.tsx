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
      className={`h-16 ml-8 sm:w-[11.25rem] sm:h-[6.5rem] md:w-[13.125rem] md:h-[7.5625rem]  lg:w-[17.5rem] lg:h-[10.125rem] xl:w-[21.5625rem] xl:h-[12.5rem] flex flex-col justify-center items-start sm:items-center
       relative duration-75 sm:duration-500 ssm:ml-0 font-normal sm:backdrop-blur-[5.625rem] 
        will-change-transform sm:rounded-[.9375rem] xl:rounded-[1.25rem]
        overflow-hidden  ${
         activeIndex === index
           ? " text-white !font-bold sm:-translate-y-3 sm:scale-[1.12]"
           : "text-neutral-50/30 "
       }`}
      onClick={benefitBtnClickHandler}
    >
      <motion.span className="sm:w-[11.25rem] sm:h-[6.5rem] md:w-[13.125rem] md:h-[7.5625rem] lg:w-[17.5rem] lg:h-[10.125rem] xl:w-[21.5625rem] xl:h-[12.5rem]  hidden sm:block will-change-transform">
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
      <h3 className="sm:absolute sm:bottom-2 lg:bottom-5 sm:text-white
      sm:font-bold text-lg sm:text-xs md:text-sm lg:text-lg will-change-transform"
      style={{backfaceVisibility:"hidden", transform:"translateZ(0)"}}
      >
        {data.title}
      </h3>
      {activeIndex === index && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={eachBenefitAni}
          className="w-[1.625rem] h-[.375rem] bg-primary-500 absolute bottom-1 left-0 sm:hidden will-change-transform"
        ></motion.div>
      )}
    </motion.button>
  );
};

export default EachBenefit;
