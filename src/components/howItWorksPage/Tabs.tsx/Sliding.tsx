import { useEffect, useRef, useState } from "react";

interface props {
  allData: any;
  initialQuantity: number;
  Item: React.FC<{ data: any }>;
}
const Carosel: React.FC<props> = ({ allData, Item }) => {
  const rightLeftScroll = useRef<HTMLDivElement>(null);

  let isSmallDevice = false;

  useEffect(() => {
    isSmallDevice = document.documentElement.clientWidth <= 768;
  }, []);



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
