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
    top: 0,
    left: 50 + cardPlace * 35 + "%",
    marginLeft: "-107px",
  };

  return (
    <motion.div
      layoutId={index.toString()}
      transition={{ duration: 0.3, stiffness: 200 }}
      style={style}
      initial={"hidden"}
      animate="visible"
      exit={"out"}
      variants={carouselDisplayAni}
      custom={cardPlace}
      ref={data.activeCard ? cardRef : eachCradRef}
      className="h-[465px] w-[220px] flex  text-white  absolute bg-red-900"
    >
      <Image
        className=" object-contain"
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
