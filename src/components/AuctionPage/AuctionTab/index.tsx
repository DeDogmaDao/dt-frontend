import { Dispatch, SetStateAction } from "react";
import { auctionTabData } from "../../../store/allData";
import EachAuctionTab from "./EachAuctionTab";


interface props {
  setActiveTab: Dispatch<SetStateAction<number>>;
  activeTab: number;
}
const AuctionTab: React.FC<props> = ({ setActiveTab, activeTab }) => {
  return (
    <div className="flex justify-start items-center w-[42.3125rem] h-[3.25rem]">
      {auctionTabData.map((tabName, index) => {
        return <EachAuctionTab tabName={tabName} activeTab={activeTab} index={index} setActiveTab={setActiveTab} />;
      })}
    </div>
  );
};

export default AuctionTab;
