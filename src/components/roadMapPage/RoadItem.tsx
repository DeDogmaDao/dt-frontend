import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { roadDataType } from "../../types/allTypes";
import AngleRightSVG from "../svgs/rightangle.svg";
import { roadMapDescAni } from "../../utils/animation";
interface props {
  data: roadDataType;
  setDescIndex: Dispatch<SetStateAction<number>>;
  descIndex: number;
  index: number;
}

const RoadItem: React.FC<props> = ({
  data,
  setDescIndex,
  descIndex,
  index,
}) => {
  const descriptionHoverHandler = () => {
    setDescIndex((prevState) => {
      if (prevState === index) {
        return prevState;
      }
      return -1;
    });
    setTimeout(() => {
      setDescIndex((prevState) => {
        if (prevState === -1) {
          return index;
        }
        return prevState;
      });
    }, 1);
  };

  return (
    <motion.li
      onHoverStart={descriptionHoverHandler}
      onTap={descriptionHoverHandler}
      className={`w-full flex flex-col`}
    >
      <div
        className={` cursor-default w-full flex justify-start items-start 3xl:items-center gap-x-3 text-medium-medium 2xl:text-large-medium
       ${
         index === descIndex
           ? "text-primary-500 stroke-primary-500 "
           : ""
       }`}
      >
        {" "}
        <span
          className={`text-base duration-500 ${
            index === descIndex && "rotate-90"
          }`}
        >
          <AngleRightSVG
            stroke="#2CEDFF"
            width={10}
            height={17}
            fill="none"
            style={{ marginTop: 7 }}
          />
        </span>
        <p>{data.title}</p>
      </div>
      <div
        className={`w-full h-0 opacity-0 pl-10 overflow-clip text-small-light font-normal text-neutral-50/60 duration-500
      ${index === descIndex && "!h-16 opacity-100"}`}
      >
        {data.desc}
      </div>
    </motion.li>
  );
};

export default RoadItem;
