import EachAuctionTab from "./EachAuctionTab";

const auctionData = ["Mint", "About", "Other GodHolders"];

const AuctionTab: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-[42.3125rem] h-[3.25rem]">
        {auctionData.map((auction, index) => {
            return (
                <EachAuctionTab />
            )
        })}
    </div>
  );
};

export default AuctionTab;
