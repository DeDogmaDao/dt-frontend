import { AuctionVerticalDashLineSVG } from "../../../store/svg";
import { auctionResultType, statusType } from "../../../types/allTypes";
import Skeleton from "../../global/Skeleton";

interface props {
  data: auctionResultType;
  status: statusType;
}

const Prices: React.FC<props> = ({ data, status }) => {
  console.log(data?.purchasePrice);
  return (
    <div className="flex flex-col gap-y-4 relative mt-8 ml-4 font-bold text-xl">
      <div className="flex items-center">
        Start Price:{" "}
        {status.isLoading ? (
          data?.startPrice + " ETH"
        ) : (
          <Skeleton size={{ width: 100, height: 20 }} />
        )}
      </div>
      <div className="flex items-center">
        The amount of price drop:{" "}
        {status.isLoading ? (
          data?.auctionDropPerStep + " ETH"
        ) : (
          <Skeleton size={{ width: 100, height: 20 }} />
        )}
      </div>
      <div className="flex items-center">
        Resting Price:{" "}
        {status.isLoading ? (
          data?.endPrice + " ETH"
        ) : (
          <Skeleton size={{ width: 100, height: 20 }} />
        )}
      </div>
      {data?.isSold && (
        <div className="flex items-center">
          purchase Price:{" "}
          {status.isLoading ? (
            data?.purchasePrice + " ETH"
          ) : (
            <Skeleton size={{ width: 100, height: 20 }} />
          )}
        </div>
      )}
      <span className="h-[7.375rem] w-[.125rem] fill-primary-50 absolute -left-4">
        <AuctionVerticalDashLineSVG />
      </span>
    </div>
  );
};
export default Prices;
