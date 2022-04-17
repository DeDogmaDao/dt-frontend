import {
  motion,
  useAnimation,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { cityAnim, cityMaskAnim, heroAnim } from "../../../utils/animation";

const speed = 1000;

const Hero: React.FC = () => {
  const [innerWidth, setInnerWidth] = useState(1000);
  const [anim, setAnim] = useState("hidden");
  useLayoutEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);
  const { scrollY, scrollYProgress } = useViewportScroll();
  // (-innerWidth * (1 + y / speed - 1)) / 2
  const scaleT = useTransform(scrollY, [0, 100, 200, 300], [1, 1.1, 1.2, 1.3]);
  const scaleS = useSpring(scaleT, { damping: 20 });
  const topT = useTransform(scrollY, [0, 100, 200, 300], [0, 100, 200, 300]);
  const topS = useSpring(topT, { damping: 20 });

  const topTransformWheel = () => {
    if (window.scrollY > 1) {
      setAnim((prevState) => {
        if (prevState === "visible") {
          return prevState;
        }
        return "visible";
      });
    } else {
      setAnim((prevState) => {
        if (prevState === "hidden") {
          return prevState;
        }
        return "hidden";
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", topTransformWheel);
    window.addEventListener("mousewheel", topTransformWheel);
    window.addEventListener("DOMMouseScroll", topTransformWheel);

    return () => {
      window.removeEventListener("mousewheel", topTransformWheel);
      window.removeEventListener("DOMMouseScroll", topTransformWheel);
      window.removeEventListener("scroll", topTransformWheel);
    };
  }, []);

  const controls = useAnimation();

  useEffect(() => {
    console.log(anim);
    controls.start(anim);
  }, [setAnim]);
  return (
    <>
      {innerWidth !== 0 && (
        <motion.div
          style={{ marginTop: topT }}
          className=" flex justify-center items-center relative w-[100vw] h-[56.26vw] mx-auto overflow-hidden hero-container"
        >
          <div className="portal-and-flame-and-hero w-full h-full relative z-20 ">
            <motion.span
              className="absolute w-full h-full origin-bottom"
              initial="hidden"
              animate={anim}
              variants={heroAnim}
            >
              <div className="w-full h-full relative">
                <Image
                  src={"/img/art/portal.png"}
                  layout="fill"
                  className="z-10"
                />

                <motion.img
                  className="absolute z-20 left-[47%] top-[71%] w-[15%]"
                  src={"/img/art/cape.gif"}
                />
                <motion.span
                  className="absolute w-full h-full z-0"
                  initial="hidden"
                  animate={anim}
                  variants={cityAnim}
                >
                  <Image src={"/img/art/city.png"} layout="fill" />
                </motion.span>
                <motion.span
                                  initial="hidden"
                                  animate={anim}
                                  variants={cityMaskAnim}
                className="absolute w-full h-full z-0 scale-105">
                  <Image src={"/img/art/mask.png"} layout="fill" />
                </motion.span>
              </div>
            </motion.span>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Hero;
