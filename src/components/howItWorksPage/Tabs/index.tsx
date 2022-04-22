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
      className="flex flex-col justify-between items-center h-full w-full relative z-100"
      id="cards"
    >
      <span className="absolute h-full aspect-[1440/1097]">
        <span className="w-full h-full inner-image-no-max-width">
          <Image src={"/img/bg/sec3.png"} layout="fill" quality={100}  />
        </span>
      </span>
      <h3 className="z-10 mt-14 ssm:mt-20 sm:mt-32 lg:mt-40 text-[1.25rem] ssm:text-[1.75rem] sm:text-[2.375rem] font-bold sm:font-bold">
        Choose your <span className="text-primary-500">Card</span>
      </h3>
      <div className=" flex flex-col ssm:flex-row gap-y-8 sm:gap-y-0 justify-center items-center gap-x-8 md:gap-x-16 text-2xl mt-14">
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
          <div className="h-16 flex justify-center items-center gap-x-[.625rem] text-2xl  rounded-full mt-28">
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
          <div className="relative w-full h-[34.375rem] sm:h-[21.875rem] md:h-[18.75rem] lg:h-[15.625rem] flex justify-center items-start mt-0">
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
