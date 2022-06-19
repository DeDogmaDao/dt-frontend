import { auctionResultType, auctionDataType } from "../../../types/allTypes";

interface props {
    apiData: auctionResultType[] | [];
    data:auctionDataType[];
}
const AuctionTable: React.FC<props> = ({apiData,data}) => {
  return (
    <table className="table-auto w-full table border-collapse">
      <thead>
        <tr className="h-11 text-white/60 text-left">
          <th className="text-base font-normal">N.</th>
          <th className="text-base font-normal">Name</th>
          <th className="text-base font-normal">Price</th>
          <th className="text-base font-normal">Owner</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
{data.map((item,index)=>{
    return (
        <tr className="h-16  text-left border-b border-neutral-500/50">
        <td className="text-lg font-normal">day {index + 1}</td>
        <td className="text-lg font-normal">{item.godName}</td>
        <td className="text-lg font-normal">{apiData[index].purchasePrice}</td>
        <td className="text-lg font-normal">{apiData[index].owner.substring(0,10)}</td>
        <td className="font-medium text-base">more info</td>
      </tr>
    )
})}
      </tbody>
    </table>
  );
};

export default AuctionTable;
