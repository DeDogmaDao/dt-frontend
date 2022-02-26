import { layersType } from "../../../types/propTypes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
interface props {
  data: layersType;
  top: number;
  index: number;
}
const Layer: React.FC<props> = ({ data, top, index }) => {
  return (
    <img
      src={"/media/layers/" + data.image}
      style={{ transform: `translateY(${-top * index + index * 35}px) ${data.image==="2.png" ? `scale(${1 - top/100})` : ""}` }}
      className={` transform-gpu ${
        index === 0 ? "w-full h-full" : "absolute left-0 top-0 w-full h-full"
      }
      `}
    />
  );
};

export default Layer;
