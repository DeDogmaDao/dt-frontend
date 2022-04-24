import { motion, useViewportScroll } from "framer-motion";
import { RefObject, useEffect, useState } from "react";
import BackToTopSVG from "../../svgs/backtotop.svg";
interface props {
  containerRef: RefObject<HTMLDivElement>;
}
const BackToTop: React.FC<props> = ({ containerRef }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  console.log(scrollHeight + " __ " + scrollY);

  useEffect(() => {
    setScrollHeight(containerRef.current!.scrollHeight - 300);
    const resizeHandler = () => {
      setScrollHeight(containerRef.current!.scrollHeight - 300);
    };
    const toTopScrollHandler = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", toTopScrollHandler);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("scroll", toTopScrollHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  
  return (
    <>
      {scrollY / scrollHeight > 0.8 && (
        <motion.button
          className="group z-[200] flex flex-col justify-center items-center w-[4.6875rem] aspect-[75/84]
       fixed right-[4.875rem] bottom-[6.375rem] hover:text-primary-500 duration-200 hover:scale-105 active:scale-95
        will-change-transform"
        >
          <span
            className=" will-change-transform stroke-primary-500 w-[3.125rem] aspect-[5/6] fill-transparent
        group-hover:stroke-secondary-200 duration-200"
          >
            <BackToTopSVG />
          </span>
          <div className="text-sm font-normal">Back to Top</div>
        </motion.button>
      )}
    </>
  );
};

export default BackToTop;
