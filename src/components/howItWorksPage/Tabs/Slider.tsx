import { motion, useElementScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Slider: React.FC = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  //   const [width, setWidth] = useState(0);
  //   useEffect(() => {
  //     const totalScrollWidth =
  //       carouselRef.current!.scrollWidth - carouselRef.current!.offsetWidth;
  //     setWidth(carouselRef.current!.offsetWidth);
  //     console.log(carouselRef.current!.children[0].children[0].clientWidth);
  //   }, []);
  return (
    <motion.div className="">
      <motion.div
        ref={carouselRef}
        className="carousel overflow-hidden mx-auto bg-blue-300 w-[750px]"
      >
        <motion.div
          className="inner-carousel flex bg-red-300 gap-x-5"
          drag="x"
          dragConstraints={{ right: 0, left: -0 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
          dragMomentum={true}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Slider;
