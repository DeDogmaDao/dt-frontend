import { useEffect, useRef, useState } from "react";

interface props {
  allData: any;
  initialQuantity: number;
  Item: React.FC<{ data: any }>;
}
const Carosel: React.FC<props> = ({ allData, initialQuantity, Item }) => {
  const rightLeftScroll = useRef<HTMLDivElement>(null);
  const wastefulCover = useRef<HTMLDivElement>(null);
  const [showMore, setShowMore] = useState({
    quantity: initialQuantity,
  });
  const [isPlaying, setIsPlaying] = useState(true);
  const [rtl, setRtl] = useState(false);

  //check to see if we are in small device or large one to decide how many data should load
  let isSmallDevice = false;

  // START of  carosel : isdown check the mouse key down , startx is the scrill left at the beggining of mouse key down and scroll left is the current scroll left
  let isDown = false;
  let startx: number, scrollLeft: number;

  useEffect(() => {
    isSmallDevice = document.documentElement.clientWidth <= 768;
    if (!isPlaying) return;
    const interval = setInterval(() => {
      rightLeftScroll.current!.scrollLeft =
        rightLeftScroll.current!.scrollLeft + 1;
    }, 47);

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  //on mouse down we set startx and scrollLeft , then we update scrollLeft later but we dont update startx bcs it is constant from a click down to click up
  const caroselMouseDownHandler = (e: any) => {
    e.preventDefault();
    isDown = true;
    startx = e.pageX - rightLeftScroll.current!.offsetLeft;
    scrollLeft = rightLeftScroll.current!.scrollLeft;
    setIsPlaying(false);
  };

  //we put wastfullCover to avoid triger click action . bcs click happen wen we mouse down and mouse up on the same object
  //... so this 0 opacity cover help us to don't mouse up at the same object
  const caroselMouseLeaveHandler = () => {
    isDown = false;
    wastefulCover.current!.style.display = "none";
  };

  //we put wastfullCover to avoid triger click action . bcs click happen wen we mouse down and mouse up on the same object
  //... so this 0 opacity cover help us to don't mouse up at the same object
  // we also update the state, we load all the data if user dragging the carosel
  const caroselMouseUpHandler = () => {
    isDown = false;

    wastefulCover.current!.style.display = "none";

    setShowMore({ quantity: allData.length });
  };

  const caroselMouseMoveHandler = (e: any) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - rightLeftScroll.current!.offsetLeft;
    const walk = (x - startx) * 1.5;
    rightLeftScroll.current!.scrollLeft = scrollLeft - walk;
    wastefulCover.current!.style.display = "block";
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
    if (
      isSmallDevice
        ? showMore.quantity < allData.length + 1
        : showMore.quantity < allData.length + 3
    ) {
      const newQuantity = isSmallDevice
        ? showMore.quantity + 1
        : showMore.quantity + 3;
      setShowMore({ quantity: newQuantity });
    }
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
      if (
        isSmallDevice
          ? showMore.quantity < allData.length + 1
          : showMore.quantity < allData.length + 3
      ) {
        setShowMore({ quantity: allData.length });
      }
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
      <div>
        <div className="carosel-parent my-20">
          <div
            style={snapStyle}
            className="carosel"
            ref={rightLeftScroll}
            onTouchEnd={caroselTouchHandler}
            onTouchStart={() => setIsPlaying(false)}
            onMouseDown={caroselMouseDownHandler}
            onMouseLeave={caroselMouseLeaveHandler}
            onMouseUp={caroselMouseUpHandler}
            onMouseMove={caroselMouseMoveHandler}
          >
            <div>
              {allData
                .filter(
                  (_: any, index: number) => showMore.quantity - 1 >= index
                )
                .map((data: any, index: number) => {
                  return <Item data={data} />;
                })}
              <div ref={wastefulCover} className="wasteful-cover"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carosel;
