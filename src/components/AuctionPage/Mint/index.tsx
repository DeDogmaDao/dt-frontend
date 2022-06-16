import { auctionResultType } from "../../../types/allTypes";
import BuyButton from "./BuyButton";
import Prices from "./Prices";

interface props {
  index: number;
  data:auctionResultType;
}
const Mint: React.FC<props> = ({ index,data }) => {
  if (!data) return null;
  return (
    <div className="w-[42.3125rem] h-[20.25rem] flex flex-col justify-start items-start gap-10 ml-6">
      <Prices
        auctionDropPerStep={data.auctionDropPerStep}
        endPrice={data.endPrice}
        startPrice={data.startPrice}
      />
      <BuyButton
        auctionDropPerStep={data.auctionDropPerStep}
        endPrice={data.endPrice}
        endTime={data.endTime}
        startPrice={data.startPrice}
        startTime={data.startTime}
      />
    </div>
  );
};

export default Mint;
