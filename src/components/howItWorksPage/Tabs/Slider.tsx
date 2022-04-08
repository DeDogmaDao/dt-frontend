import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Slider: React.FC = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const totalScrollWidth =
      carouselRef.current!.scrollWidth - carouselRef.current!.offsetWidth;
    setWidth(totalScrollWidth);
  }, []);
  return (
    <motion.div className="mx-[20%] ">
      <motion.div ref={carouselRef} className="carousel overflow-hidden mx-auto bg-blue-300 ">
        <motion.div
          className="inner-carousel flex bg-red-300 !scroll-p-5 !scroll-m-5" 
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
            dragElastic={0.1}
            >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Slider;
