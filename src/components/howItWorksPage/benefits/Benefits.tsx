import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { benefitsData } from "../../../store/allData";
import EachBenefit from "./EachBenefit";
import EachDesc from "./EachDesc";
import benefitBg from "../../images/bg/sec1.png";

const Benefits: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const playingBenefits = setInterval(() => {
      if (isPlaying) {
        setActiveIndex((prevState) => {
          if (prevState === 3) {
            return 0;
          }
          return prevState + 1;
        });
      }
    }, 3000);

    return () => {
      clearInterval(playingBenefits);
    };
  }, [isPlaying]);

  return (
    <div
      className="flex flex-col justify-start items-center h-full relative z-0"
      id="benefits"
    >
      <div className="absolute top-0 left-0 w-full h-[7.5rem] bg-gradient-to-b from-bodymain to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-[7.5rem] bg-gradient-to-t from-bodymain to-transparent z-[1]" />
      <span className="absolute h-full aspect-[1438/586]">
        <span className="w-full h-full inner-image-no-max-width">
          <Image
            src={benefitBg}
            layout="fill"
            quality={100}
            placeholder="blur"
          />
        </span>
      </span>
      <motion.div
        onHoverStart={() => setIsPlaying(false)}
        onHoverEnd={() => setIsPlaying(true)}
        className="w-11/12 lg:w-9/12 flex flex-wrap justify-start ssm:justify-center items-center gap-x-12
      text-large-medium  lg:text-extera-large-medium z-10 mt-14 ssm:mt-24 lg:mt-32"
      >
        {benefitsData.map((data, index) => {
          return (
            <EachBenefit
              data={data}
              index={index}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
              setIsPlaying={setIsPlaying}
            />
          );
        })}
      </motion.div>
      <div className="sm:w-11/12 lg:w-9/12 h-[32rem] ssm:h-[28rem] sm:h-[22rem] lg:h-[32rem] mt-8 ssm:mt-16 flex z-10">
        <ul className="flex flex-col gap-y-3">
          {activeIndex !== -1 &&
            benefitsData[activeIndex].desc.map((item, index) => {
              return (
                <EachDesc
                  setIsPlaying={setIsPlaying}
                  descData={item}
                  index={index}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
