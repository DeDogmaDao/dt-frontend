import { Dispatch, RefObject, SetStateAction } from "react";
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
  const cardClickHandler = (e: any) => {
    if (isDragged) {
      e.preventDefault();
      return false;
    }
    setActiveIndexCard((prevState) => ({ ...prevState, [tabGroup]: index }));
  };

  const cardPlace = cardPlaceDetector(activeIndexCard[tabGroup], index);
  let style: MotionStyle = {
    top: 0,
    marginLeft: "-160px",
  };

  return (
    <motion.div
      layoutId={index.toString() + tabGroup}
      style={style}
      initial={"hidden"}
      animate="visible"
      exit={"out"}
      variants={carouselDisplayAni}
      custom={cardPlace}
      onClick={(e) => cardClickHandler(e)}
      className={`h-[420px] w-[320px] flex  text-white absolute select-none hover:cursor-pointer  ${
        activeIndexCard[tabGroup] === index ? "grayscale-0" : "grayscale"
      }`}
    >
      <Image
        draggable={false}
        className="object-contain"
        src={data.image}
        height="420"
        width="320"
      />
    </motion.div>
  );
};

export default Card;
