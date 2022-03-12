import { layersType } from "../../../types/allTypes";
interface props {
  data: layersType;
  top: number;
  index: number;
}
const Layer: React.FC<props> = ({ data, top, index }) => {
  const scales = data.image === "4.png" ? `scale(${1 - top / 100})` : "";
  const translates = ( data.top- top * data.speed);
  const styles = {
    transform: `translateY(${translates}px) ${scales}`,
  };

  return (
    <img
      src={"/media/layers/" + data.image}
      style={styles}
      className={` transform-gpu w-full h-full ${
        index === 0 ? "" : "absolute left-0 top-0 "
      }
      `}
    />
  );
};

export default Layer;
