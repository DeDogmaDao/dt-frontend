import Image from "next/image";
import { tabImgData } from "../../../store/img";
import { auctionDataType } from "../../../types/allTypes";

interface props {
  data: auctionDataType[];
  activeIndex: number;
}
const AuctionSlider: React.FC<props> = ({ data, activeIndex }) => {
  return (
    <div className="w-[33.75rem] h-[40rem] flex justify-center items-center mt-20">
      <div className="w-[22.5rem] h-[38.125rem] flex flex-col justify-center items-center">
        {data.map((item, index) => {
          if (index !== activeIndex) {
            return null;
          }
          return (
            <>
              <div className="w-full h-full relative">
                <Image
                  src={tabImgData["gods"][index]}
                  layout="fill"
                  quality={100}
                  placeholder="blur"
                />
              </div>
              <h3 className="text-[2rem] font-medium mt-2">{item.godName}</h3>
              <h3 className="text-xl font-medium text-primary-500 -mt-1">“{item.titleOfHonor}”</h3>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AuctionSlider;
