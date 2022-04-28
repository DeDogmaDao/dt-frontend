import { motion } from "framer-motion";
import { RefObject } from "react";

interface props {
  portalLoading: number;
  leftFireRef: RefObject<HTMLVideoElement>;
  rightFireRef: RefObject<HTMLVideoElement>;
}
const FireCape: React.FC<props> = ({
  portalLoading,
  leftFireRef,
  rightFireRef,
}) => {
  return (
    <>
      <motion.img
      alt="dedogmadao cape gif" 
        style={{ visibility: portalLoading === 4 ? "visible" : "hidden" }}
        className="absolute z-20 left-[48.5%] top-[71%] w-[10%] h-[15%] will-change-transform"
        src={"/img/art/cape.gif"}
      />

      <motion.video
        style={{ visibility: portalLoading === 4 ? "visible" : "hidden" }}
        ref={leftFireRef}
        loop
        autoPlay
        muted
        playsInline
        className="absolute hidden sm:block border-none outline-none z-20 w-[9.429%] h-[20.114%] left-[14.576%] top-[57.828%] will-change-transform"
      >
        <source src={"/img/art/left-fire.mp4"} type="video/mp4" />
      </motion.video>
      <motion.video
        style={{ visibility: portalLoading === 4 ? "visible" : "hidden" }}
        ref={rightFireRef}
        loop
        autoPlay
        muted
        playsInline
        className="absolute hidden sm:block border-none outline-none z-20 w-[9.429%] h-[20.114%] left-[74.844%] top-[57.828%] will-change-transform"
      >
        <source src={"/img/art/right-fire.mp4"} type="video/mp4" />
      </motion.video>
    </>
  );
};

export default FireCape;
