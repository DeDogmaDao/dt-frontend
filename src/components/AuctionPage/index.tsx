import Mint from "./Mint";
import { auctionData } from "../../store/allData";
import { useState } from "react";
const AuctionPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full h-full flex justify-center items-center ">
      

      
      {auctionData.map((auction, index) => {
        if (index !== activeIndex) {
          return null;
        }
        return (
          <>
            <Mint index={index} />
          </>
        );
      })}
    </div>
  );
};

export default AuctionPage;
