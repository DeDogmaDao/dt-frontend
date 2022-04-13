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
      transform: `translateY(${translates}vw) scale(${1 - scales})`,
      top: data.top + "vw",
      width: "140vw",
      maxWidth: "140vw",
      height:1200/1920 * 100 + "vw",
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
      top: data.top + "vw",
      width: "140vw",
      maxWidth: "140vw",
    };
  }

  return (
    <img
      src={"/img/layers/" + data.image}
      style={styles}
      className={`transform-gpu w-full absolute`}
    />
  );
};

export default Layer;
