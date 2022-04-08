import { motion, PanInfo, useElementScroll } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { activeIndexCardType } from "../../../types/allTypes";

interface props {
    setActiveIndexCard:Dispatch<SetStateAction<activeIndexCardType>>;
}
const Slider: React.FC<props> = ({ children,setActiveIndexCard }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  //   const [width, setWidth] = useState(0);
  //   useEffect(() => {
  //     const totalScrollWidth =
  //       carouselRef.current!.scrollWidth - carouselRef.current!.offsetWidth;
  //     setWidth(carouselRef.current!.offsetWidth);
  //     console.log(carouselRef.current!.children[0].children[0].clientWidth);
  //   }, []);

  const dragHandler =  (event:MouseEvent | TouchEvent | PointerEvent,info:PanInfo) => {
      if(info.offset.x > 0){
          console.log(console.log(children));
          setActiveIndexCard(prevSTate=>({...prevSTate}))
      }
  }
  return (
    <motion.div className="">
      <motion.div
        ref={carouselRef}
        className="carousel overflow-hidden mx-auto bg-blue-300 w-[750px]"
      >
        <motion.div
        onDragStart={(event,info)=>dragHandler(event,info)}
          className="inner-carousel flex bg-red-300 gap-x-5"
          drag="x"
          dragConstraints={{ right: 0, left: -0 }}
          dragElastic={0.03}
          dragMomentum={true}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Slider;
