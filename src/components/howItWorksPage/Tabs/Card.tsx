import {
  Dispatch,
  MouseEvent,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { activeIndexCardType, tabType } from "../../../types/allTypes";
import { motion, MotionStyle } from "framer-motion";
import Image from "next/image";
import { cardPlaceDetector } from "../../../utils/util";
import { carouselDisplayAni } from "../../../utils/animation";
interface props {
  data: tabType;
  cardRef: RefObject<HTMLDivElement>;
  index: number;
  tabInfo: tabType[];
  tabGroup: string;
  activeIndexCard: activeIndexCardType;
  setActiveIndexCard: Dispatch<SetStateAction<activeIndexCardType>>;
  isDragged:boolean;
}
const Card: React.FC<props> = ({
  data,
  cardRef,
  index,
  tabInfo,
  activeIndexCard,
  setActiveIndexCard,
  tabGroup,
  isDragged
  
}) => {
  const cardClickHandler = (e:any) => {
    if(isDragged){
      e.preventDefault();
      return false;
    }
    setActiveIndexCard(prevState=>({...prevState,[tabGroup]:index}))
  }



  const cardPlace = cardPlaceDetector(activeIndexCard[tabGroup], index);
  let style: MotionStyle = {
    scale: 1 - 0.3 * Math.abs(cardPlace),
    top: 0,
    left: 50 + cardPlace * 35 + "%",
    marginLeft: "-110px",
  };

  return (
    <motion.div
      layoutId={index.toString() + tabGroup}
      transition={{ duration: 0.3, stiffness: 200 }}
      style={style}
      initial={"hidden"}
      animate="visible"
      exit={"out"}
      variants={carouselDisplayAni}
      custom={cardPlace}
      onClick={(e)=>cardClickHandler(e)}
      className={`h-[465px] w-[220px] flex  text-white absolute select-none bg-red ${
        activeIndexCard[tabGroup] === index ? "grayscale-0" : "grayscale"
      }`}
    >
      <Image
      draggable={false}
        className="object-contain"
        src={data.image}
        height="465"
        width="220"
      />
      {/* <p className="text-4xl text-primary-500">{data.name}</p> */}
      {/* <div>{data.desc}</div> */}
    </motion.div>
  );
};

export default Card;
