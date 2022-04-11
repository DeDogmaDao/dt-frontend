import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, PanInfo, useElementScroll } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { activeIndexCardType } from "../../../types/allTypes";

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

  return (
    <motion.div className="relative">
      <motion.div
        ref={carouselRef}
        className="carousel overflow-hidden mx-auto w-[900px] mt-28 "
      >
        <motion.div
          onDragEnd={(event, info) => dragHandler(event, info)}
          onDragStart={()=>setIsDragged(true)}
          className={`inner-carousel flex relative h-[465px]`}
          drag="x"
          dragConstraints={{ right: 0, left: -0 }}
          dragElastic={0.03}
        >
          {children}
        </motion.div>
      </motion.div>

      <button
        className="absolute p-2 left-[14.5%] top-1/2 -mt-8 text-5xl text-neutral-400"
        onClick={leftClickHandler}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="absolute p-2 right-[14.5%] top-1/2 -mt-8 text-5xl scale-x-[-1] text-neutral-400"
        onClick={rightClickHandler}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </motion.div>
  );
};

export default Slider;
