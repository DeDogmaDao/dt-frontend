import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";

const speed = 1000;

const Hero: React.FC = () => {
  const [innerWidth, setInnerWidth] = useState(1000);
  useLayoutEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);
  const { scrollY, scrollYProgress } = useViewportScroll();
  const marginLeftT = useTransform(
    scrollY,
    (y) => (-innerWidth * (1 + y / speed - 1)) / 2
  );
  const marginTopT = useTransform(
    scrollY,
    (y) => -innerWidth * 0.5626 * (1 + y / speed - 1)
  );
  const widthT = useTransform(scrollY, (y) => innerWidth * (1 + y / speed));
  const heightT = useTransform(
    scrollY,
    (y) => 0.5626 * innerWidth * (1 + y / speed)
  );
  const widthGifT = useTransform(
    scrollY,
    (y) => innerWidth * 0.156 * (1 + y / speed)
  );
  const bottomGifT = useTransform(
    scrollY,
    (y) => innerWidth * 0.4 * (1 + y / speed)
  );
  const scaleT = useTransform(scrollYProgress, (y) => 1 - y);
  const opacityT = useTransform(scrollYProgress, (y) => 0.6 - y * 3);

  const marginLeft = useSpring(marginLeftT, { damping: 20 });
  const marginTop = useSpring(marginTopT, { damping: 20 });
  const width = useSpring(widthT, { damping: 20 });
  const height = useSpring(heightT, { damping: 20 });
  const widthGif = useSpring(widthGifT, { damping: 20 });
  const bottomGif = useSpring(bottomGifT, { damping: 20 });
  const scale = useSpring(scaleT, { damping: 20 });
  const opacity = useSpring(opacityT, { damping: 20 });

  return (
    <>
      {innerWidth !== 0 && (
        <div className="flex justify-center items-center relative w-[100vw] h-[56.26vw] mx-auto overflow-hidden hero-container">
          <div className="portal-and-flame-and-hero w-full h-full relative z-20 ">
            <motion.span
              className="absolute"
              style={{
                marginLeft,
                marginTop,
                width,
                height,
              }}
            >
              <div className="w-full h-full relative">
                <Image src={"/img/art/portal.png"} layout="fill" />

                <motion.img
                  style={{ width: widthGif, top: bottomGif }}
                  className=" absolute  z-20 left-[47%]"
                  src={"/img/art/cape.gif"}
                />
              </div>
            </motion.span>
          </div>
          <motion.span
            className="absolute w-full h-full z-10"
            style={{ marginTop: (-innerWidth * 1 * 0.3) / 2, scale, opacity }}
          >
            <Image
              src={"/img/art/mask.png"}
              layout="fixed"
              width={innerWidth}
              height={0.5626 * innerWidth * 1.3}
            />
          </motion.span>
          <motion.span
            className="absolute w-full h-full z-0"
            style={{ marginTop: (-innerWidth * 1 * 0.3) / 2, scale }}
          >
            <Image
              src={"/img/art/city.png"}
              layout="fixed"
              width={innerWidth}
              height={0.5626 * innerWidth * 1.3}
            />
          </motion.span>
        </div>
      )}
    </>
  );
};

export default Hero;
