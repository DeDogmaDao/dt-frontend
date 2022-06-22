import { Dispatch, ReactElement, SetStateAction } from "react";
interface props {
  tabName: string;
  tabIcon:ReactElement<any>;
  activeTab: number;
  index: number;
  setActiveTab: Dispatch<SetStateAction<number>>;

}
const EachAuctionTab: React.FC<props> = ({
  tabName,
  activeTab,
  setActiveTab,
  index,
  tabIcon
}) => {
  return (
    <button
      onClick={() => setActiveTab(index)}
      className={`flex justify-center items-center w-max h-full rounded-t-lg px-6 py-3 gap-x-2 duration-300 hover:bg-[#191C3A5C]/60 ${
        activeTab === index && "bg-[#191C3A5C]/30 text-primary-500"
      }`}
    >
      <span className=" stroke-primary-500 w-6 h-6">{tabIcon}</span>
      <p className="text-xl font-semibold">{tabName}</p>
    </button>
  );
};

export default EachAuctionTab;
