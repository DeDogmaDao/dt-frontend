import { createRef, Ref, useRef } from "react";
import { tabsData } from "../../../store/allData";
import Card from "./Card";
import Sliding from "./Sliding";
const Tabs: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-blackPrime h-screen w-full">
      <div className="flex justify-center items-center gap-x-5 bg-mainBg-500 px-1 rounded-md">
        {tabsData.map((data) => {
          return (
            <>
            <Sliding Item={Card} allData={tabsData} />
            </>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Tabs;
