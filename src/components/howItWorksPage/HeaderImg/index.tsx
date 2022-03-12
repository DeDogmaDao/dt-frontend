import { useEffect, useState } from "react";
import { layersData } from "../../../store/allData";
import DiscordBtn from "../../global/Buttons/DiscordBtn";
import Layer from "./Layer";
import throttle from "lodash/throttle";

const HeaderImg: React.FC = () => {
  const [top, setTop] = useState(0);
  const topTransform = () => {
    setTop(window.scrollY / 30);
  };
  console.log(top);
  useEffect(() => {
    window.addEventListener("scroll", throttle(topTransform, 10));
    return () => {
      window.removeEventListener("scroll", throttle(topTransform, 10));
    };
  }, []);

  return (
    <div className="w-full h-[1607px] flex justify-center items-start relative -mt-16">
      {layersData.map((data, index) => {
        return <Layer top={top} index={index} data={data} />;
      })}
      {/* <h2 className="absolute top-56 left-1/2 -ml-56">Nepoleia is sold out!</h2>
      <div className="absolute top-96 left-1/2 -ml-32">
        <DiscordBtn />
      </div> */}
    </div>
  );
};

export default HeaderImg;
