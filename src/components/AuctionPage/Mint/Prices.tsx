import { AuctionVerticalDashLineSVG } from "../../../store/svg";
import { auctionResultType, statusType } from "../../../types/allTypes";
import Skeleton from "../../global/Skeleton";

interface props {
  data: auctionResultType | undefined;
  status: statusType;
  auctionStage: number;
}

const Prices: React.FC<props> = ({ data, status, auctionStage }) => {
  return (
    <div
      className={`flex flex-col gap-x-10 gap-y-4 relative mt-8 ml-4 font-bold text-xl`}
    >
      <div className="flex items-center">
        Start Price: {data?.startPrice + " ETH"}
      </div>
      {auctionStage >= 1 && (
        <div className="flex items-center">
          The amount of price drop: {data?.auctionDropPerStep + " ETH"}
        </div>
      )}
      <div className="flex items-center">
        Resting Price: {data?.endPrice + " ETH"}
      </div>
      {auctionStage === 0 && (
        <div className="flex items-center">
          purchase Price: {data?.purchasePrice + " ETH"}
        </div>
      )}
      <span className="h-[7.375rem] w-[.125rem] fill-primary-50 absolute -left-4">
        <AuctionVerticalDashLineSVG />
      </span>
    </div>
  );
};
export default Prices;
