import { RefObject, useEffect, useRef, useState } from "react";
import { tabType } from "../../../types/allTypes";

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
    let ratio = (100/distance);
    setScaleRatio(ratio / 130);
  }, [activeIndex]);

  const style = data.activeCard
    ? {}
    : {
        transform: `scale(${scaleRatio})`,
      };
  return (
    <div
      style={style}
      ref={data.activeCard ? cardRef : eachCradRef}
      className="h-[450px] w-80 flex  items-end text-white duration-700 origin-bottom"
    >
      <img className="w-80 object-contain" src={data.image} loading="lazy" />
      {/* <p className="text-4xl text-primary-500">{data.name}</p> */}
      {/* <div>{data.desc}</div> */}
    </div>
  );
};

export default Card;
