import { useEffect, useLayoutEffect, useState } from "react";
import { auctionResultType, statusType } from "../../../types/allTypes";
import Skeleton from "../../global/Skeleton";
import BuyButton from "./BuyButton";
import MintSkeleton from "./MintSkeleton";
import Prices from "./Prices";

interface props {
  index: number;
  data: auctionResultType | undefined;
  status: statusType;
}
const Mint: React.FC<props> = ({ index, data, status }) => {
  const [auctionStage, setAuctionStage] = useState(2);
  useLayoutEffect(() => {
    if (data) {
      if (data?.isSold) {
        setAuctionStage(0);
      } else if (data?.endTime < Date.now() / 1000) {
        setAuctionStage(0);
      }
      if(data.endTime > Date.now() / 1000 && data.startTime < Date.now() / 1000) {
        setAuctionStage(1);
      }
      if(data.startTime > Date.now() / 1000) {
        setAuctionStage(2);
      }
    }
  }, [data?.isSold, data?.endTime]);

  return (
    <div className="w-[42.3125rem] h-[20.25rem] flex flex-col justify-start items-start gap-10 ml-6">
      {status.isLoading ? (
        <>
          <Prices data={data} status={status} auctionStage={auctionStage} />
          <BuyButton data={data} status={status} auctionStage={auctionStage} />
        </>
      ) : (
        <MintSkeleton />
      )}
    </div>
  );
};

export default Mint;
