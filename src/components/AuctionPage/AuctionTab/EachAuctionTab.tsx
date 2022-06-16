import { Dispatch, SetStateAction } from "react";

interface props {
  tabName: string;
  activeTab: number;
  index:number;
  setActiveTab: Dispatch<SetStateAction<number>>;

}
const EachAuctionTab: React.FC<props> = ({ tabName,activeTab,setActiveTab,index }) => {
  return (
    <button onClick={()=>setActiveTab(index)} className={`flex justify-center items-center w-max h-full px-6 py-3 duration-300 hover:bg-red-900 ${activeTab===index && "bg-red-700 "}`}>
      {tabName}
    </button>
  );
};

export default EachAuctionTab;
