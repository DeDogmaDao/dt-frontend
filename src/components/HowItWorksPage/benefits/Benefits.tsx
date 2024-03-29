import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { benefitsData } from "../../../store/allData";
import { allBgImg } from "../../../store/img";
import EachBenefit from "./EachBenefit";
import EachDesc from "./EachDesc";

const Benefits: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const playingBenefits = setInterval(() => {
      if (isPlaying) {
        setActiveIndex((prevState) => {
          if (prevState === 2) {
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
      <div className="absolute bottom-0 left-0 w-full h-[7.5rem] bg-gradient-to-t from-[#04050E] to-transparent z-[1]" />
      <span className="absolute h-full min-w-[100vw] aspect-[1438/586]">
        <span className="w-full h-full inner-image-no-max-width">
          <Image
            alt="dedogmadao NFT"
            title="dedogmadao NFT"
            src={allBgImg.sec1}
            layout="fill"
            quality={100}
            placeholder="blur"
          />
        </span>
      </span>
      <div
        className="flex flex-col w-full ssm:w-11/12 sm:w-11/12 2xl:w-11/12 mx-auto
      min-h-[50rem] ssm:min-h-[45rem] sm:min-h-[45rem] 
      sm:pt-20"
      >
        <motion.div
          onHoverStart={() => setIsPlaying(false)}
          onHoverEnd={() => setIsPlaying(true)}
          className=" flex flex-wrap flex-col sm:flex-row gap-x-12 sm:gap-x-5 lg:gap-x-8 xl:gap-x-10 gap-y-5 sm:gap-12 mx-auto ssm:justify-center
           w-full
      text-large-medium lg:text-extera-large-medium z-10 mt-14"
        >
          {benefitsData.map((data, index) => {
            return (
              <EachBenefit
                key={data.title}
                data={data}
                index={index}
                setActiveIndex={setActiveIndex}
                activeIndex={activeIndex}
                setIsPlaying={setIsPlaying}
              />
            );
          })}
        </motion.div>
        <div className="px-5 ssm:px-0 sm:w-10/12  mt-8 ssm:mt-14 flex z-10 mx-auto">
          <ul className="flex flex-col gap-y-4 mt-1.5 w-full">
            {activeIndex !== -1 &&
              benefitsData[activeIndex].desc.map((item, index) => {
                return (
                  <EachDesc
                    key={index + "benefit-desc"}
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
