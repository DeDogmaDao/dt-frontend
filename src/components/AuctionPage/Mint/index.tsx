import { useWeb3Auction } from "../../../hooks/useWeb3Auction";
import Prices from "./Prices";

interface props {
  index: number;
}
const Mint: React.FC<props> = ({ index }) => {
  const auctionData = useWeb3Auction({ argument: [index + 1] });

  const prices = {
    startPrice: auctionData.startPrice,
    endPrice: auctionData.endPrice,
    auctionDropPerStep: auctionData.auctionDropPerStep,
  };
  return (
    <div className="w-[42.3125rem] h-[20.25rem] flex justify-center items-center">
      <Prices prices={prices} />
    </div>
  );
};

export default Mint;
