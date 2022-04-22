
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { roadDataType } from "../../types/allTypes";
import AngleRightSVG from "../svgs/rightangle.svg";
interface props {
  data: roadDataType;
  setDescIndex: Dispatch<SetStateAction<number>>;
  descIndex:number;
  index:number;

}

const RoadItem: React.FC<props> = ({ data, setDescIndex, descIndex, index }) => {
  const descriptionHoverHandler = () => {
    setDescIndex((prevState) => {
      if (prevState === index) {
        return prevState;
      }
      return -1;
    });
    setTimeout(() => {
        setDescIndex(prevState=>{
          if(prevState===-1){
              return index
          }
          return prevState
      });
    }, 1);
  };

  return (
    <motion.li
      onHoverStart={descriptionHoverHandler}
      onTap={descriptionHoverHandler}
      className={`w-full flex justify-start items-start 3xl:items-center gap-x-3 text-medium-medium 2xl:text-large-medium duration-300
       ${index === descIndex ? "text-primary-500 stroke-primary-500 translate-x-2":""}`}
    >
      <span className="text-base">
      <AngleRightSVG
          stroke="#2CEDFF"
          width={10}
          height={17}
          fill="none"
          style={{ marginTop:  7}}
        />
      </span>
      <p>{data.title}</p>
    </motion.li>
  );
};

export default RoadItem;
