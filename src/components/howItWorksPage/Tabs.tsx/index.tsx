import { createRef, Ref, useRef } from "react";
import { tabsData } from "../../../store/allData";

const Tabs: React.FC = () => {
  const ref: Ref<HTMLButtonElement> = createRef();

  return (
    <div className="flex flex-col justify-between items-center bg-blackPrime h-screen py-20">
      <div className="flex justify-center items-center gap-x-5 bg-mainBg-500 h-10 px-1 rounded-md">
        {tabsData.map((data) => {
          return <button></button>;
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Tabs;
