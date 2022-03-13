import { useEffect, useRef, useState } from "react";
import { tabsType, tabType } from "../../../types/allTypes";
import deepClone from "lodash/cloneDeep";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCheck } from "@fortawesome/free-solid-svg-icons";

interface props {
  data: tabType[];
  setTabs: any;
  tabs: tabsType[];
  group: string;
}

const SelectBox: React.FC<props> = ({ data, tabs, setTabs, group }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(5);
  const optionListRef = useRef<HTMLDivElement>(null);
  const btnClickHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const optionClickHandler = (name: string) => {
    const clonedState = deepClone(tabs);
    const newCard = clonedState.map((tab) => {
      if (tab.tabGroup === group) {
        tab.tabInfo.forEach((item, index) => {
          if (item.name === name) {
            item.activeCard = true;
            setActiveIndex(index);
          } else {
            item.activeCard = false;
          }
        });
      }
      return tab;
    });
    setTabs(newCard);
  };

  const windowClickHandler = (e: any) => {
    if (isExpanded === true && e.target.id !== "tab-select-box") {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded === true) {
      optionListRef.current!.scrollTop = (activeIndex - 2) * 32;
    }
    // click outside to close select box
    window.addEventListener("click", windowClickHandler);

    return () => {
      window.removeEventListener("click", windowClickHandler);
    };
  }, [isExpanded]);

  return (
    <button
      id="tab-select-box"
      className="w-52 h-8 text-xs flex justify-between px-5 items-center rounded-3xl border-b-2 relative hover:border-primary-500 duration-500"
      onClick={btnClickHandler}
    >
      {data.map((item) => item.activeCard && <p className="">{item.name}</p>)}

      <span
        className={`duration-500 ${
          isExpanded ? "scale-y-[-1]" : "scale-y-100"
        }`}
      >
        <FontAwesomeIcon icon={faAngleDown} />
      </span>
      <div
        ref={optionListRef}
        className="select-box-container absolute top-full mt-2 left-0 w-full  overflow-y-scroll flex flex-col bg-secondary-900 duration-300 rounded-md"
        style={{ height: isExpanded ? 150 : 0 }}
      >
        {data.map((option) => {
          return (
            <span
              className={`flex justify-between items-center text-white text-xs rounded-md py-2 mx-1 px-3 hover:bg-secondary-700 ${
                option.activeCard ? "bg-secondary-700" : ""
              }`}
              onClick={() => optionClickHandler(option.name)}
            >
              {option.name}
              {option.activeCard && <FontAwesomeIcon icon={faCheck} />}
            </span>
          );
        })}
      </div>
    </button>
  );
};

export default SelectBox;
