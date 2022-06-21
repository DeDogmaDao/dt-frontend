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
        setIsAuctionOver(true);
      } else if (data?.endTime < Date.now() / 1000) {
        setIsAuctionOver(true);
      }
    }
  }, [data?.isSold, data?.endTime]);

  return (
    <div className="w-[42.3125rem] h-[20.25rem] flex flex-col justify-start items-start gap-10 ml-6">
      {status.isLoading ? (
        <>
          <Prices data={data} status={status} isAuctionOver={isAuctionOver} />
          <BuyButton data={data} status={status} isAuctionOver={isAuctionOver} />
        </>
      ) : (
        <MintSkeleton />
      )}
    </div>
  );
};

export default Mint;
