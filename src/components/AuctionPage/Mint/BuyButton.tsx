import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { auctionDropInterval } from "../../../store/constants";
import { auctionResultType, statusType } from "../../../types/allTypes";
import { secondsToDhms } from "../../../utils/util";
import Skeleton from "../../global/Skeleton";
import Timer from "../../global/Timer";

interface props {
  data: auctionResultType | undefined;
  status: statusType;
  auctionStage: number;
  setAuctionStage: Dispatch<SetStateAction<number>>;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}
const BuyButton: React.FC<props> = ({
  data,
  status,
  auctionStage,
  setAuctionStage,
  setActiveIndex,
}) => {
  const [timer, setTimer] = useState<number | null>(null);
  const [currentPrice, setCurrentPrice] = useState(Number(0));
  const [tensTimer, setTensTimer] = useState(-2);
  useEffect(() => {
    if (data && auctionStage > 0) {
      const now = new Date().getTime();
      console.log(
        ((data.endTime - now / 1000) % 3600) / 60,
        data.isSold,
        auctionStage
      );
      const timeStep = (data.endTime - now / 1000) / auctionDropInterval;
      setTensTimer(Math.floor(timeStep));
      if (auctionStage === 2) {
        setTimer(Math.round(data.startTime - now / 1000));
      } else if (auctionStage === 1) {
        setTimer(
          Math.round((timeStep - Math.floor(timeStep)) * auctionDropInterval)
        );
      }
    }
  }, [data, auctionStage]);

  useEffect(() => {
    if (data && auctionStage === 1) {
      const price: number =
        Number(data.startPrice) -
        Math.floor((5 * 60) / auctionDropInterval - tensTimer) *
          Number(data.auctionDropPerStep);
      if (price < Number(data.endPrice)) {
        setCurrentPrice(Number(data.endPrice));
      } else {
        setCurrentPrice(price);
      }
      if (tensTimer === -1) {
        console.log(tensTimer + "+++++++");
        setAuctionStage(0);
        setTimeout(() => {
          setActiveIndex((prevState) => {
            if (prevState !== 9) {
              return prevState + 1;
            }
            return 9;
          });
        }, 1000);
      }
    }
  }, [tensTimer]);
  console.log(auctionStage);
  return (
    <div className="flex flex-col justify-start items-start text-xl font-normal">
      <div className="flex justify-center items-center flex-nowrap h-14">
        {auctionStage === 1 ? (
          <>
            The next reduction occurs in:
            <Timer
              time={timer}
              classNames="ml-2"
              setTensTimer={setTensTimer}
              tensTimer={tensTimer}
            />
          </>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-start items-center gap-x-4 mt-6">
        <button
          disabled={
            !status.isLoading || auctionStage === 0 || auctionStage === 2
          }
          className="h-12 w-44 text-xl font-medium flex justify-center items-center
        bg-primary-500 hover:bg-primary-500/50 border-2 border-primary-500 duration-300 rounded-xl text-black
        disabled:bg-neutral-300 disabled:hover:bg-neutral-300 disabled:border-neutral-100"
        >
          Buy Now
        </button>
        <p className="text-xl font-normal flex justify-center items-center">
          {auctionStage === 0
            ? data?.owner.substring(0, 10) +
              "..." +
              data?.owner.substring(data.owner.length - 10)
            : "Current Price: " + currentPrice.toFixed(4) + " ETH"}
        </p>
      </div>
    </div>
  );
};
export default BuyButton;
