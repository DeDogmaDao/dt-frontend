import {
  Dispatch,
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
}
const Card: React.FC<props> = ({
  data,
  cardRef,
  index,
  tabInfo,
  activeIndexCard,
  setActiveIndexCard,
  tabGroup,
}) => {
  const eachCradRef = useRef<HTMLDivElement>(null);
  const [scaleRatio, setScaleRatio] = useState(1);
  let activeIndex = 0;
  tabInfo.forEach((el, index) => {
    if (el.activeCard) {
      activeIndex = index;
    }
  });
  useEffect(() => {
    let distance = Math.abs(activeIndex - index);
    let ratio = 100 / distance;
    setScaleRatio(ratio / 130);
  }, [activeIndex]);

  const cardPlace = cardPlaceDetector(activeIndexCard[tabGroup], index);
  let style: MotionStyle = {
    scale: 1 - 0.3 * Math.abs(cardPlace),
  };
  return (
    <motion.div
      layoutId={index.toString()}
      transition={{duration:0.5}}
      style={style}
      initial={"hidden"}
      animate="visible"
      variants={carouselDisplayAni}
      custom={cardPlace}
      ref={data.activeCard ? cardRef : eachCradRef}
      className="h-[400px] w-[215px] flex  items-end text-white  origin-bottom"
    >
      <Image
        className=" object-contain"
        src={data.image}
        height="400"
        width="215"
      />
      {/* <p className="text-4xl text-primary-500">{data.name}</p> */}
      {/* <div>{data.desc}</div> */}
    </motion.div>
  );
};

export default Card;
