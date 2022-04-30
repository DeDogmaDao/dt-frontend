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
      setDescIndex(index);
  };

  return (
    <motion.li
      onHoverStart={descriptionHoverHandler}
      onTap={descriptionHoverHandler}
      className={`w-full flex flex-col  flex-grow`}
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
          className={`text-base duration-500  ${
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
      <motion.div
      style={{height:index === descIndex ? data.size *2.5 + "rem" : "0rem"}}
        className={`w-full opacity-0 pl-10 overflow-clip 
        text-small-light font-normal text-neutral-50/60 duration-500 delay-75 
      ${index === descIndex && "opacity-100"}`}
      >
        {data.desc}
      </motion.div>
    </motion.li>
  );
};

export default RoadItem;
