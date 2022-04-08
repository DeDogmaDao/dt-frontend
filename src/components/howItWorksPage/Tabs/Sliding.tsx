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

  // START of  carosel : isdown check the mouse key down , startx is the scrill left at the beggining of mouse key down and scroll left is the current scroll left
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const caroselMouseDownHandler = (e: any) => {
    e.preventDefault();
    setIsDown(true);
    setStartX(e.pageX - rightLeftScroll.current!.offsetLeft);
    setScrollLeft(rightLeftScroll.current!.scrollLeft);
  };

  //we put wastfullCover to avoid triger click action . bcs click happen wen we mouse down and mouse up on the same object
  //... so this 0 opacity cover help us to don't mouse up at the same object
  const caroselMouseLeaveHandler = () => {
    setIsDown(false);
  };

  //we put wastfullCover to avoid triger click action . bcs click happen wen we mouse down and mouse up on the same object
  //... so this 0 opacity cover help us to don't mouse up at the same object
  // we also update the state, we load all the data if user dragging the carosel
  const caroselMouseUpHandler = () => {
    setIsDown(false);
  };

  const caroselMouseMoveHandler = (e: any) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - rightLeftScroll.current!.offsetLeft;
    const walk = (x - startX) * 1.5;
    rightLeftScroll.current!.scrollLeft = scrollLeft - walk;
  };

  //in scroll handler btn we use our magic number to manage the scroll by using math.round
  //...we also load more data if user click on the right button. the number of new data is depend on size of the device
  const rightScrollHandler = () => {
    let caroselLeft = rightLeftScroll.current!.scrollLeft;
    rightLeftScroll.current!.scrollTo({
      top: 0,
      left: caroselLeft + 200,
      behavior: "smooth",
    });
  };

  //like the right handler but we dont load new data as it make sense
  const leftScrollHandler = () => {
    let caroselLeft = rightLeftScroll.current!.scrollLeft;
    rightLeftScroll.current!.scrollTo({
      top: 0,
      left: caroselLeft - 200,
      behavior: "smooth",
    });
  };

  //in touch handler we do same thing. maybe we need to clean this mess and make another function to use in all event listeners
  //.
  //..
  //...
  const caroselTouchHandler = () => {
    let caroselLeft = rightLeftScroll.current!.scrollLeft;
    let caroselWidth = rightLeftScroll.current!.scrollWidth;

    if (caroselLeft / caroselWidth < 0.5) {
    }
  };

  const snapStyle = isSmallDevice
    ? {
        scrollSnapType: "x mandatory",
        scrollPaddingInline: "50px",
      }
    : {};

  return (
    <>
      <div className="sliding-parent">
        <div
          className="sliding"
          ref={rightLeftScroll}
          style={{ touchAction: "none" }}
          onTouchEnd={caroselTouchHandler}
          onMouseDown={caroselMouseDownHandler}
          onMouseLeave={caroselMouseLeaveHandler}
          onMouseUp={caroselMouseUpHandler}
          onMouseMove={caroselMouseMoveHandler}
        >
          <div
            className="flex justify-center items-center"
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
