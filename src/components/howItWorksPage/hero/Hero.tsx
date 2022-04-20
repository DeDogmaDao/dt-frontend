import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import throttle from "lodash/throttle";
import Image from "next/image";
import {
  MouseEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { cityAnim, cityMaskAnim, heroAnim } from "../../../utils/animation";
import { UAParser } from "ua-parser-js";
import { dimensionType } from "../../../types/allTypes";

const Hero: React.FC = () => {
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState<dimensionType>({
    width: 0,
    height: 0,
  });
  useLayoutEffect(() => {
    setDimension({
      width: heroContainerRef.current!.offsetWidth,
      height: heroContainerRef.current!.offsetHeight,
    });
  }, []);
  const uaParser = new UAParser();
  const [anim, setAnim] = useState("hidden");

  const xCord = useMotionValue(0);
  const yCord = useMotionValue(0);
  const xTrans = useTransform(
    xCord,
    [0, dimension.width / 2, dimension.width],
    [50, 0, -50]
  );
  const yTrans = useTransform(
    yCord,
    [0, dimension.height / 2, dimension.height],
    [50, 0, -50]
  );
  const mouseMoveHandler = (event: MouseEvent) => {
    xCord.set(event.pageX);
    yCord.set(event.pageY);
  };

  const springX = useSpring(xTrans, { stiffness: 50 });
  const springY = useSpring(yTrans, { stiffness: 50 });

  const leftFireRef = useRef<HTMLVideoElement>(null);
  const rightFireRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (uaParser.getOS().name === "Mac OS") {
      leftFireRef.current!.style.filter = "brightness(91.5%)";
      rightFireRef.current!.style.filter = "brightness(91.5%)";
    }
  }, []);

  return (
    <>
      <motion.div
        ref={heroContainerRef}
        onMouseMove={mouseMoveHandler}
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
                style={{ x: springX, y: springY }}
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
                ref={leftFireRef}
                loop
                autoPlay
                muted
                playsInline
                className="absolute border-none outline-none z-20 w-[9.429%] h-[20.114%] left-[14.576%] top-[57.828%]"
              >
                <source src={"/img/art/left-fire.mp4"} type="video/mp4" />
              </motion.video>
              <motion.video
                ref={rightFireRef}
                loop
                autoPlay
                muted
                playsInline
                className="absolute border-none outline-none z-20 w-[9.429%] h-[20.114%] left-[74.844%] top-[57.828%]"
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
