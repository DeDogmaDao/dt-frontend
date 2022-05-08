import { AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { allTabs } from "../../../store/allData";
import { activeIndexCardType } from "../../../types/allTypes";
import Card from "./Card";
import EachGroup from "./EachGroup";
import EachTab from "./EachTab";
import Slider from "./Slider";
import TabInfo from "./TabInfo";
import tabBg from "../../images/bg/sec3.png";

const Tabs: React.FC = () => {
  const [innerWidth, setInnerWidth] = useState(0);

  useLayoutEffect(() => {
    const innerwidthHandler = () => {
      setInnerWidth(window.innerWidth);
    };
    innerwidthHandler();
    window.addEventListener("resize", innerwidthHandler);

    return () => {
      window.removeEventListener("resize", innerwidthHandler);
    };
  }, []);

  const [tabs, setTabs] = useState(allTabs);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeIndexCard, setActiveIndexCard] = useState<activeIndexCardType>({
    gods: [1, 2, 3],
    humans: [3, 4, 5],
  });
  const [isDragged, setIsDragged] = useState(false);

  return (
    <div
      className="flex flex-col justify-between items-center h-full w-full relative z-100"
      id="cards"
    >
      <div className="absolute top-0 left-0 w-full h-[7.5rem] bg-gradient-to-b from-bodymain to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-[7.5rem] bg-gradient-to-t from-bodymain to-transparent z-[1]" />
      <span className="absolute h-full aspect-[1440/1017]">
        <span className="w-full h-full inner-image-no-max-width">
          <Image
            alt="dedogmadao background"
            src={tabBg}
            layout="fill"
            quality={100}
            placeholder="blur"
          />
        </span>
      </span>
      <h2 className="z-10 mt-14 ssm:mt-20 sm:mt-32 lg:mt-40 text-[1.25rem] ssm:text-[1.75rem] sm:text-[2.375rem] font-bold sm:font-bold">
        <span className="text-primary-500">NFT</span> Card Collection
      </h2>
      <div className=" flex flex-col ssm:flex-row gap-y-8 sm:gap-y-0 justify-center items-center gap-x-8 md:gap-x-16 text-2xl mt-14">
        <LayoutGroup id="tabGroup">
          {tabs.map((data) => {
            return (
              <EachGroup
                key={data.tabGroup}
                tabs={tabs}
                name={data.tabGroup}
                activeGroup={data.activeGroup}
                setTabs={setTabs}
              />
            );
          })}
        </LayoutGroup>
      </div>
      <div className="w-full h-full relative mt-8 md:mt-10 lg:mt-10 slider-container">
        <div className="w-full h-full flex justify-center items-center">
          {tabs.map((tab) => {
            if (!tab.activeGroup) return null;
            return (
              <Slider
                key={tab.tabGroup}
                tab={tab}
                setIsDragged={setIsDragged}
                tabGroup={tab.tabGroup}
                setActiveIndexCard={setActiveIndexCard}
                activeIndexCard={activeIndexCard}
                dataQuantity={tab.tabInfo.length}
              >
                <LayoutGroup>
                  <AnimatePresence>
                    {tab.tabInfo.map((data, index) => {
                      let show = false;
                      activeIndexCard[tab.tabGroup].forEach((item) => {
                        if (index === item) {
                          show = true;
                        }
                      });
                      if (!show) return null;
                      return (
                        <Card
                          key={data.name + index}
                          tabGroup={tab.tabGroup}
                          setActiveIndexCard={setActiveIndexCard}
                          activeIndexCard={activeIndexCard}
                          cardRef={cardRef}
                          data={data}
                          index={index}
                          tabInfo={tab.tabInfo}
                          isDragged={isDragged}
                          innerWidth={innerWidth}
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
          <div
            key={tab.tabGroup}
            className={`h-16 flex justify-center items-center
          xl:-ml-44 xl:mt-20 gap-x-[.625rem] text-2xl  rounded-full mt-28`}
          >
            <LayoutGroup id="eachTab">
              {tab.tabInfo.map((data, index) => {
                return (
                  <EachTab
                    key={data.name + index}
                    group={tab.tabGroup}
                    name={data.name}
                    activeIndexCard={activeIndexCard}
                    setActiveIndexCard={setActiveIndexCard}
                    index={index}
                    dataQuantity={tab.tabInfo.length}
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
          <div
            key={tab.tabGroup}
            className="relative xl:hidden w-full h-[34.375rem] sm:h-[21.875rem] md:h-[18.75rem] lg:h-[15.625rem] flex justify-center items-start mt-0"
          >
            {tab.tabInfo.map((data, index) => {
              return (
                <TabInfo
                  key={data.name + index}
                  name={data.name}
                  titleOfHonor={data.titleOfHonor}
                  desc={data.desc}
                  index={index}
                  activeIndexCard={activeIndexCard}
                  tabGroup={tab.tabGroup}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
