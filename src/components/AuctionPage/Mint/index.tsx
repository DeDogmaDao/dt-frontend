import { Dispatch, SetStateAction, useEffect, useLayoutEffect, useState } from "react";
import { auctionResultType, statusType } from "../../../types/allTypes";
import Skeleton from "../../global/Skeleton";
import BuyButton from "./BuyButton";
import MintSkeleton from "./MintSkeleton";
import Prices from "./Prices";

interface props {
  index: number;
  data: auctionResultType | undefined;
  status: statusType;
  activeIndex:number;
  setActiveIndex:Dispatch<SetStateAction<number>>;
}
const Mint: React.FC<props> = ({ index, data, status,activeIndex,setActiveIndex }) => {
  const [auctionStage, setAuctionStage] = useState(-1);
  useLayoutEffect(() => {
    if (data) {
      if (data?.isSold) {
        setAuctionStage(0);
      } else if (data?.endTime < Math.floor(Date.now() / 1000)) {
        setAuctionStage(0);
      }
      if(data.endTime > Math.floor(Date.now() / 1000) && data.startTime <= Math.floor(Date.now() / 1000)) {
        setAuctionStage(1);
      }
      if(data.startTime > Math.floor(Date.now() / 1000)) {
        setAuctionStage(2);
      }

  }
  }, [data?.isSold, data?.endTime,activeIndex]);



  return (
    <div className="w-[42.3125rem] h-[20.25rem] flex flex-col justify-start items-start gap-10 ml-6">
      {status.isLoading ? (
        <>
          <Prices data={data} status={status} auctionStage={auctionStage} />
          <BuyButton data={data} status={status} auctionStage={auctionStage} setAuctionStage={setAuctionStage} setActiveIndex={setActiveIndex} index={index} />
        </>
      ) : (
        <MintSkeleton />
      )}
    </div>
  );
};

export default Mint;
