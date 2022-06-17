import { auctionResultType, statusType } from "../../../types/allTypes";
import Skeleton from "../../global/Skeleton";
import BuyButton from "./BuyButton";
import Prices from "./Prices";

interface props {
  index: number;
  data: auctionResultType | undefined;
  status:statusType;
}
const Mint: React.FC<props> = ({ index, data , status}) => {
  return (
    <div className="w-[42.3125rem] h-[20.25rem] flex flex-col justify-start items-start gap-10 ml-6">
      <Prices data={data} status={status} />
      <BuyButton data={data} status={status} />
    </div>
  );
};

export default Mint;
