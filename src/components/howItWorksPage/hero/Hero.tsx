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
import { cityAnim, heroAnim } from "../../../utils/animation";
import { UAParser } from "ua-parser-js";
import { dimensionType } from "../../../types/allTypes";

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
  const mouseMoveHandler = (event: MouseEvent) => {
    xCord.set(event.pageX);
    yCord.set(event.pageY);
    const fisaghores =
      Math.pow(event.pageX - dimension.width / 2, 2) +
      Math.pow(event.pageY - dimension.height / 2, 2);
    maskOpacity.set(Math.sqrt(fisaghores) / (dimension.width / 2));
  };
  const touchMoveHandler = (event: TouchEvent) => {
    xCord.set(event.touches[0].pageX);
    yCord.set(event.touches[0].pageY);
    const fisaghores =
      Math.pow(event.touches[0].pageX - dimension.width / 2, 2) +
      Math.pow(event.touches[0].pageY - dimension.height / 2, 2);
    maskOpacity.set(Math.sqrt(fisaghores) / (dimension.width / 2));
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
        onTouchMove={touchMoveHandler}
        className=" flex justify-center items-center relative
        w-[100vw] aspect-[947/1492] sm:aspect-auto sm:h-[90vh] md:h-[100vh] lg:h-[56.26vw] mx-auto overflow-hidden hero-container"
      >
        <div className="portal-and-flame-and-hero w-full h-full relative z-20 origin-bottom">
          <motion.div
            initial="hidden"
            animate={anim}
            variants={heroAnim}
            className=" ml-[-100%] sm:ml-[-25%] lg:ml-auto
             h-full
             w-[300%] sm:w-[150%] lg:w-full
             relative flex justify-center items-center will-change-transform"
          >
            <motion.div
              onHoverStart={() => setAnim("visible")}
              onHoverEnd={() => setAnim("hidden")}
              className="red-transparent-on-city absolute w-[20%] h-[65%] top-1/2 mt-[-19.5%] left-1/2 ml-[-10%]  z-100 rounded-[50%] will-change-transform"
            />

            <motion.span className="absolute left-0 w-[32.17669%] h-full hidden sm:block z-10 will-change-transform">
              <Image
                onLoadingComplete={() =>
                  setPortalLoading((prevState) => prevState + 1)
                }
                src={"/img/art/left-portal.png"}
                layout="fill"
                priority={true}
                quality={100}
              />
            </motion.span>
            <motion.span className="absolute right-0 w-[32.23981%] h-full hidden sm:block z-10 will-change-transform">
              <Image
                onLoadingComplete={() =>
                  setPortalLoading((prevState) => prevState + 1)
                }
                src={"/img/art/right-portal.png"}
                layout="fill"
                priority={true}
                quality={100}
              />
            </motion.span>
            <motion.span className="absolute left-[32.12669%] w-[35.70889%] h-full z-[11] will-change-transform">
              <Image
                onLoadingComplete={() =>
                  setPortalLoading((prevState) => prevState + 1)
                }
                src={"/img/art/middle-portal.png"}
                layout="fill"
                priority={true}
                quality={100}
              />
            </motion.span>

            <motion.img
              className="absolute z-20 left-[48.5%] top-[71%] w-[10%] h-[15%] will-change-transform"
              src={"/img/art/cape.gif"}
            />
            <motion.span
              style={{
                x: springX,
                y: springY,
                visibility: portalLoading > 2 ? "visible" : "hidden",
              }}
              className="absolute w-[48.567%] h-[85.121%] z-0 will-change-transform"
              initial="hidden"
              animate={anim}
              variants={cityAnim}
            >
              <Image src={"/img/art/city.png"} layout="fill" quality={100} />
            </motion.span>
            <motion.span
              style={{
                opacity: maskOpacity,
                visibility: portalLoading > 2 ? "visible" : "hidden",
              }}
              className="absolute w-full h-full z-0 scale-105 will-change-transform"
            >
              <Image src={"/img/art/mask.png"} layout="fill" />
            </motion.span>

            <motion.video
              style={{ visibility: portalLoading > 2 ? "visible" : "hidden" }}
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
              style={{ visibility: PortalLoading > 2 ? "visible" : "hidden" }}
              ref={rightFireRef}
              loop
              autoPlay
              muted
              playsInline
              className="absolute hidden sm:block border-none outline-none z-20 w-[9.429%] h-[20.114%] left-[74.844%] top-[57.828%] will-change-transform"
            >
              <source src={"/img/art/right-fire.mp4"} type="video/mp4" />
            </motion.video>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
