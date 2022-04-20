import { motion } from "framer-motion";
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
    // if (window.scrollY < 15) {
    //   evt.preventDefault();
    //   let direction = evt.detail < 0 || evt.wheelDelta > 0 ? 1 : -1;
    //   if (direction > 0) {
    //     window.scrollTo({
    //       top: window.scrollY - 20,
    //       left: 0,
    //       behavior: "smooth",
    //     });
    //   } else {
    //     window.scrollTo({
    //       top: window.scrollY + 20,
    //       left: 0,
    //       behavior: "smooth",
    //     });
    //   }
    // }
  };

  const scrollHandler = () => {
    if (window.scrollY < 450) {
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
    }
  };

  useEffect(() => {
    const throtteledTopScroll = topTransformWheel;
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("mousewheel", throtteledTopScroll, {
      passive: false,
    });
    window.addEventListener("DOMMouseScroll", throtteledTopScroll, {
      passive: false,
    });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("mousewheel", throtteledTopScroll);
      window.removeEventListener("DOMMouseScroll", throtteledTopScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        className=" flex justify-center items-center relative bg-[#171181]
       w-[100vw] h-[100vh] ssm:h-[110vh] sm:h-[90vh] md:h-[100vh] lg:h-[56.26vw] mx-auto overflow-hidden hero-container"
      >
        <div className="portal-and-flame-and-hero w-full h-full relative z-20 ">
          <motion.span
            className="absolute w-full h-full origin-bottom"
            initial="hidden"
            animate={anim}
            variants={heroAnim}
          >
            <div
              className=" ml-[-100%] sm:ml-[-25%] lg:ml-auto
             h-full
              w-[300%] sm:w-[150%] lg:w-full
                relative flex justify-center items-center"
            >
              <Image
                src={"/img/art/portal.png"}
                layout="fill"
                className="z-10"
                priority={true}
                quality={100}
              />

              <motion.img
                className="absolute z-20 left-[48.5%] top-[71%] w-[10%] h-[15%]"
                src={"/img/art/cape.gif"}
              />
              <motion.span
                className="absolute w-full h-full z-0"
                initial="hidden"
                animate={anim}
                variants={cityAnim}
              >
                <Image src={"/img/art/city.png"} layout="fill" quality={100} />
              </motion.span>
              <motion.span
                initial="hidden"
                animate={anim}
                variants={cityMaskAnim}
                className="absolute w-full h-full z-0 scale-105"
              >
                <Image src={"/img/art/mask.png"} layout="fill" />
              </motion.span>

              <motion.video
                loop
                autoPlay
                muted
                playsInline
                className="absolute opacity-90 border-none outline-none z-20 w-[9.429%] h-[20.114%] left-[14.576%] top-[57.828%]"
              >
                <source src={"/img/art/left-fire.mp4"} type="video/mp4" />
              </motion.video>
              <motion.video
                loop
                autoPlay
                muted
                playsInline
                className="absolute opacity-90 border-none outline-none z-20 w-[9.429%] h-[20.114%] left-[74.844%] top-[57.828%]"
              >
                <source src={"/img/art/right-fire.mp4"} type="video/mp4" />
              </motion.video>
            </div>
          </motion.span>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
