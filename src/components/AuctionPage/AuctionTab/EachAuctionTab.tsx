interface props {
  tabName: string;
  activeTab: number;
  index:number;
}
const EachAuctionTab: React.FC<props> = ({ tabName,activeTab,index }) => {
  return (
    <button className={`flex justify-center items-center w-max h-full px-6 py-3 ${activeTab===index && "bg-red-700 hover:bg-red-900"}`}>
      {tabName}
    </button>
  );
};

export default EachAuctionTab;
