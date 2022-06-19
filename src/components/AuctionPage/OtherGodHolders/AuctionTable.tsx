import { auctionResultType, auctionDataType } from "../../../types/allTypes";

interface props {
    apiData: auctionResultType[] | [];
    data:auctionDataType[];
}
const AuctionTable: React.FC<props> = ({apiData,data}) => {
  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th>N.</th>
          <th>Name</th>
          <th>Price</th>
          <th>Owner</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
{data.map((item,index)=>{
    return (
        <tr>
        <td>day {index}</td>
        <td>{item.godName}</td>
        <td>{apiData[index]}</td>
        <td>owner</td>
        <td>more info</td>
      </tr>
    )
})}
      </tbody>
    </table>
  );
};

export default AuctionTable;
