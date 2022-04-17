import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    setInnerWidth(window.innerWidth);

  }, []);
  const { scrollY } = useViewportScroll();
  const marginLeft = useTransform(
    scrollY,
    (y) => (-innerWidth * (1 + y / 1000 - 1)) / 2
  );
  const marginTop = useTransform(
    scrollY,
    (y) => -innerWidth * 0.5626 * (1 + y / 1000 - 1)
  );
  const width = useTransform(scrollY, (y) => innerWidth * (1 + y / 1000));
  const height = useTransform(
    scrollY,
    (y) => 0.5626 * innerWidth * (1 + y / 1000)
  );
  const widthGif = useTransform(
    scrollY,
    (y) => innerWidth * 0.156 * (1 + y / 1000)
  );
  const bottomGif = useTransform(
    scrollY,
    (y) => innerWidth * 0.4 * (1 + y / 1000)
  );

  return (
    <div className="flex justify-center items-center relative w-[100vw] h-[56.26vw] mx-auto overflow-hidden hero-container">
      <div className="portal-and-flame-and-hero w-full h-full relative z-10 ">
        <motion.span
          className="absolute duration-500 "
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
              className=" absolute duration-500 z-20 left-[47%]"
              src={"/img/art/cape.gif"}
            />
          </div>
        </motion.span>
      </div>
      <span
        className="absolute w-full h-full z-0"
        style={{ marginTop: (-innerWidth * 1.5 * 0.3) / 2 }}
      >
        <Image
          src={"/img/art/city.png"}
          layout="fixed"
          width={innerWidth}
          height={0.5626 * innerWidth * 1.3}
        />
      </span>
    </div>
  );
};

export default Hero;
