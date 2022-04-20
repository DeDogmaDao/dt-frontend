import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { roadMapType } from "../../types/allTypes";
import { roadAni, roadMapDescAni } from "../../utils/animation";
import RoadItem from "./RoadItem";

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
      className="w-screen h-screen absolute left-0 duration-700"
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
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <div className="w-full h-full relative">
          <Image src={road.backImg} layout="fill" />
          </div>
        </div>
        <h3 className="w-full h-1/3 lg:w-1/2 lg:h-full pt-20 lg:pt-0 z-10 flex justify-center items-center 
        text-[30px] ssm:text-[36px] lg:text-[40px] font-bold">
          {road.sectionName}
        </h3>
        <div className=" w-full lg:w-1/2 h-2/3 lg:h-full flex justify-center items-center z-10">
          <ul className="w-[90%] ssm:w-[80%] sm:w-[65%] md:w-[50%] lg:w-[416px] py-8 px-4 sm:px-8 flex flex-col gap-y-2 bg-neutral-600 rounded-xl">
            {road.roadData.map((data, index) => {
              return (
                <RoadItem
                  data={data}
                  setDescIndex={setDescIndex}
                  descIndex={descIndex}
                  index={index}
                />
              );
            })}
            <div className="w-full h-32 lg:h-28 ssm:px-5 overflow-clip text-small-light text-neutral-50/60 ">
              {descIndex !== -1 && (
                <motion.div
                  className="indent-8"
                  initial={"hidden"}
                  animate="visible"
                  variants={roadMapDescAni}
                >
                  {road.roadData[descIndex].desc}
                </motion.div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Road;
