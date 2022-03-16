import { useEffect, useRef, useState } from "react";
import { layersData } from "../../../store/allData";
import DiscordBtn from "../../global/Buttons/DiscordBtn";
import Layer from "./Layer";
import throttle from "lodash/throttle";
import { useInView } from "react-intersection-observer";
import { topTransformWheel } from "../../../utils/util";

const HeaderImg: React.FC = () => {
  const layerContainerRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);
  // when yellow line is on the screen then we have to change scroll behavior
  const [yellowRef, yellowInView] = useInView();
  const [greenRef, greenInView] = useInView();
  const [isScrollNormal, setIsScrollNormal] = useState(false);
  // setting isScrollNormal if user refresh the page at the middle of scroll height
  useEffect(() => {
    if (window.scrollY > layerContainerRef.current!.clientHeight) {
      setIsScrollNormal(true);
    }
  }, []);

  // when we reach to yellow from top
  useEffect(() => {
    if (yellowInView && isScrollNormal === false) {
      setIsScrollNormal(true);
    }
  }, [yellowInView]);

  // when we reach to green from bottom
  useEffect(() => {
    if (greenInView && isScrollNormal === true) {
      setIsScrollNormal(false);
    }
  }, [greenInView]);

  const topTransformScroll = () => {
    setTop(window.scrollY / 300);
  };

  useEffect(() => {
    const throttleScroll = throttle(topTransformScroll, 10);
    const throttleWheel = throttle((e) => topTransformWheel(e), 20);

    if (isScrollNormal === false) {
      window.addEventListener("mousewheel", throttleWheel, { passive: false });
      window.addEventListener("DOMMouseScroll", throttleWheel, {
        passive: false,
      });
      window.addEventListener("scroll", throttleScroll);
    }

    return () => {
      window.removeEventListener("mousewheel", throttleWheel);
      window.removeEventListener("DOMMouseScroll", throttleWheel);
      window.removeEventListener("scroll", throttleScroll);
    };
  }, [isScrollNormal]);

  return (
    <div
      ref={layerContainerRef}
      className="w-full h-[80vw] bg-red-700 flex justify-center items-start relative -mt-16 !overflow-hidden"
    >
      {layersData.map((data, index) => {
        return <Layer top={top} index={index} data={data} />;
      })}
      <h2 className="absolute top-56 left-1/2 -ml-56">Nepoleia is sold out!</h2>
      <div className="absolute top-96 left-1/2 -ml-32">
        <DiscordBtn />
      </div>
      <span
        ref={greenRef}
        className="w-full h-1 bg-green-500 absolute top-[30vw] left-0 z-100"
      ></span>
      <span
        ref={yellowRef}
        className="w-full h-1 bg-yellow-500 absolute top-[75vw] left-0 z-100"
      ></span>
    </div>
  );
};

export default HeaderImg;
