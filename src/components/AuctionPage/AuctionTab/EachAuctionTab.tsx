interface props {
  tabName: string;
}
const EachAuctionTab: React.FC<props> = ({ tabName }) => {
  return (
    <button className="flex justify-center items-center w-max h-full px-6 py-3 bg-red-700 hover:bg-red-900">
      {tabName}
    </button>
  );
};

export default EachAuctionTab;
