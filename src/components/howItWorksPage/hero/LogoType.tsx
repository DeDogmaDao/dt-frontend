import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import treasure from '../../images/logo/treasure.png';
interface props {
  setAnim: Dispatch<SetStateAction<string>>;
  portalLoading: number;
}
const LogoType: React.FC<props> = ({ setAnim, portalLoading }) => {
  return (
    <motion.div
      onHoverStart={() => setAnim("visible")}
      onHoverEnd={() => setAnim("hidden")}
      style={{ visibility: portalLoading > 3 ? "visible" : "hidden" }}
      className="mt-[-1%] ssm:mt-[1%] lg:mt-[2%] xl:mt-[7%]  absolute flex flex-col justify-start items-center z-110 "
    >
      <motion.span className="w-[20rem] aspect-[1207/728]   will-change-transform">
        <Image src={treasure} layout={"fill"} quality={75} placeholder="blur" />
      </motion.span>
      <motion.button
        className="text-small-bold  rounded-full w-[8.625rem] h-[2.5rem] flex justify-center items-center text-white mt-[-14%]
        bg-neutral-900 hover:bg-neutral-900/60  cursor-pointer will-change-transform duration-500 border-2 border-transparent hover:border-primary-500"
      >
        Join Our Discord
      </motion.button>
    </motion.div>
  );
};

export default LogoType;
