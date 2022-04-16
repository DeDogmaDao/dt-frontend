import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [innerWidth, setInnerWidth] = useState(0);
  const [scaleValue, setScaleValue] = useState(1);
  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setTimeout(() => {
    //   setScaleValue(1.3);
    }, 3000);
  }, []);

  return (
    <div className="flex justify-center items-center relative w-[100vw] h-[76.4vw] mx-auto overflow-hidden hero-container">
      <div className="portal-and-flame-and-hero w-full h-full relative z-10">
        <motion.span
          className="absolute duration-500 "
          style={{
            marginLeft: (-innerWidth * (scaleValue - 1)) / 2,
            marginTop: (-innerWidth * 0.7636 * (scaleValue - 1)) / 2,
            width: innerWidth * scaleValue,
            height: 0.7636 * innerWidth * scaleValue,
          }}
        >
          <Image src={"/img/art/portal.png"} layout="fill" />
        </motion.span>
        <motion.span
          className="absolute duration-500 z-20 bottom-[13.7%] left-[47.5%]"
          style={{}}
        >
          <img className="w-60" src={"/img/art/cape.gif"}  />
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
          height={0.7636 * innerWidth * 1.3}
        />
      </span>
    </div>
  );
};

export default Hero;
