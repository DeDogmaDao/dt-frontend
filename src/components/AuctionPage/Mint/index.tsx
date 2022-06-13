import { useWeb3Auction } from "../../../hooks/useWeb3Auction";
import Prices from "./Prices";

interface props {
  index: number;
}
const Mint: React.FC<props> = ({ index }) => {
  const auctionData = useWeb3Auction({ argument: [index + 1] });
  console.log(auctionData);
  const prices = {auctionData.}
  return (
    <div className="w-[42.3125rem] h-[20.25rem] flex justify-center items-center">
      <Prices prices={1} />
    </div>
  );
};

export default Mint;
