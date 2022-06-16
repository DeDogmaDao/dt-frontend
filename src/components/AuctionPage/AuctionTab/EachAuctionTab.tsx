import { Dispatch, SetStateAction } from "react";
import { auctionTabsSVGS } from "../../../store/svg";
interface props {
  tabName: string;
  activeTab: number;
  index: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}
const EachAuctionTab: React.FC<props> = ({
  tabName,
  activeTab,
  setActiveTab,
  index,
}) => {
  return (
    <button
      onClick={() => setActiveTab(index)}
      className={`flex justify-center items-center w-full h-full px-6 py-3 gap-x-2 duration-300 hover:bg-red-900 ${
        activeTab === index && "bg-red-700"
      }`}
    >
      <span className="stroke-primary-500 w-6 h-6">{}</span>
      <p>{tabName}</p>
    </button>
  );
};

export default EachAuctionTab;
