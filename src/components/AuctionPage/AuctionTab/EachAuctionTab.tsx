interface props {
  tabName: string;
}
const EachAuctionTab: React.FC<props> = ({ tabName }) => {
  return (
    <button className="flex justify-center items-center w-full h-full px-5 py-2">
      {tabName}
    </button>
  );
};

export default EachAuctionTab;
