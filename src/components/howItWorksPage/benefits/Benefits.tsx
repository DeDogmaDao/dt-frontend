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
      className="flex justify-start items-start h-full relative z-0"
      id="benefits"
    >
      <div className="absolute top-0 left-0 w-full h-[7.5rem] bg-gradient-to-b from-bodymain to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-[7.5rem] bg-gradient-to-t from-bodymain to-transparent z-[1]" />
      <span className="absolute h-full min-w-[100vw] aspect-[1438/586]">
        <span className="w-full h-full inner-image-no-max-width">
          <Image
            src={benefitBg}
            layout="fill"
            quality={100}
            placeholder="blur"
          />
        </span>
      </span>
      <div className="flex flex-col lg:flex-wrap ssm:w-11/12 lg:w-10/12 2xl:w-9/12 mx-auto
      min-h-[50rem] ssm:min-h-[45rem] sm:min-h-[45rem] h-[30rem]
      md:pt-20">
        <motion.div
          onHoverStart={() => setIsPlaying(false)}
          onHoverEnd={() => setIsPlaying(true)}
          className="lg:w-1/3 flex lg:flex-col gap-x-12 lg:gap-y-12 mx-auto flex-wrap justify-center lg:justify-start
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
        <div className="px-5 ssm:px-0 sm:w-10/12 lg:w-2/3 mt-8 ssm:mt-16 flex z-10 mx-auto">
          <ul className="flex flex-col gap-y-3 mt-1.5">
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
    </div>
  );
};

export default Benefits;
