import { AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { allTabs } from "../../../store/allData";
import { activeIndexCardType } from "../../../types/allTypes";
import Card from "./Card";
import EachGroup from "./EachGroup";
import EachTab from "./EachTab";
import Slider from "./Slider";
import TabInfo from "./TabInfo";

const Tabs: React.FC = () => {
  const [tabs, setTabs] = useState(allTabs);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeIndexCard, setActiveIndexCard] = useState<activeIndexCardType>({
    gods: 5,
    humans: 2,
  });
  const [isDragged, setIsDragged] = useState(false);

  return (
    <div
      className="flex flex-col justify-between items-center h-full w-full relative"
      id="cards"
    >
      <div className="absolute top-0 left-0 z-0 w-full">
        <Image
          width="1440"
          height="929"
          layout="responsive"
          src="/img/cyc/tab-bg.png"
        />
      </div>
      <h5 className="z-10 font-bold mt-14 ssm:mt-20 sm:mt-32 lg:mt-40">
        Choose your <span className="text-yellow-400">Card</span>
      </h5>
      <div className=" flex flex-col ssm:flex-row gap-y-8 sm:gap-y-0 justify-center items-center gap-x-8 md:gap-x-24 text-2xl mt-14">
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
      <div className="w-full h-full relative mt-8 md:mt-10 lg:mt-10">
        <div className="w-full h-full flex justify-center items-center">
          {tabs.map((tab) => {
            if (!tab.activeGroup) return null;
            return (
              <Slider
                setIsDragged={setIsDragged}
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
                          isDragged={isDragged}
                        />
                      );
                    })}
                  </AnimatePresence>
                </LayoutGroup>
              </Slider>
            );
          })}
        </div>
      </div>

      {tabs.map((tab) => {
        if (!tab.activeGroup) return null;
        return (
          <div className="h-16 flex justify-center items-center gap-x-[10px] text-2xl  rounded-full mt-14">
            <LayoutGroup id="eachTab">
              {tab.tabInfo.map((data, index) => {
                return (
                  <EachTab
                    group={tab.tabGroup}
                    name={data.name}
                    activeIndexCard={activeIndexCard}
                    setActiveIndexCard={setActiveIndexCard}
                    index={index}
                  />
                );
              })}
            </LayoutGroup>
          </div>
        );
      })}
      {tabs.map((tab) => {
        if (!tab.activeGroup) return null;
        return (
          <div className="relative w-full h-[120px] flex justify-center items-start mt-0">
            <AnimatePresence>
              {tab.tabInfo.map((data, index) => {
                return (
                  <TabInfo
                    name={data.name}
                    titleOfHonor={data.titleOfHonor}
                    desc={data.desc}
                    index={index}
                    activeIndexCard={activeIndexCard}
                    tabGroup={tab.tabGroup}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
