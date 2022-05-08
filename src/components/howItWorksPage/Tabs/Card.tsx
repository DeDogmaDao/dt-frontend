import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { activeIndexCardType, tabType } from "../../../types/allTypes";
import { motion, MotionStyle } from "framer-motion";
import Image from "next/image";
import {
  cardIndexHandler,
  cardPlaceDetector,
  cardPlaceDetectorUpper,
} from "../../../utils/util";
import { carouselDisplayAni } from "../../../utils/animation";
import imgData from "./img/img";
interface props {
  data: tabType;
  cardRef: RefObject<HTMLDivElement>;
  index: number;
  tabInfo: tabType[];
  tabGroup: string;
  activeIndexCard: activeIndexCardType;
  setActiveIndexCard: Dispatch<SetStateAction<activeIndexCardType>>;
  isDragged: boolean;
  innerWidth:number;
}
const Card: React.FC<props> = ({
  data,
  cardRef,
  index,
  tabInfo,
  activeIndexCard,
  setActiveIndexCard,
  tabGroup,
  isDragged,
  innerWidth
}) => {

  const cardClickHandler = (e: any) => {
    if (isDragged) {
      e.preventDefault();
      return false;
    }
    setActiveIndexCard((prevState) => ({
      ...prevState,
      [tabGroup]: cardIndexHandler(index -1, tabInfo.length),
    }));
  };

  const cardPlace =
    innerWidth < 1280
      ? cardPlaceDetector(activeIndexCard[tabGroup], index)
      : cardPlaceDetectorUpper(activeIndexCard[tabGroup], index);

  const style:MotionStyle = {
    marginLeft: innerWidth < 1280 ? "-9.375rem" : "0rem"
  }
  return (
    <motion.div
      layoutId={index.toString() + tabGroup}
      initial={"hidden"}
      animate="visible"
      exit={"out"}
      variants={carouselDisplayAni}
      custom={{ cardPlace, innerWidth, tabGroup }}
      style={style}
      onClick={(e) => cardClickHandler(e)}
      className={`tab-card-container h-[28.75rem] w-[18.75rem] flex  text-white absolute select-none 
      hover:cursor-pointer !rounded-xl overflow-hidden top-0   ${
        innerWidth < 1280
          ? activeIndexCard[tabGroup][1] === index
            ? "grayscale-0"
            : "grayscale"
          : activeIndexCard[tabGroup][2] === index
          ? "grayscale-0"
          : "grayscale"
      }`}
    >
      <div className="w-full h-full relative">
        <Image
          alt={"dedogmadao " + tabGroup + " " + data.name}
          draggable={false}
          src={imgData[tabGroup][index]}
          layout="fill"
          quality={100}
          placeholder="blur"
        />
      </div>
    </motion.div>
  );
};

export default Card;
