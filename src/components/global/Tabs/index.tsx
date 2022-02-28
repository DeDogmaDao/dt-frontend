import { createRef, Ref, useRef } from "react";
import { allTabs } from "../../../store/allData";
import Button from "../Buttons/Button";

const Tabs: React.FC = () => {
  const ref: Ref<HTMLButtonElement> = createRef();

  return (
    <div className="flex flex-col justify-between items-center bg-blackPrime h-screen py-20">
      <div className="flex justify-center items-center gap-x-5 bg-mainBg-500 h-10 px-1 rounded-md">
        {allTabs.map((button) => {
          return <Button ref={ref} content={button.tabGroup} customClass={"rounded-md"} />;
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Tabs;
