import { LayoutGroup } from "framer-motion";
import { useState } from "react";
import { allTabs, tabData } from "../../../store/allData";
import Card from "./Card";
import EachGroup from "./EachGroup";
import EachTab from "./EachTab";
import Sliding from "./Sliding";
const Tabs: React.FC = () => {
  const [tabs, setTabs] = useState([...allTabs]);
  return (
    <div className="flex flex-col justify-between items-center h-full w-full my-80 py-96">
      <div className="h-20 flex justify-center items-center gap-x-10 text-2xl">
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
      <div className="flex justify-center items-center gap-x-5 bg-mainBg-500 px-1 rounded-md">
        {tabData.map((data) => {
          return (
            <>
              <Sliding Item={Card} allData={tabData} />
            </>
          );
        })}
      </div>

      {tabs.map((tab) => {
        if (!tab.activeGroup) return null;
        return (
          <div className="h-20 flex justify-center items-center gap-x-10 text-2xl">
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
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
