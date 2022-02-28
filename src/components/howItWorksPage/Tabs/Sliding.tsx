import { RefObject, useEffect, useRef, useState } from "react";

interface props {
  allData: any;
  Item: React.FC<{ data: any; cardRef:RefObject<HTMLDivElement> }>;
  cardRef: RefObject<HTMLDivElement>;

}
const Sliding: React.FC<props> = ({ allData, Item, cardRef }) => {
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
        <div className="sliding-parent">
          <div style={snapStyle} className="sliding" ref={rightLeftScroll}>
            <div>
              {allData.map((data: any, index: number) => {
                return <Item data={data} cardRef={cardRef}  />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sliding;
