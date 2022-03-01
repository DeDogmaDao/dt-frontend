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
    let ratio = 1 / (distance / 10);
    setScaleRatio(ratio / 11);
  }, [activeIndex]);

  const style = data.activeCard
    ? {}
    : {
        transform: `scale(${scaleRatio}) translateY(${
          (1 / scaleRatio) * 50
        }px)`,
      };
  return (
    <div
      style={style}
      ref={data.activeCard ? cardRef : eachCradRef}
      className="h-full py-5 w-80 flex flex-col justify-center items-center text-white duration-700"
    >
      <img className="w-full object-contain" src={data.image} loading="lazy" />
      <p className="text-4xl text-primary-500">{data.name}</p>
      {/* <div>{data.desc}</div> */}
    </div>
  );
};

export default Card;
