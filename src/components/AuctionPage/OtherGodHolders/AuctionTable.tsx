import { Dispatch, SetStateAction } from "react";
import { AngleRightSVG } from "../../../store/svg";
import { auctionResultType, auctionDataType } from "../../../types/allTypes";

interface props {
  apiData: auctionResultType[] | [];
  data: auctionDataType[];
  setActiveIndex:Dispatch<SetStateAction<number>>;
  setActiveTab:Dispatch<SetStateAction<number>>;
}
const AuctionTable: React.FC<props> = ({ apiData, data,setActiveIndex,setActiveTab }) => {
  const moreInfoClickHandler = (index:number) => {
    setActiveIndex(index);
    setActiveTab(0);

  }
  return (
    <table className="table-auto w-full table border-collapse">
      <thead>
        <tr className="h-11 text-white/60 text-left">
          <th className="text-base font-normal pl-4">N.</th>
          <th className="text-base font-normal">Name</th>
          <th className="text-base font-normal">Price</th>
          <th className="text-base font-normal">Owner</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr className="h-16  text-left border-b last-of-type:border-0 border-neutral-500/50 hover:bg-primary-500/20 duration-300">
              <td className="text-lg font-normal pl-4">day {index + 1}</td>
              <td className="text-lg font-normal">{item.godName}</td>
              <td className="text-lg font-normal">
                {apiData[index].purchasePrice + " " + "ETH"}
              </td>
              <td className="text-lg font-normal">
                {apiData[index].owner.substring(0, 5) +
                  "..." +
                  apiData[index].owner.substring(
                    apiData[index].owner.length - 5
                  )}
              </td>
              <td onClick={()=>moreInfoClickHandler(index)} className="group font-medium text-base text-primary-500 hover:text-secondary-500 duration-300
               !no-underline cursor-pointer flex items-center justify-center h-16 gap-x-3">
                <span>More info</span>
                <span className="!w-2 h-4 flex justify-center items-center fill-transparent stroke-primary-500 group-hover:stroke-secondary-500 duration-300">
                  <AngleRightSVG />
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AuctionTable;
