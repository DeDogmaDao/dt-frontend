import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { cityAnim } from "../../../utils/animation";

interface props {
  springX: MotionValue;
  springY: MotionValue;
  portalLoading: number;
  maskOpacity: MotionValue;
  anim: string;
}
const City: React.FC<props> = ({
  maskOpacity,
  portalLoading,
  springX,
  springY,
  anim,
}) => {
  return (
    <>
      <motion.span
        style={{
          x: springX,
          y: springY,
          visibility: portalLoading === 4 ? "visible" : "hidden",
        }}
        className="absolute w-[48.567%] h-[85.121%] z-0 will-change-transform"
        initial="hidden"
        animate={anim}
        variants={cityAnim}
      >
        <Image src={"/img/art/city.png"} layout="fill" quality={75} />
      </motion.span>
      <motion.span
        style={{
          opacity: maskOpacity,
          visibility: portalLoading === 4 ? "visible" : "hidden",
        }}
        className="absolute w-full h-full z-0 scale-105 will-change-transform"
      >
        <Image src={"/img/art/mask.png"} layout="fill" />
      </motion.span>
    </>
  );
};

export default City;
