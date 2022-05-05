import Image from "next/image";
import { motion } from "framer-motion";
import introBg from "../../images/bg/sec2.png";

const InteroVideo: React.FC = () => {
  return (
    <div className="w-full aspect-[16/13] sm:aspect-video flex justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full h-[7.5rem] bg-gradient-to-b from-[#04050E] via-transparent to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-[7.5rem] bg-gradient-to-t from-bodymain via-transparent to-transparent z-[1]" />
      <span className="w-full  absolute h-full lg:aspect-[1382/814]">
        <span className="w-full h-full inner-image-no-max-width">
          <Image
            alt="dedogmadao NFT"
            title="dedogmadao NFT"
            src={introBg}
            layout="fill"
            quality={100}
            placeholder="blur"
          />
        </span>
      </span>
      <motion.div
        className="group aspect-video w-[90%] sm:w-[70%] rounded-[2.2vw] z-10 mt-[-0%] flex justify-center items-center
      relative cursor-pointer bg-neutral-900 overflow-hidden"
      >
        <iframe
          className="w-full h-full z-10"
          loading="lazy"
          src={`https://www.youtube.com/embed/amQDMEgXh1Y`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Demmortal Treasure dedogmadao"
        />
        <img
          alt="dedogmadao NFT"
          title="dedogmadao NFT"
          src="/img/video/border.png"
          className="w-full aspect-video pl-px absolute z-30 pointer-events-none"
        />
      </motion.div>
    </div>
  );
};

export default InteroVideo;
