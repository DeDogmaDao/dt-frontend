import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import {auctionImgs} from '../../../store/img';
import { AngleRightSVG } from "../../../store/svg";
import { auctionDataType } from "../../../types/allTypes";
import { auctionContainerAni } from "../../../utils/animation";

interface props {
  data: auctionDataType[];
  activeIndex: number;
  previousActiveIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}
const AuctionSlider: React.FC<props> = ({
  data,
  activeIndex,
  setActiveIndex,
  previousActiveIndex
}) => {
  const leftClickHandler = () => {
    setActiveIndex((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      } else {
        return prevState;
      }
    });
  };
  
  const rightClickHandler = () => {
    setActiveIndex((prevState) => {
      if (prevState < 9) {
        return prevState + 1;
      } else {
        return prevState;
      }
    });
  };
  return (
    <div className="w-[33.75rem] h-[40rem] flex justify-center items-center mt-20 relative select-none">
      <div className="w-[22.5rem] h-[38.125rem] flex flex-col justify-center items-center relative select-none">
        <AnimatePresence custom={(previousActiveIndex>activeIndex)}>
        {data.map((item, index) => {
          if (index !== activeIndex) {
            return null;
          }
          return (
            <motion.div className="w-full h-full absolute top-0 left-0"
            variants={auctionContainerAni}
            custom={(previousActiveIndex>activeIndex)}
            initial="hidden"
            animate="visible"
            exit={"out"}
            key={index}
            
            >
              <div className="w-full h-full relative select-none">
                <Image
                  src={auctionImgs[index]}
                  layout="fill"
                  quality={100}
                  placeholder="blur"
                  className="select-none"
                />
              </div>
              <h3 className="text-[2rem] font-medium mt-2 select-none">{item.godName}</h3>
              <h3 className="text-xl font-medium text-primary-500 -mt-1 select-none">
                “{item.titleOfHonor}”
              </h3>
            </motion.div>
          );
        })}
        </AnimatePresence>
      </div>
      <button
        className="absolute p-2 left-10 top-1/2 -mt-12 text-5xl scale-x-[-1] text-white ssm:text-neutral-400 z-60"
        onClick={leftClickHandler}
      >
        <AngleRightSVG stroke="#66666A" width={21} height={45} fill="none" />
      </button>
      <button
        className="absolute p-2 right-10 top-1/2 -mt-12 text-5xl  text-white ssm:text-neutral-400 z-60"
        onClick={rightClickHandler}
      >
        <AngleRightSVG stroke="#66666A" width={21} height={45} fill="none" />
      </button>
    </div>
  );
};

export default AuctionSlider;
