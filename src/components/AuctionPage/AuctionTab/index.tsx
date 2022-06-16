import EachAuctionTab from "./EachAuctionTab";

const auctionTabData = ["Mint", "About", "Other GodHolders"];

const AuctionTab: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-[42.3125rem] h-[3.25rem]">
        {auctionTabData.map((tabName, index) => {
            return (
                <EachAuctionTab tabName={tabName} />
            )
        })}
    </div>
  );
};

export default AuctionTab;
