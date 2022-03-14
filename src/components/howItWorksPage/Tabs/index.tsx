import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { allTabs } from "../../../store/allData";
import EachGroup from "./EachGroup";
import EachTab from "./EachTab";
import SelectBox from "./SelectBox";
import TabData from "./TabData";

const Tabs: React.FC = () => {
  const [tabs, setTabs] = useState(allTabs);

  return (
    <div className="flex flex-col justify-start items-center h-[1270px] w-full relative gap-y-10">
      <img src="/media/junks/tabs.png" className="absolute right-0 bottom-0" />
      <img
        src="/media/junks/tabs.png"
        className="absolute left-0 scale-x-[-1] bottom-0"
      />
      <h2 className="mt-16 text-3xl">CHOOSE YOUR CARDS</h2>
      <h5 className="mt-12 text-xs underline">
        There are two types in Nepoleia:
      </h5>
      <div className="h-11 flex justify-center items-center gap-x-10 text-2xl mt-4">
        <LayoutGroup id="tabGroup">
          {tabs.map((data) => {
            return (
              <EachGroup
                tabs={tabs}
                name={data.tabGroup}
                activeGroup={data.activeGroup}
                setTabs={setTabs}
              />
            );
          })}
        </LayoutGroup>
      </div>
      <div className="w-[673px] h-[302px] bg-mainBg-500 mt-16 relative">
        {/* sliding goes here */}
        {tabs.map((group, groupIndex) => {
          return group.tabInfo.map((data, index) => {
            return (
              <TabData
                key={data.name + index + groupIndex}
                data={data}
                activeGroup={group.activeGroup}
              />
            );
          });
        })}
      </div>

      {tabs.map((tab) => {
        if (!tab.activeGroup) return null;
        // return (
        //   <SelectBox
        //     data={tab.tabInfo}
        //     tabs={tabs}
        //     setTabs={setTabs}
        //     group={tab.tabGroup}
        //   />
        // );
        return (
          <div className="h-11 flex justify-center items-center gap-x-0 text-2xl mt-8 relative">
            <LayoutGroup id="eachTab">
              {tab.tabInfo.map((data) => {
                return (
                  <EachTab
                    group={tab.tabGroup}
                    name={data.name}
                    activeCard={data.activeCard}
                    tabs={tabs}
                    setTabs={setTabs}
                  />
                );
              })}
            </LayoutGroup>
            <div className="absolute bottom-[-9px] w-[110%]  h-0.5 mx-auto z-100 bg-primText"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
