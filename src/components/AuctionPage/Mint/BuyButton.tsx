import { useEffect, useState } from "react";

interface props {
    startPrice: string;
    endPrice: string;
    auctionDropPerStep: string;
    startTime: number;
    endTime: number;
}
const BuyButton: React.FC<props> = ({auctionDropPerStep, endPrice, endTime, startPrice, startTime }) => {
const [timer,setTimer] = useState(0);
useEffect(()=>{
const now = new Date().getTime();
console.log(now);
},[])
  return (
    <div>
        <div>timer:{}</div>
      <button>buy</button>
    </div>
  );
};
export default BuyButton;
