import { tabsType, tabType } from "../../../types/allTypes";

interface props {
  data: tabType[];
  setTabs: any;
  tabs: tabsType[];
}

const SelectBox: React.FC<props> = ({ data, tabs, setTabs }) => {
  return (
    <button className="w-52 h-8 text-xs flex justify-center items-center rounded-3xl border-b-2 relative">
      tab1
      <div
        className="absolute top-full mt-1 left-0 w-full  overflow-y-scroll flex flex-col bg-blackPrime"
        style={{ height: 200 }}
      >
        {data.map((option) => {
          return (
            <span className="text-red-400 bg-secondary-900 text-xs w-full py-2 text-left pl-3">
              {option.name}
            </span>
          );
        })}
      </div>
    </button>
  );
};

export default SelectBox;
