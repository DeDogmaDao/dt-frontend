import { useEffect, useState } from "react";
import { auctionDropInterval } from "../../../store/constants";
import { secondsToDhms } from "../../../utils/util";

interface props {
  startPrice: string;
  endPrice: string;
  auctionDropPerStep: string;
  startTime: number;
  endTime: number;
}
const BuyButton: React.FC<props> = ({
  auctionDropPerStep,
  endPrice,
  endTime,
  startPrice,
  startTime,
}) => {
  const [timer, setTimer] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(Number(startPrice));
  useEffect(() => {
    if (startTime) {
      const now = new Date().getTime();
      setTimer(Math.round(startTime - now / 1000));
      const elapsedTime: number = Math.round(now / 1000 - startTime);
      const price: number =
        Number(startPrice) -
        (Number(auctionDropPerStep) * elapsedTime) / auctionDropInterval;
      if (price < Number(endPrice)) {
        setCurrentPrice(Number(endPrice));
      } else {
        setCurrentPrice(price);
      }
    }
  }, [startTime]);

  return (
    <div className="flex flex-col justify-start items-start text-xl font-normal">
      <div>The next reduction occurs in:{timer}</div>
      <div className="flex justify-start items-center gap-x-4 mt-8">
      <button className="px-14 py-3 text-xl font-medium bg-primary-500 hover:bg-primary-500/50 border-2 border-primary-500 duration-300 rounded-full text-black">Buy Now</button>
      <p className="text-xl font-normal"> Current Price: 3 ETH</p>
      </div>
    </div>
  );
};
export default BuyButton;
