import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";

interface props {
  data: { title: string; desc: string };
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
    }, 100);
  };

  return (
    <motion.li
      onHoverStart={descriptionHoverHandler}
      className={`w-full flex justify-start items-start gap-3 text-medium-medium hover:text-primary-300 duration-300
       ${index === descIndex ? "text-primary-300 translate-x-2":""}`}
    >
      <span className="text-xl">
        <FontAwesomeIcon icon={faAngleRight} />
      </span>
      <p>{data.title}</p>
    </motion.li>
  );
};

export default RoadItem;
