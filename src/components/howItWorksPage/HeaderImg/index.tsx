import { useEffect, useState } from "react";
import { layersData } from "../../../store/allData";
import DiscordBtn from "../../global/Buttons/DiscordBtn";
import Layer from "./Layer";
import throttle from "lodash/throttle";

const HeaderImg: React.FC = () => {
  const [top, setTop] = useState(0);
  const topTransform = (evt: any) => {
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
    window.addEventListener(
      "mousewheel",
      throttle((e) => topTransform(e), 10),
      { passive: false }
    );
    window.addEventListener(
      "DOMMouseScroll",
      throttle((e) => topTransform(e), 10),
      { passive: false }
    );
    window.addEventListener("scroll", throttle(topTransformScroll, 10));
    return () => {
      window.removeEventListener(
        "mousewheel",
        throttle((e) => topTransform(e), 10)
      );
      window.removeEventListener(
        "DOMMouseScroll",
        throttle((e) => topTransform(e), 10)
      );
      window.removeEventListener("scroll", throttle(topTransformScroll, 10));
    };
  }, []);

  return (
    <div className="w-full h-[70vw] flex justify-center items-start relative -mt-16 !overflow-hidden">
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
