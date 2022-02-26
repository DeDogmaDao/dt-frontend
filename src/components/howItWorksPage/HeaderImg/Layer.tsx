import { layersType } from "../../../types/propTypes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
interface props {
  data: layersType;
  top: number;
  index: number;
}
const Layer: React.FC<props> = ({ data, top, index }) => {
  const scales = data.image === "2.png" ? `scale(${1 - top / 100})` : "";
  const translates = -top * index + index * 35;
  const styles = {
    transform: `translateY(${translates}px) ${scales}`,
  };

  return (
    <img
      src={"/media/layers/" + data.image}
      style={styles}
      className={` transform-gpu ${
        index === 0 ? "w-full h-full" : "absolute left-0 top-0 w-full h-full"
      }
      `}
    />
  );
};

export default Layer;
