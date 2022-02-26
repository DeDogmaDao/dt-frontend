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
          <div style={snapStyle} className="carosel" ref={rightLeftScroll}>
            <div>
              {allData.map((data: any, index: number) => {
                return <Item data={data} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carosel;
