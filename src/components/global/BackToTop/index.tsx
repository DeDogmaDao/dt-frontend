import { AnimatePresence, motion } from "framer-motion";
import { RefObject, useEffect, useState } from "react";
import { backToTopAni } from "../../../utils/animation";
import BackToTopSVG from "../../svgs/backtotop.svg";
interface props {
  containerRef: RefObject<HTMLDivElement>;
}
const BackToTop: React.FC<props> = ({ containerRef }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

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

  const backToTopClickHandler = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };
  return (
    <>
      <AnimatePresence>
        {scrollY / scrollHeight > 0.8 && (
          <motion.button
            onClick={backToTopClickHandler}
            initial="hidden"
            animate="visible"
            exit="out"
            variants={backToTopAni}
            className="group z-[200] flex flex-col justify-center items-center w-[4.6875rem] h-[4.6875rem] md:h-[5.25rem]
       fixed right-[4.875rem] bottom-[6.375rem] md:hover:text-primary-500 duration-200 hover:!scale-105 active:!scale-95
        will-change-transform rounded-full bg-primary-500 md:bg-transparent"
          >
            <span
              className=" will-change-transform  stroke-black md:stroke-primary-500 w-[3.125rem] h-[3.125rem]  md:h-[3.75rem] fill-transparent
        md:group-hover:stroke-secondary-200 duration-200"
            >
              <BackToTopSVG />
            </span>
            <div className="text-sm font-normal hidden md:block">
              Back to Top
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackToTop;
