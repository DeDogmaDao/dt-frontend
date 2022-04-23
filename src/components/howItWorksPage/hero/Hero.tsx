import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import throttle from "lodash/throttle";
import Image from "next/image";
import {
  MouseEvent,
  TouchEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { heroAnim } from "../../../utils/animation";
import { UAParser } from "ua-parser-js";
import { dimensionType } from "../../../types/allTypes";
import LogoType from "./LogoType";
import Portal from "./Portal";
import City from "./City";
import FireCape from "./FireCape";

const Hero: React.FC = () => {
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const [portalLoading, setPortalLoading] = useState(0);
  const [dimension, setDimension] = useState<dimensionType>({
    width: 0,
    height: 0,
  });
  useLayoutEffect(() => {
    setDimension({
      width: heroContainerRef.current!.offsetWidth,
      height: heroContainerRef.current!.offsetHeight,
    });
    const resizeHandlerDim = () => {
      setDimension({
        width: heroContainerRef.current!.offsetWidth,
        height: heroContainerRef.current!.offsetHeight,
      });
    }
    window.addEventListener("resize",resizeHandlerDim);

    return () => {
      window.removeEventListener("resize", resizeHandlerDim)
    }
  }, []);
  const uaParser = new UAParser();
  const [anim, setAnim] = useState("hidden");

  const xCord = useMotionValue(200);
  const yCord = useMotionValue(200);
  const maskOpacity = useMotionValue(0.7);
  const xTrans = useTransform(
    xCord,
    [0, dimension.width / 2, dimension.width],
    [100, 0, -100]
  );
  const yTrans = useTransform(
    yCord,
    [0, dimension.height / 2, dimension.height],
    [50, 0, -50]
  );
  const springX = useSpring(xTrans, { stiffness: 50 });
  const springY = useSpring(yTrans, { stiffness: 50 });

  const mouseMoveHandler = (event: MouseEvent) => {
    xCord.set(event.pageX);
    yCord.set(event.pageY);
    const fisaghores =
      Math.pow(event.pageX - dimension.width / 2, 2) +
      Math.pow(event.pageY - dimension.height / 2, 2);
    maskOpacity.set(Math.sqrt(fisaghores) / (dimension.width / 1.1));
  };
  const touchMoveHandler = (event: TouchEvent) => {
    xCord.set(event.touches[0].pageX);
    yCord.set(event.touches[0].pageY);
    const fisaghores =
      Math.pow(event.touches[0].pageX - dimension.width / 2, 2) +
      Math.pow(event.touches[0].pageY - dimension.height / 2, 2);
    maskOpacity.set(Math.sqrt(fisaghores) / (dimension.width / 1.1));
  };

  const leftFireRef = useRef<HTMLVideoElement>(null);
  const rightFireRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (uaParser.getOS().name === "Mac OS") {
      leftFireRef.current!.style.filter = "brightness(91.5%)";
      rightFireRef.current!.style.filter = "brightness(91.5%)";
    }
  }, []);

  return (
    <motion.div
      ref={heroContainerRef}
      onMouseMove={mouseMoveHandler}
      onTouchMove={touchMoveHandler}
      className=" flex justify-center items-center relative
        w-[100vw] aspect-[947/1492] sm:aspect-auto sm:h-[90vh] md:h-[100vh] lg:h-[56.26vw] mx-auto overflow-hidden hero-container"
    >
      <div className="portal-and-flame-and-hero w-full h-full relative z-20 ">
        <motion.div
          initial="hidden"
          animate={anim}
          variants={heroAnim}
          className=" ml-[-100%] sm:ml-[-25%] lg:ml-auto
             h-full
             w-[300%] sm:w-[150%] lg:w-full
             relative flex justify-center items-center will-change-transform origin-bottom"
        >
          <motion.div
            onTap={() => setAnim("visible")}
            onHoverStart={() => setAnim("visible")}
            onHoverEnd={() => setAnim("hidden")}
            className="red-transparent-on-city absolute w-[20%] h-[65%] top-1/2 mt-[-19.5%] left-1/2 ml-[-10%]  z-100 rounded-[50%] will-change-transform"
          />
          <LogoType setAnim={setAnim} portalLoading={portalLoading} />

          <Portal
            portalLoading={portalLoading}
            setPortalLoading={setPortalLoading}
            setAnim={setAnim}
          />

          <City
            anim={anim}
            maskOpacity={maskOpacity}
            portalLoading={portalLoading}
            springX={springX}
            springY={springY}
          />

          <FireCape
            leftFireRef={leftFireRef}
            rightFireRef={rightFireRef}
            portalLoading={portalLoading}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
