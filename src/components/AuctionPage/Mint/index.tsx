import { auctionResultType } from "../../../types/allTypes";
import Skeleton from "../../global/Skeleton";
import BuyButton from "./BuyButton";
import Prices from "./Prices";

interface props {
  index: number;
  data: auctionResultType;
}
const Mint: React.FC<props> = ({ index, data }) => {
  return (
    <div className="w-[42.3125rem] h-[20.25rem] flex flex-col justify-start items-start gap-10 ml-6">
      <Prices data={data} />
      <BuyButton data={data} />
    </div>
  );
};

export default Mint;
