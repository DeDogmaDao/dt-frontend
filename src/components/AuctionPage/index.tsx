import Mint from "./Mint";
import { auctionData } from "../../store/allData";
import { useState } from "react";
import AuctionTab from "./AuctionTab";
const AuctionPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <AuctionTab activeTab={activeTab} setActiveTab={setActiveTab} />

      
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
