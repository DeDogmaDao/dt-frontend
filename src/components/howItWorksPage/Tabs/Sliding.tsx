import { RefObject, useEffect, useRef, useState } from "react";
import { tabsType } from "../../../types/allTypes";

interface props {
  cardRef: RefObject<HTMLDivElement>;
  tabs: tabsType[];
}
const Sliding: React.FC<props> = ({ tabs, cardRef, children }) => {
  const rightLeftScroll = useRef<HTMLDivElement>(null);
  const [deviceWidth, setDeviceWidth] = useState(0);
  let isSmallDevice = false;
  const halfCardWidth = 160;

  useEffect(() => {
    setDeviceWidth(window.innerWidth);
    isSmallDevice = deviceWidth <= 768;
    setTimeout(() => {
      rightLeftScroll.current!.scrollTo({
        top: 0,
        left:
          cardRef.current!.offsetLeft - window.innerWidth / 2 + halfCardWidth,
        behavior: "smooth",
      });
    }, 1);
  }, [tabs]);

  return (
    <>
      <div className="relative block w-screen overflow-visible z-110 h-[500px] mx-auto">
        <div
          className="absolute top-0 left-0 w-full h-[500px] flex overflow-x-scroll bg-secText/20"
          ref={rightLeftScroll}
        >
          <div
            className="flex"
            style={{ margin: "0 " + (deviceWidth / 2 - halfCardWidth) + "px" }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sliding;
