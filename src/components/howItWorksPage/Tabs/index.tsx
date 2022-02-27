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
    <div className="flex flex-col justify-between items-center h-full w-full">
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
        <div className="h-20 flex justify-center items-center gap-x-10 text-2xl">
          <LayoutGroup id="eachTab">
            {tabs.map((data) => {
              return (
                <EachTab
                
                />
              );
            })}
          </LayoutGroup>
        </div>;
      })}
    </div>
  );
};

export default Tabs;
