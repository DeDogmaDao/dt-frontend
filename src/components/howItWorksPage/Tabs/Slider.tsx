import { motion, PanInfo, useAnimation } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { activeIndexCardType } from "../../../types/allTypes";
import { cardIndexHandler } from "../../../utils/util";
import AngleRightSVG from "../../svgs/rightangle.svg";

interface props {
  setIsDragged: Dispatch<SetStateAction<boolean>>;
  setActiveIndexCard: Dispatch<SetStateAction<activeIndexCardType>>;
  activeIndexCard: activeIndexCardType;
  tabGroup: string;
  dataQuantity: number;
}
const Slider: React.FC<props> = ({
  children,
  setIsDragged,
  setActiveIndexCard,
  tabGroup,
  activeIndexCard,
  dataQuantity,
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
    setIsDragged(false);
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
    <motion.div className="relative w-[100%] sm:w-[80%] md:w-[70%] flex justify-center">
      <motion.div
        ref={carouselRef}
        className="carousel overflow-hidden mx-auto min-w-[43.75rem] w-full  z-10 "
      >
        <motion.div
          onDragEnd={(event, info) => dragHandler(event, info)}
          onDragStart={() => setIsDragged(true)}
          className={`inner-carousel flex relative h-[29.25rem] mt-[4%]`}
          drag="x"
          dragConstraints={{ right: 0, left: -0 }}
          dragElastic={0.03}
        >
          {children}
        </motion.div>
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
          style={{ marginTop: 22 }}
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
          style={{ marginTop: 22 }}
        />
      </button>

      {tabGroup === "gods" && (
        <motion.div
          className="absolute top-[67%] left-1/2 ml-[-11.25rem] z-50 pointer-events-none select-none
w-[22.5rem] aspect-[444/320]"
        >
          <Image
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
            className="absolute top-[62%] left-1/2 ml-[-11.25rem] z-0 pointer-events-none select-none
w-[22.5rem] aspect-[444/320] ]"
          >
            <Image
              layout="fill"
              src="/img/cyc/tab-portal.png"
              quality={75}
              loading="eager"
            />
          </motion.div>
          <motion.div
            className="absolute top-[40.5%] left-1/2 ml-[-9.1875rem] z-50 pointer-events-none select-none
w-[18.375rem] aspect-[289/340]"
          >
            <Image
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
