import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { allTabs } from "../../../store/allData";
import { activeIndexCardType } from "../../../types/allTypes";
import Card from "./Card";
import EachGroup from "./EachGroup";
import EachTab from "./EachTab";
import Slider from "./Slider";
import Sliding from "./Sliding";

const Tabs: React.FC = () => {
  const [tabs, setTabs] = useState(allTabs);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeIndexCard, setActiveIndexCard] = useState<activeIndexCardType>({
    gods: 5,
    humans: 2,
  });

  return (
    <div className="flex flex-col justify-between items-center h-full w-full my-20 ">
      <div className=" flex justify-center items-center gap-x-24 text-2xl">
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
      <div className="w-full h-full bg-neutral-900 ">
        {tabs.map((tab) => {
          if (!tab.activeGroup) return null;
          return (
            <Slider
            tabGroup={tab.tabGroup}
              setActiveIndexCard={setActiveIndexCard}
              activeIndexCard={activeIndexCard}
              dataQuantity={tab.tabInfo.length}
            >
              <LayoutGroup>
              <AnimatePresence>
              {tab.tabInfo.map((data, index) => {
                if (
                  index > activeIndexCard[tab.tabGroup] + 1 ||
                  index < activeIndexCard[tab.tabGroup] - 1
                ) {
                  return null;
                }
                return (
                  <Card
                  key={data.name}
                  tabGroup={tab.tabGroup}
                  setActiveIndexCard={setActiveIndexCard}
                  activeIndexCard={activeIndexCard}
                    cardRef={cardRef}
                    data={data}
                    index={index}
                    tabInfo={tab.tabInfo}
                  />
                );
              })}
              </AnimatePresence>
              </LayoutGroup>
            </Slider>
          );
        })}
      </div>

      {tabs.map((tab) => {
        if (!tab.activeGroup) return null;
        return (
          <div className="h-16 flex justify-center items-center gap-x-[10px] text-2xl  rounded-full">
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
