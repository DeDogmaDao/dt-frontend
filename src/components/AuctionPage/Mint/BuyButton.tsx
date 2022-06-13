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
    <div>
      <div>timer:{timer}</div>
      <button>buy : {currentPrice} ETH</button>
    </div>
  );
};
export default BuyButton;
