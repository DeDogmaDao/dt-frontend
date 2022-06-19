import Mint from "./Mint";
import { auctionData } from "../../store/allData";
import { useState } from "react";
import AuctionTab from "./AuctionTab";
import About from "./About";
import OtherGodHolders from "./OtherGodHolders";
import { useWeb3Auction } from "../../hooks/useWeb3Auction";
import Skeleton from "../global/Skeleton";
const AuctionPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(9);
  const [activeTab, setActiveTab] = useState(0);
  const { results, status } = useWeb3Auction();
// console.log(results, status)
  return (
    <div className="w-screen min-h-screen flex justify-center items-center px-20 mb-32">
      <div className=" h-full flex flex-col justify-center items-start ">
        <AuctionTab activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="w-[42.3125rem] h-[20.9375rem] bg-[#191C3A5C]/30">
        
          {auctionData.map((auction, index) => {
            if (index !== activeIndex) {
              return null;
            }
            return (
              <>
                {activeTab === 0 && (
                  <Mint index={index} data={results[index]} status={status} />
                )}
                {activeTab === 1 && <About data={auction} />}
                {activeTab === 2 && <OtherGodHolders apiData={results} data={auctionData} />}
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
