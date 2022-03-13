import { useEffect } from "react";
import { layersType } from "../../../types/allTypes";
interface props {
  data: layersType;
  top: number;
  index: number;
}
const Layer: React.FC<props> = ({ data, top, index }) => {
  const scales = top / 10;
  const translates = (-top * data.speed);

  let styles = {};
  if (index === 0) {
    styles = {
      transform: `translateY(${translates}vw)`,
      top: data.top + "vw",
    };
  }
  if (index === 1) {
    styles = {
      transform: `translateY(${translates}vw)`,
      top: data.top + "vw",
    };
  }
  if (index === 2) {
    styles = {
      transform: `translateY(${translates}vw) scale(${1 - scales*5})`,
      top: data.top + "vw",
    };
  }
  if (index === 3) {
    styles = {
      transform: `translateY(${translates}vw) scale(${1 - scales})`,
      top: data.top + "vw",
    };
  }
  if (index === 4) {
    styles = {
      transform: `translateY(${translates}vw) scale(${1 - scales})`,
      left: "-15%",
      top: data.top + "vw",
      marginLeft: "0vw",
      width: "140vw",
      maxWidth: "140vw",
    };
  }

  return (
    <img
      src={"/media/layers/" + data.image}
      style={styles}
      className={`transform-gpu w-full absolute`}
    />
  );
};

export default Layer;
