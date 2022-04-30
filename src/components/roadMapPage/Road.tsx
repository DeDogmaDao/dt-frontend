import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { roadMapType } from "../../types/allTypes";
import { roadAni, roadMapDescAni } from "../../utils/animation";
import RoadItem from "./RoadItem";
import roadImages from './roadImg';

interface props {
  road: roadMapType;
  index: number;
  activeSection: number;
}

const Road: React.FC<props> = ({ index, activeSection, road }) => {
  const [clientHeight, setClientHeight] = useState(0);
  const [descIndex, setDescIndex] = useState(0);
  useEffect(() => {
    setClientHeight(window.innerHeight);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={roadAni}
      className="w-screen h-screen absolute left-0 duration-700 overflow-hidden"
      style={{
        top: clientHeight * (index - activeSection),
        zIndex: 10 - index * 3,
      }}
    >
      <div
        className={`flex flex-col justify-between items-center w-full h-full relative ${
          index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
      <span className="absolute w-full aspect-[1426/821]">
        <span className="w-full h-full inner-image-no-max-width">
          <Image alt="dedogmadao NFT" title="dedogmadao NFT"  src={roadImages[index]} layout="fill" quality={100} placeholder="blur"  />
        </span>
      </span>
        <h3 className="w-full h-1/3 lg:w-1/2 lg:h-full pt-20 lg:pt-0 z-10 flex justify-center items-center 
        text-[1.5rem] ssm:text-[2.25rem] lg:text-[2.5rem] font-bold">
          {road.sectionName}
        </h3>
        <div className=" w-full lg:w-1/2 h-2/3 lg:h-full flex justify-center items-center z-10">
          <ul className="w-[90%] ssm:w-[80%] sm:w-[65%] md:w-[50%] lg:w-[26rem]
          h-[50%] py-8 px-4 sm:px-8 flex flex-col gap-y-2
           bg-[#191C3A4D]/30 backdrop-blur-sm rounded-xl justify-between">
            {road.roadData.map((data, index) => {
              return (
                <RoadItem
                key={data.title.substring(0,20)}
                  data={data}
                  setDescIndex={setDescIndex}
                  descIndex={descIndex}
                  index={index}
                />
              );
            })}

          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Road;
