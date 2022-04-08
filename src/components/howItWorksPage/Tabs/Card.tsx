import { RefObject, useEffect, useRef, useState } from "react";
import { tabType } from "../../../types/allTypes";
import { motion } from "framer-motion";
import Image from "next/image";
interface props {
  data: tabType;
  cardRef: RefObject<HTMLDivElement>;
  index: number;
  tabInfo: tabType[];
}
const Card: React.FC<props> = ({ data, cardRef, index, tabInfo }) => {
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

  const style = data.activeCard
    ? {}
    : {
        transform: `scale(${scaleRatio})`,
      };
  return (
    <motion.div
      ref={data.activeCard ? cardRef : eachCradRef}
      className="h-[400px] w-[215px] flex  items-end text-white duration-300 origin-bottom"
    >
      <Image

        className="max-w-max object-contain"
        src={data.image}
        height="450"
        width="320"
      />
      {/* <p className="text-4xl text-primary-500">{data.name}</p> */}
      {/* <div>{data.desc}</div> */}
    </motion.div>
  );
};

export default Card;
