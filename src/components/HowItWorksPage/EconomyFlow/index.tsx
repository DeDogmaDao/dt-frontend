import Image from "next/image";
import { allBgImg, demmortalBlastFrame } from "../../../store/img";
import { motion } from "framer-motion";
import { useState } from "react";

const EconomyFlow: React.FC = () => {
  const [isActive,setIsActive] = useState(false);
  const clickHandler = () => {
    setIsActive(prevState=>!prevState)
    console.log("hellllllllo");
  }
  return (
    <div
      className="flex flex-col justify-between items-center h-full w-full relative z-100"
      id="cards"
    >
      <div className="absolute top-0 left-0 w-full h-[7.5rem] bg-gradient-to-b from-[#04050E] via-transparent to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-[7.5rem] bg-gradient-to-t from-[#04050E] via-transparent to-transparent z-[1]" />
      <span className="absolute h-full xl:w-full !aspect-[1382/814] overflow-hidden">
        <span className="w-full h-full inner-image-no-max-width">
          <Image
            alt="dedogmadao background"
            src={allBgImg.roadMap[1]}
            layout="fill"
            quality={100}
            placeholder="blur"
          />
        </span>
      </span>
      <h2 className="z-10 mt-16 text-[1.25rem] ssm:text-[1.75rem] sm:text-[2.375rem] font-bold sm:font-bold">
        <span className="text-primary-500">Economy</span> Flow
      </h2>
      <div className="w-full h-[250px] ssm:h-[350px] sm:h-[500px] flex justify-center items-center z-20">
        <motion.div className={`h-10 absolute -mt-40 ssm:-mt-60 duration-500 cursor-pointer
        ${isActive ? "grayscale-0":"grayscale-0 md:grayscale-70"} ${!isActive? "scale-100 sm:scale-[0.7] md:scale-[0.3] lg:scale-[0.25]":"scale-100"}
        `}  onClick={clickHandler}>
          <Image
            alt="dedogmadao background"
            src={demmortalBlastFrame}
            width={1862}
            height={1169}
            quality={100}
            placeholder="blur"
            className="z-100 rounded-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default EconomyFlow;
