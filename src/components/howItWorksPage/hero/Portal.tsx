import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import { allArtImg } from "../../../store/img";

interface props {
  setPortalLoading: Dispatch<SetStateAction<number>>;
  portalLoading: number;
  setAnim: Dispatch<SetStateAction<string>>;
}

const Portal: React.FC<props> = ({
  setPortalLoading,
  portalLoading,
  setAnim,
}) => {
  useEffect(() => {
    if (portalLoading === 3) {
      setTimeout(() => {
        setPortalLoading(4);
      }, 1);
    }
  }, [portalLoading]);

  return (
    <>
      <motion.span
        className="absolute w-full h-full z-[11] will-change-transform hidden sm:block"
        onTap={() => setAnim("hidden")}
      >
        <Image
        alt="dedogmadao portal" 
          onLoadingComplete={() => setPortalLoading((prevState) => 3)}
          src={allArtImg.portal}
          layout="fill"
          priority={true}
          quality={75}
          placeholder="blur"
        />
      </motion.span>
      <motion.span
        className="absolute  w-[35.70889%] h-full z-[11] will-change-transform sm:hidden"
        onTap={() => setAnim("hidden")}
      >
        <Image
        alt="dedogmadao portal" 
          onLoadingComplete={() => setPortalLoading((prevState) => 3)}
          src={allArtImg.middlePortal}
          layout="fill"
          priority={true}
          quality={75}
          placeholder="blur"
        />
      </motion.span>
    </>
  );
};

export default Portal;
