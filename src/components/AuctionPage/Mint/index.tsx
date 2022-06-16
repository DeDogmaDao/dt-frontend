import { useWeb3Auction } from "../../../hooks/useWeb3Auction";
import BuyButton from "./BuyButton";
import Prices from "./Prices";

interface props {
  index: number;
}
const Mint: React.FC<props> = ({ index }) => {
  const {
    auctionDropPerStep,
    endPrice,
    endTime,
    isError,
    isLoading,
    isSold,
    isSuccess,
    startPrice,
    startTime,
    tokenId,
  } = useWeb3Auction({ argument: [index + 1] });

  const prices = {
    startPrice: startPrice,
    endPrice: endPrice,
    auctionDropPerStep: auctionDropPerStep,
  };
  return (
    <div className="w-[42.3125rem] h-[20.25rem] flex flex-col justify-start items-start gap-10 ml-6">
      <Prices
        auctionDropPerStep={auctionDropPerStep}
        endPrice={endPrice}
        startPrice={startPrice}
      />
      <BuyButton
        auctionDropPerStep={auctionDropPerStep}
        endPrice={endPrice}
        endTime={endTime}
        startPrice={startPrice}
        startTime={startTime}
      />
    </div>
  );
};

export default Mint;
