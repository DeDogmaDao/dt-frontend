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
      <div className="flex justify-between items-center w-full h-full relative">
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <img className="w-full h-full" src={road.backImg} />
        </div>
        <h3 className="w-1/2 h-full z-10 flex justify-center items-center">
        {road.sectionName}
        </h3>
        <div className="w-1/2 h-full flex justify-center items-center z-10">
          <ul className="w-[416px] p-8 flex flex-col gap-y-2 bg-neutral-600 rounded-xl">
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
            <div className="w-full h-28 px-5 overflow-clip text-small-light text-neutral-50/60 ">
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
