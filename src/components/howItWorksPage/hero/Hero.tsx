import {
  motion,
  useAnimation,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import throttle from "lodash/throttle";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { cityAnim, cityMaskAnim, heroAnim } from "../../../utils/animation";

const Hero: React.FC = () => {
  const [anim, setAnim] = useState("hidden");
  // const { scrollY } = useViewportScroll();
  // const topT = useTransform(scrollY, (y) => {
  //   if (y < 2000) {
  //     return y / 5;
  //   }
  //   return 400;
  // });

  const topTransformWheel = (evt: any) => {
    if (window.scrollY < 15) {
      evt.preventDefault();
      let direction = evt.detail < 0 || evt.wheelDelta > 0 ? 1 : -1;
      if (direction > 0) {
        window.scrollTo({
          top: window.scrollY - 20,
          left: 0,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: window.scrollY + 20,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollHandler = () => {
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
    const throtteledTopScroll = throttle((e) => topTransformWheel(e), 10);
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("mousewheel", throtteledTopScroll, {
      passive: false,
    });
    window.addEventListener("DOMMouseScroll", throtteledTopScroll, {
      passive: false,
    });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("mousewheel", topTransformWheel);
      window.removeEventListener("DOMMouseScroll", topTransformWheel);
    };
  }, []);

  return (
    <>
      <motion.div
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
                className="absolute z-20 left-[48.2%] top-[70.5%] w-[10%]"
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
                className="absolute w-full h-full z-0 scale-105"
              >
                <Image src={"/img/art/mask.png"} layout="fill" />
              </motion.span>
            </div>
          </motion.span>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
