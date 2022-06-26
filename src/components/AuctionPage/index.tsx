import Mint from "./Mint";
import { auctionData } from "../../store/allData";
import { useLayoutEffect, useState } from "react";
import AuctionTab from "./AuctionTab";
import About from "./About";
import OtherGodHolders from "./OtherGodHolders";
import { useWeb3Auction } from "../../hooks/useWeb3Auction";
import AuctionSlider from "./AuctionSlider";
import { AnimatePresence, motion } from "framer-motion";
import { auctionContainerAni } from "../../utils/animation";
const AuctionPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(5);
  const [toLeft,setToLeft] = useState<boolean|null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const { results, status } = useWeb3Auction();
  console.log(toLeft)
  useLayoutEffect(() => {
    results.map((data, index) => {
      if (
        data &&
        data.endTime > Math.floor(Date.now() / 1000) &&
        data.startTime <= Math.floor(Date.now() / 1000)
      ) {
        setActiveIndex(index);
      }
    });
  }, [results[0]]);
  
  return (
    <div className="w-screen min-h-screen flex justify-center items-center px-20 mb-32 mt-8">
      <div className="h-full flex flex-col justify-center items-start relative ">
        <h1 className="absolute -top-16 left-0 text-5xl font-bold">
          DUTCH AUCTION
          <span className=" ml-4 text-xl font-semibold text-neutral-200/80">
            {" "}
            <span className="text-primary-500 ">Day {activeIndex + 1}</span> /
            10
          </span>
        </h1>
        <AuctionTab activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="w-[42.3125rem] h-[20.9375rem] bg-[#191C3A5C]/30 rounded-b-lg rounded-tr-lg">
          <AnimatePresence>
          {auctionData.map((auction, index) => {
            if (index !== activeIndex) {
              return null;
            }
            return (
              <motion.div className="w-full h-full"
              variants={auctionContainerAni}
              custom={{index,toLeft}}
              initial="hidden"
              animate="visible"
              key={index}
              >
                {activeTab === 0 && (
                  <Mint
                    index={index}
                    data={results[index]}
                    status={status}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                )}
                {activeTab === 1 && <About data={auction} />}
                {activeTab === 2 && (
                  <OtherGodHolders
                    apiData={results}
                    data={auctionData}
                    setActiveIndex={setActiveIndex}
                    setActiveTab={setActiveTab}
                    activeIndex={activeIndex}
                  />
                )}
              </motion.div>
            );
          })}
          </AnimatePresence>
        </div>
      </div>
      <AuctionSlider
        data={auctionData}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setToLeft={setToLeft}
      />
    </div>
  );
};

export default AuctionPage;
