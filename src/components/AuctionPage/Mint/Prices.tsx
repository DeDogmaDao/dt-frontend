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
      <div className="flex gap-x-2 items-center">
        Start Price:
        <span className="font-normal">{data?.startPrice.toFixed(4) + " ETH"}</span>
      </div>
      {auctionStage >= 1 && (
        <div className="flex gap-x-2 items-center">
          The amount of price drop:
          <span className="font-normal">
            {data?.auctionDropPerStep.toFixed(4) + " ETH"}
          </span>
        </div>
      )}
      <div className="flex gap-x-2 items-center">
        Resting Price:
        <span className="font-normal">{data?.endPrice.toFixed(4) + " ETH"}</span>
      </div>
      {auctionStage === 0 && (
        <div className="flex gap-x-2 items-center">
          purchase Price:
          <span className="font-normal">{data?.purchasePrice.toFixed(4) + " ETH"}</span>
        </div>
      )}
      <span className="h-[7.375rem] w-[.125rem] fill-primary-50 absolute -left-4">
        <AuctionVerticalDashLineSVG />
      </span>
    </div>
  );
};
export default Prices;
