import { Dispatch, SetStateAction } from "react";
import { auctionDataType, auctionResultType } from "../../../types/allTypes";
import AuctionTable from "./AuctionTable";

interface props {
    apiData: auctionResultType[] | [];
    data:auctionDataType[];
    setActiveIndex:Dispatch<SetStateAction<number>>;
    setActiveTab:Dispatch<SetStateAction<number>>;
    activeIndex:number;
}
const OtherGodHolders: React.FC<props> = ({apiData,data,setActiveIndex,setActiveTab,activeIndex}) => {
  return (
    <div className="w-full h-full flex flex-col">
      <p className="text-xl font-light px-14 pt-9 pb-5">
        GodHolders are the lucky ones who minted earlier in the days of this
        auction.
      </p>
      <div className="w-full px-6 overflow-y-scroll">
        <AuctionTable apiData={apiData} data={data} setActiveIndex={setActiveIndex} setActiveTab={setActiveTab} activeIndex={activeIndex} />
      </div>
    </div>
  );
};

export default OtherGodHolders;
