import { useEffect, useState } from "react";
import { layersData } from "../../../store/allData";
import DiscordBtn from "../../global/Buttons/DiscordBtn";
import Layer from "./Layer";

const HeaderImg: React.FC = () => {
  const [top, setTop] = useState(0);
  const topTransform = () => {
    setTop(window.scrollY / 15);
    console.log(top);
  };
  useEffect(() => {
    window.addEventListener("scroll", topTransform);
    return () => {
      window.removeEventListener("scroll", topTransform);
    };
  }, [top]);

  return (
    <div className="w-full h-full flex justify-center items-center relative -mt-16">
      {layersData.map((data, index) => {
        return <Layer top={top} index={index} data={data} />;
      })}
      <div className="bg-gradient-to-b from-transparent via-mainBg-500 to-mainBg-500 w-full h-[450px] absolute left-0 
      top-[calc(25%+392px)] "
      style={{ transform: `translateY(${(35-top)*15}px)`}} />
      <h2 className="absolute top-56 left-1/2 -ml-56">Nepoleia is sold out!</h2>
      <div className="absolute top-96 left-1/2 -ml-32">
        <DiscordBtn />{" "}
      </div>
    </div>
  );
};

export default HeaderImg;
