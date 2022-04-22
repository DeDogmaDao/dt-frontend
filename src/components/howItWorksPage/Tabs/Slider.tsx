
import { motion, PanInfo, useAnimation, useElementScroll } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { activeIndexCardType } from "../../../types/allTypes";
import { tabFrameAni } from "../../../utils/animation";
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

  //   const [width, setWidth] = useState(0);
  //   useEffect(() => {
  //     const totalScrollWidth =
  //       carouselRef.current!.scrollWidth - carouselRef.current!.offsetWidth;
  //     setWidth(carouselRef.current!.offsetWidth);
  //     console.log(carouselRef.current!.children[0].children[0].clientWidth);
  //   }, []);

  const dragHandler = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 0) {
      setActiveIndexCard((prevState) => {
        if (prevState[tabGroup] === 0) return { ...prevState };
        return { ...prevState, [tabGroup]: prevState[tabGroup] - 1 };
      });
    }
    if (info.offset.x < 0 && info.offset.y > -300) {
      setActiveIndexCard((prevState) => {
        if (prevState[tabGroup] === dataQuantity - 1) return { ...prevState };
        return { ...prevState, [tabGroup]: prevState[tabGroup] + 1 };
      });
    }
    setIsDragged(false);
  };

  const leftClickHandler = () => {
    setActiveIndexCard((prevState) => {
      if (prevState[tabGroup] === 0) return { ...prevState };
      return {
        ...prevState,
        [tabGroup]: prevState[tabGroup] - 1,
      };
    });
  };
  const rightClickHandler = () => {
    setActiveIndexCard((prevState) => {
      if (prevState[tabGroup] === dataQuantity - 1) return { ...prevState };
      return {
        ...prevState,
        [tabGroup]: prevState[tabGroup] + 1,
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
          className={`inner-carousel flex relative h-[26.25rem] mt-[4%]`}
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

      <motion.div
        className="absolute top-[58%] left-1/2 ml-[-180px] z-50 pointer-events-none select-none
      w-[360px] aspect-[444/320]"
      >
        <Image layout="fill" src="/img/cyc/frame.png"  />
      </motion.div>
      {/* <div className="absolute top-[55%] left-1/2 ml-[-9.375rem] z-0 pointer-events-none select-none">
        <Image
          width="300"
          height="250"
          layout="intrinsic"
          src="/img/cyc/tab-portal.png"
        />
      </div>
      <div className="absolute top-[35%]  left-1/2 ml-[-7.625rem] z-20 pointer-events-none select-none">
        <Image
          width="244"
          height="320"
          layout="intrinsic"
          src="/img/cyc/tab-portal2.png"
        />
      </div> */}
    </motion.div>
  );
};

export default Slider;
