import { layersType } from "../../../types/allTypes";
interface props {
  data: layersType;
  top: number;
  index: number;
}
const Layer: React.FC<props> = ({ data, top, index }) => {
  const scales = data.image !== "1.png" && data.image !== "2.png" ? `scale(${1 - top / 100})` : "";
  const translates = ( data.top - top * data.speed);
  const styles = {
    transform: `translateY(${translates}px) ${scales}`,
  };

  return (
    <img
      src={"/media/layers/" + data.image}
      style={styles}
      className={` transform-gpu w-full  ${
        index === 0 ? "" : "absolute left-0 top-0"
      }
      ${data.image === "5.png" ? "left-1/2 ml-[-20vw] w-[140vw] !max-w-[140vw]" : ""}
      `}
    />
  );
};

export default Layer;
