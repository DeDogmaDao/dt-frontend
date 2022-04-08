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
      <div className="sliding-parent">
        <div
          className="sliding"
          ref={rightLeftScroll}
          style={{ touchAction: "none" }}
        >
          <div
            className="flex my-20"
            style={{ marginInline: deviceWidth / 2 - halfCardWidth + "px" }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sliding;
