import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import portal from '../../images/art/portal.png';
import middlePortal from '../../images/art/middle-portal.png';
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
      {/* <motion.span
        className="absolute left-0 w-[32.17669%] h-full hidden sm:block z-10 will-change-transform"
        onTap={() => setAnim("hidden")}
      >
        <Image
          onLoadingComplete={() =>
            setPortalLoading((prevState) => prevState + 1)
          }
          src={leftPortal}
          layout="fill"
          priority={true}
          quality={75}
          placeholder="blur"
        />
      </motion.span>
      <motion.span
        className="absolute right-0 w-[32.23981%] h-full hidden sm:block z-10 will-change-transform"
        onTap={() => setAnim("hidden")}
      >
        <Image
          onLoadingComplete={() =>
            setPortalLoading((prevState) => prevState + 1)
          }
          src={rightPortal}
          layout="fill"
          priority={true}
          quality={75}
          placeholder="blur"
        />
      </motion.span> */}
      <motion.span
        className="absolute w-full h-full z-[11] will-change-transform hidden sm:block"
        onTap={() => setAnim("hidden")}
      >
        <Image
          onLoadingComplete={() =>
            setPortalLoading((prevState) => 3)
          }
          src={portal}
          layout="fill"
          priority={true}
          quality={75}
          placeholder="blur"
        />
      </motion.span>
      <motion.span
        className="absolute  w-[3.70889%] h-full z-[110] will-change-transform sm:hidden"
        onTap={() => setAnim("hidden")}
      >
        <Image
          onLoadingComplete={() =>
            setPortalLoading((prevState) => 3)
          }
          src={middlePortal}
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
