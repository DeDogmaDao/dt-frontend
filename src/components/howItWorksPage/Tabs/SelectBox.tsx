import { useState } from "react";
import { tabsType, tabType } from "../../../types/allTypes";
import deepClone from "lodash/cloneDeep";

interface props {
  data: tabType[];
  setTabs: any;
  tabs: tabsType[];
  group: string;
}

const SelectBox: React.FC<props> = ({ data, tabs, setTabs, group }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const btnClickHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const optionClickHandler = (name: string) => {
    const clonedState = deepClone(tabs);
    const newCard = clonedState.map((tab) => {
      if (tab.tabGroup === group) {
        tab.tabInfo.forEach((item) => {
          if (item.name === name) {
            item.activeCard = true;
          } else {
            item.activeCard = false;
          }
        });
      }
      return tab;
    });
    setTabs(newCard);
  };

  return (
    <button
      className="w-52 h-8 text-xs flex justify-start items-center rounded-3xl border-b-2 relative"
      onClick={btnClickHandler}
    >
      {data.map(
        (item) => item.activeCard && <p className="ml-5">{item.name}</p>
      )}
      <div
        className="absolute top-full mt-1 left-0 w-full  overflow-y-scroll flex flex-col bg-secondary-900 duration-300 rounded-lg"
        style={{ height: isExpanded ? 200 : 0 }}
      >
        {data.map((option) => {
          return (
            <span
              className="text-red-400  text-xs rounded-md py-2 mx-1 text-left pl-3 hover:bg-secondary-700"
              onClick={() => optionClickHandler(option.name)}
            >
              {option.name}
            </span>
          );
        })}
      </div>
    </button>
  );
};

export default SelectBox;
