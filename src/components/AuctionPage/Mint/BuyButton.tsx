import { useEffect, useState } from "react";
import { auctionDropInterval } from "../../../store/constants";
import { auctionResultType, statusType } from "../../../types/allTypes";
import { secondsToDhms } from "../../../utils/util";
import Skeleton from "../../global/Skeleton";
import Timer from "../../global/Timer";

interface props {
  data: auctionResultType | undefined;
  status: statusType;
}
const BuyButton: React.FC<props> = ({ data, status }) => {
  const [timer, setTimer] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(Number(0));
  useEffect(() => {
    if (data) {
      const now = new Date().getTime();
      setTimer(Math.round(data.startTime - now / 1000));
      const elapsedTime: number = Math.round(now / 1000 - data.startTime);
      const price: number =
        Number(data.startPrice) -
        (Number(data.auctionDropPerStep) * elapsedTime) / auctionDropInterval;
      if (price < Number(data.endPrice)) {
        setCurrentPrice(Number(data.endPrice));
      } else {
        setCurrentPrice(price);
      }
    }
  }, [data]);

  if (timer <= 0) return null;
  return (
    <div className="flex flex-col justify-start items-start text-xl font-normal">
      <div className="flex justify-center items-center flex-nowrap h-14">
        The next reduction occurs in:
        {<Timer time={timer} classNames="ml-2" />}
      </div>
      <div className="flex justify-start items-center gap-x-4 mt-6">
        <button
          disabled={!status.isLoading}
          className="px-14 py-3 text-xl font-medium 
        bg-primary-500 hover:bg-primary-500/50 border-2 border-primary-500 duration-300 rounded-full text-black
        disabled:bg-neutral-300 disabled:hover:bg-neutral-300 disabled:border-neutral-100"
        >
          Buy Now
        </button>
        <p className="text-xl font-normal flex justify-center items-center">
          Current Price:
          {" " + currentPrice.toFixed(4) + " ETH"}
        </p>
      </div>
    </div>
  );
};
export default BuyButton;
