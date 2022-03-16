import { useEffect, useState } from "react";
import { layersData } from "../../../store/allData";
import DiscordBtn from "../../global/Buttons/DiscordBtn";
import Layer from "./Layer";
import throttle from "lodash/throttle";

const HeaderImg: React.FC = () => {
  const [top, setTop] = useState(0);
  const topTransformWheel = (evt: any) => {
    evt.preventDefault();
    var direction = evt.detail < 0 || evt.wheelDelta > 0 ? 1 : -1;

    if (direction > 0) {
      window.scrollTo({
        top: window.scrollY - 30,
        left: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: window.scrollY + 30,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  const topTransformScroll = () => {
    setTop(window.scrollY / 300);
  };

  useEffect(() => {
    const throttleScroll = throttle(topTransformScroll, 10);
    const throttleWheel = throttle((e) => topTransformWheel(e), 20);
    window.addEventListener("mousewheel", throttleWheel, { passive: false });
    window.addEventListener("DOMMouseScroll", throttleWheel, {
      passive: false,
    });
    window.addEventListener("scroll", throttleScroll);
    return () => {
      window.removeEventListener("mousewheel", throttleWheel);
      window.removeEventListener("DOMMouseScroll", throttleWheel);
      window.removeEventListener("scroll", throttleScroll);
    };
  }, []);

  return (
    <div className="w-full h-[80vw] bg-red-700 flex justify-center items-start relative -mt-16 !overflow-hidden">
      {layersData.map((data, index) => {
        return <Layer top={top} index={index} data={data} />;
      })}
      <h2 className="absolute top-56 left-1/2 -ml-56">Nepoleia is sold out!</h2>
      <div className="absolute top-96 left-1/2 -ml-32">
        <DiscordBtn />
      </div>
      <span className="w-full h-1 bg-yellow-500 absolute top-[75vw] left-0 z-100"></span>
    </div>
  );
};

export default HeaderImg;
