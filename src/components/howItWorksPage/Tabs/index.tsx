import { LayoutGroup } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { allTabs } from "../../../store/allData";
import Card from "./Card";
import EachGroup from "./EachGroup";
import EachTab from "./EachTab";
import Sliding from "./Sliding";
const Tabs: React.FC = () => {
  const [tabs, setTabs] = useState([...allTabs]);
  const cardRef = useRef<HTMLDivElement>(null);
  const [deviceWidth, setDeviceWidth] = useState(0);
  let isSmallDevice = false;
  const halfCardWidth = 160;

  useEffect(() => {
    setDeviceWidth(document.documentElement.offsetWidth);
    isSmallDevice = deviceWidth <= 768;
  }, []);

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
      <div className="w-full h-full bg-mainBg-500 ">
        <Sliding
          cardRef={cardRef}
          tabs={tabs}
          deviceWidth={deviceWidth}
          halfCardWidth={halfCardWidth}
        >
          {tabs[0].tabInfo.map((data) => {
            return <Card cardRef={cardRef} data={data} />;
          })}
        </Sliding>
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
                    cardRef={cardRef}
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
