import { useEffect, useState } from "react";
import { secondsToDhms } from "../../../utils/util";

interface props {
    startPrice: string;
    endPrice: string;
    auctionDropPerStep: string;
    startTime: number;
    endTime: number;
}
const BuyButton: React.FC<props> = ({auctionDropPerStep, endPrice, endTime, startPrice, startTime }) => {
const [timer,setTimer] = useState(0);
const [currentPrice, setCurrentPrice] = useState(Number(startPrice));
useEffect(()=>{
if(startTime){
    const now = new Date().getTime();
    setTimer(Math.round(now/1000 - startTime));
    
}
},[startTime])
  return (
    <div>
        <div>timer:{timer}</div>
      <button>buy</button>
    </div>
  );
};
export default BuyButton;
