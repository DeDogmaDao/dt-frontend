import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Slider: React.FC = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const totalScrollWidth =
      carouselRef.current!.scrollWidth - carouselRef.current!.offsetWidth;
  }, []);
  return (
    <motion.div ref={carouselRef} className="carousel overflow-hidden">
      <motion.div
        className="inner-carousel flex bg-red-300"
        drag="x"
        dragConstraints={{ right: 0 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
