import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";

interface props {
  setPortalLoading: Dispatch<SetStateAction<number>>;
  portalLoading: number;
}

const Portal: React.FC<props> = ({ setPortalLoading, portalLoading }) => {
  useEffect(() => {
    if (portalLoading === 3) {
      setTimeout(() => {
        setPortalLoading(4);
      }, 1);
    }
  }, [portalLoading]);

  return (
    <>
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
    </>
  );
};

export default Portal;
