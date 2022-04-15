import { motion, PanInfo } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { roadMapData } from "../../store/allData";
import { pageAnimation } from "../../utils/animation";
import ProgressLine from "./ProgressLine";
import Road from "./Road";

const RoadMapPage: React.FC = () => {
  const roadmapContainerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  const dragHandler = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y < 0 && activeSection < 2) {
      setActiveSection((prevState) => prevState + 1);
    }
    if (info.offset.y > 0 && activeSection > 0) {
      setActiveSection((prevState) => prevState - 1);
    }
  };

  const wheelHandler = (evt: any) => {
    let direction = evt.detail < 0 || evt.wheelDelta > 0 ? 1 : -1;
    if (direction < 0 && activeSection < 2) {
      setActiveSection((prevState) => prevState + 1);
    }
    if (direction > 0 && activeSection > 0) {
      setActiveSection((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("mousewheel", wheelHandler, { passive: false });
    window.addEventListener("DOMMouseScroll", wheelHandler, {
      passive: false,
    });
    return () => {
      window.removeEventListener("mousewheel", wheelHandler);
      window.removeEventListener("DOMMouseScroll", wheelHandler);
    };
  }, [activeSection]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="out"
      variants={pageAnimation}
    >
      <div
        className="h-screen w-full flex flex-col items-center relative"
        ref={roadmapContainerRef}
      >
        <motion.div
          drag="y"
          onDragEnd={(event, info) => dragHandler(event, info)}
          dragConstraints={roadmapContainerRef}
          dragElastic={0.5}
          dragTransition={{ power: 10 }}
          className="flex flex-col justify-start items-center w-full h-full relative"
        >
          {roadMapData.map((data, index) => {
            return (
              <Road road={data} index={index} activeSection={activeSection} />
            );
          })}
        </motion.div>
        <ProgressLine activeSection={activeSection} />
      </div>
    </motion.div>
  );
};

export default RoadMapPage;
