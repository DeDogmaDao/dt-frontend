import Mint from "./Mint";
import { auctionData } from "../../store/allData";
import { useState } from "react";
import AuctionTab from "./AuctionTab";
import About from "./About";
import OtherGodHolders from "./OtherGodHolders";
import { useWeb3Auction } from "../../hooks/useWeb3Auction";
const AuctionPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const {
    results
      } = useWeb3Auction();
      console.log(results)
  return (
    <div className="w-screen min-h-screen flex justify-center items-center px-20 mb-20">
      <div className="w-1/2 h-full flex flex-col justify-center items-start bg-red-200/20">
        <AuctionTab activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="w-[42.3125rem] h-[20.9375rem] bg-green-400/20">
          {auctionData.map((auction, index) => {
            if (index !== activeIndex) {
              return null;
            }
            return (
              <>
                {activeTab === 0 && <Mint index={index} data={results[index]} />}
                {activeTab === 1 && <About />}
                {activeTab === 2 && <OtherGodHolders />}
              </>
            );
          })}
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-red-100"></div>
    </div>
  );
};

export default AuctionPage;
