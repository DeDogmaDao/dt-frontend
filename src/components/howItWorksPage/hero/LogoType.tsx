import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface props {
  setAnim: Dispatch<SetStateAction<string>>;
  portalLoading: number;
}
const LogoType: React.FC<props> = ({ setAnim, portalLoading }) => {
  return (
    <motion.div
      onTap={() => setAnim("visible")}
      onHoverStart={() => setAnim("visible")}
      onHoverEnd={() => setAnim("hidden")}
      style={{ visibility: portalLoading > 2 ? "visible" : "hidden" }}
      className="mt-[7%] lg:mt-[12%]  absolute flex flex-col justify-center items-center z-110 pb-[2.5%]"
    >
      <motion.span className="w-[231px] h-[70px]   will-change-transform">
        <Image src="/img/logo/treasure.png" layout={"fill"} quality={100} />
      </motion.span>
      <motion.button
        className="text-small-bold  rounded-full w-[138px] h-[40px] flex justify-center items-center text-white
        bg-neutral-900 hover:bg-neutral-900/60  cursor-pointer will-change-transform duration-500 border-2 border-transparent hover:border-primary-500"
      >
        Join Our Discord
      </motion.button>
    </motion.div>
  );
};

export default LogoType;
