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
}) => {
  const [innerWidth, setInnerWidth] = useState(0);

  useLayoutEffect(() => {
    const innerwidthHandler = () => {
      setInnerWidth(window.innerWidth);
    };
    innerwidthHandler();
    window.addEventListener("resize", innerwidthHandler);

    return () => {
      window.removeEventListener("resize", innerwidthHandler);
    };
  }, []);

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
    innerWidth < 1024
      ? cardPlaceDetector(activeIndexCard[tabGroup], index)
      : cardPlaceDetectorUpper(activeIndexCard[tabGroup], index);


  return (
    <motion.div
      layoutId={index.toString() + tabGroup}
      initial={index !==null && "initial"}
      animate="visible"
      exit={"out"}
      variants={carouselDisplayAni}
      custom={{ cardPlace, innerWidth }}
      onClick={(e) => cardClickHandler(e)}
      className={`tab-card-container h-[28.75rem] w-[18.75rem] flex  text-white absolute select-none 
      hover:cursor-pointer !rounded-xl overflow-hidden top-0 ${
        innerWidth < 1024
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
