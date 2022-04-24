import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import leftPortal from '../../images/art/left-portal.png';
import rightPortal from '../../images/art/right-portal.png';
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
      <motion.span
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
      </motion.span>
      <motion.span
        className="absolute left-[32.12669%] w-[35.70889%] h-full z-[11] will-change-transform"
        onTap={() => setAnim("hidden")}
      >
        <Image
          onLoadingComplete={() =>
            setPortalLoading((prevState) => prevState + 1)
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
