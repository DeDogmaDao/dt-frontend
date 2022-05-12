import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { heroSvgAni } from "../../../utils/animation";
import { treasuresImg } from "../../../store/img";
import { AngleRightSVG, ETHSVG } from "../../../store/svg";
interface props {
  setAnim: Dispatch<SetStateAction<string>>;
  portalLoading: number;
}
const LogoType: React.FC<props> = ({ setAnim, portalLoading }) => {
  const [ethSvg, setEthSvg] = useState(true);
  useEffect(() => {
    const svgTimer = setInterval(() => {
      setEthSvg((prevState) => !prevState);
    }, 2000);

    return () => {
      clearInterval(svgTimer);
    };
  }, []);
  return (
    <motion.div
      onHoverStart={() => setAnim("visible")}
      onHoverEnd={() => setAnim("hidden")}
      style={{ visibility: portalLoading > 3 ? "visible" : "hidden" }}
      className="mt-[-1%] ssm:mt-[1%] lg:mt-[2%] xl:mt-[7%]  absolute flex flex-col justify-start items-center z-110 "
    >
      <motion.span className="w-[20rem] aspect-[1207/728]   will-change-transform">
        <span className=" w-full h-full">
          <Image
            alt="dedogmadao logo"
            src={treasuresImg.treasure}
            layout={"fill"}
            quality={90}
            placeholder="blur"
          />
        </span>
      </motion.span>
      <motion.a
        initial="hidden"
        animate="visible"
        href="https://discord.gg/dedogmadao"
        target={"_blank"}
        className="text-small-bold  rounded-full w-[8.625rem] h-[2.5rem] flex justify-center items-center text-white mt-[-14%]
        bg-neutral-900 hover:bg-neutral-900/60  cursor-pointer will-change-transform duration-500 border-2 border-transparent
         hover:border-primary-500"
      >
        {ethSvg && (
          <motion.span
            variants={heroSvgAni}
            custom={1}
            className="flex justify-between items-center gap-x-1"
          >
            Join Our Discord{" "}
            <span className=" w-[0.3rem]   stroke-white ">
              <AngleRightSVG fill="none" />
            </span>
          </motion.span>
        )}
        {!ethSvg && (
          <motion.span
            variants={heroSvgAni}
            custom={-1}
            className="flex justify-between items-center gap-x-2"
          >
            Win ETH{" "}
            <span className="w-[0.8rem]">
              <ETHSVG />
            </span>
          </motion.span>
        )}
      </motion.a>
    </motion.div>
  );
};

export default LogoType;
