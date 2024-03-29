import { motion, PanInfo, useAnimation } from "framer-motion";
import Image from "next/image";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { AngleRightSVG } from "../../../store/svg";
import { activeIndexCardType, tabsType } from "../../../types/allTypes";
import { cardIndexHandler } from "../../../utils/util";
import TabInfo from "./TabInfo";

interface props {
  setIsDragged: Dispatch<SetStateAction<boolean>>;
  setActiveIndexCard: Dispatch<SetStateAction<activeIndexCardType>>;
  activeIndexCard: activeIndexCardType;
  tabGroup: string;
  dataQuantity: number;
  tab: tabsType;
  innerWidth: number;
  children:React.ReactNode;
}
const Slider: React.FC<props> = ({
  children,
  setIsDragged,
  setActiveIndexCard,
  tabGroup,
  activeIndexCard,
  dataQuantity,
  tab,
  innerWidth,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const dragHandler = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 0) {
      setActiveIndexCard((prevState) => {
        return {
          ...prevState,
          [tabGroup]: cardIndexHandler(prevState[tabGroup][0], dataQuantity),
        };
      });
    }
    if (info.offset.x < 0 && info.offset.y > -300) {
      setActiveIndexCard((prevState) => {
        return {
          ...prevState,
          [tabGroup]: cardIndexHandler(prevState[tabGroup][2], dataQuantity),
        };
      });
    }
    setTimeout(() => {
      setIsDragged(false);
    }, 100);
  };

  const leftClickHandler = () => {
    setActiveIndexCard((prevState) => {
      return {
        ...prevState,
        [tabGroup]: cardIndexHandler(prevState[tabGroup][0], dataQuantity),
      };
    });
  };
  const rightClickHandler = () => {
    setActiveIndexCard((prevState) => {
      return {
        ...prevState,
        [tabGroup]: cardIndexHandler(prevState[tabGroup][2], dataQuantity),
      };
    });
  };

  const frameControls = useAnimation();
  useEffect(() => {
    frameControls.start("visible");
  }, [activeIndexCard]);

  return (
    <motion.div
      className="relative w-[100%] sm:w-[80%] md:w-[70%] xl:w-[90%] flex justify-center 
     xl:justify-between xl:gap-x-10 px-20"
    >
      <motion.div
        ref={carouselRef}
        className="carousel  ml-0 w-full  min-w-[43.75rem] xl:min-w-[36rem] xl:w-[36rem] z-10 "
      >
        <motion.div
          onDragEnd={(event, info) => dragHandler(event, info)}
          onDragStart={() => setIsDragged(true)}
          className={`inner-carousel flex relative xl:w-[36rem] overflow-hidden h-[28.75rem] mt-[2%]`}
          drag="x"
          dragConstraints={{ right: 0, left: -0 }}
          dragElastic={0.03}
        >
          {children}
        </motion.div>
      </motion.div>
      <motion.div className="w-1/2 hidden xl:flex ">
        {
          <div className="relative w-full h-full
           flex justify-center items-start mt-10">
            {innerWidth !== 0 && tab.tabInfo.map((data, index) => {
              return (
                <TabInfo
                  key={data.name + index}
                  name={data.name}
                  titleOfHonor={data.titleOfHonor}
                  desc={data.desc}
                  index={index}
                  activeIndexCard={activeIndexCard}
                  tabGroup={tab.tabGroup}
                  innerWidth={innerWidth}
                />
              );
            })}
          </div>
        }
      </motion.div>

      <button
        className="absolute p-2 left-0 top-1/2 -mt-8 text-5xl scale-x-[-1] text-white ssm:text-neutral-400 z-60"
        onClick={leftClickHandler}
      >
        <AngleRightSVG
          stroke="#66666A"
          width={21}
          height={45}
          fill="none"
        />
      </button>
      <button
        className="absolute p-2 right-0 top-1/2 -mt-8 text-5xl  text-white ssm:text-neutral-400 z-60"
        onClick={rightClickHandler}
      >
        <AngleRightSVG
          stroke="#66666A"
          width={21}
          height={45}
          fill="none"
        />
      </button>

      {tabGroup === "gods" && (
        <motion.div
          className="absolute top-[67%] left-1/2 xl:left-[30.4rem] ml-[-11.25rem] z-50 pointer-events-none select-none
w-[22.5rem] aspect-[444/320]"
        >
          <Image
            alt="dedogmadao frame"
            layout="fill"
            src="/img/cyc/frame.png"
            quality={75}
            loading="eager"
          />
        </motion.div>
      )}
      {tabGroup === "humans" && (
        <>
          <motion.div
            className="absolute top-[62%] left-1/2 xl:left-[31rem] ml-[-10.4rem] z-0 pointer-events-none select-none
w-[20rem] aspect-[444/320] ]"
          >
            <Image
              alt="dedogmadao portal"
              layout="fill"
              src="/img/cyc/tab-portal.png"
              quality={75}
              loading="eager"
            />
          </motion.div>
          <motion.div
            className="absolute top-[40.7%] left-1/2 xl:left-[31.6rem] ml-[-9.1875rem] z-50 pointer-events-none select-none
w-[16.4rem] aspect-[289/340] bg-red-50/0"
          >
            <Image
              alt="dedogmadao portal"
              layout="fill"
              src="/img/cyc/tab-portal2.png"
              quality={90}
              loading="eager"
            />
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default Slider;
