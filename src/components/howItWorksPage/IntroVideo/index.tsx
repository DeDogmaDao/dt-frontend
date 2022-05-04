import Image from "next/image";
import PlaySVG from "../../svgs/play.svg";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { videoBtnAnim } from "../../../utils/animation";
import introBg from "../../images/bg/sec2.png";
import videoBg from "../../images/bg/Story.png";
import { useOnScrollAnimation } from "../../../hooks/useOnScrollAnimation";

const InteroVideo: React.FC = () => {
  const [once, setOnce] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const videoClickHandler = () => {
    if (once === false) {
      setOnce(true);
      videoRef.current!.src = videoRef.current!.src + "?autoplay=1";
    }
  };

  const [playElement,controls] = useOnScrollAnimation(1);

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
        onClick={videoClickHandler}
        className="group aspect-video w-[90%] sm:w-[70%] rounded-[2.2vw] z-10 mt-[-0%] flex justify-center items-center
      relative cursor-pointer bg-neutral-900 overflow-hidden"
      >
        <iframe
          className="w-full h-full z-10"
          ref={videoRef}
          loading="lazy"
          src={`https://www.youtube.com/embed/amQDMEgXh1Y`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Demmortal Treasure dedogmadao"
        />
        {!once && (
          <div className="absolute top-0 left-0 w-full h-full z-20">
            <div className="relative w-full h-full flex justify-center items-center">
              <motion.span
              ref={playElement}

                initial="hidden"
                animate={controls}
                exit="out"
                variants={videoBtnAnim}
                className="z-20 absolute group-hover:!scale-125 w-[3rem] md:w-[5.625rem] aspect-square p-2 md:p-6 rounded-full bg-white/20 fill-white
           group-hover:!fill-primary-500 duration-150 ease-out"
              >
                <PlaySVG />
              </motion.span>

              <span className="w-full  absolute h-full lg:aspect-[1382/814]">
                <span className="w-full h-full inner-image-no-max-width">
                  <Image
                    alt="dedogmadao background"
                    src={videoBg}
                    layout="fill"
                    quality={100}
                    placeholder="blur"
                  />
                </span>
              </span>
              <motion.div
                className="absolute w-[100%] h-[10rem] mt-[30%]  flex flex-col justify-center items-center z-20
        gap-y-1 pointer-events-none scale-[38%] md:scale-[60%] lg:scale-100"
              >
                <span className="w-[26px] h-[6px] bg-primary-500" />
                <h2 className="text-[2.5rem] font-bold whitespace-nowrap">
                  Odyssey of the{" "}
                  <span className="text-primary-500">Titan’s treasure</span>
                </h2>
                <span className="text-xl font-light text-center md:px-10">
                  Olympians, Titans and mortals- united in search of fortune.
                  Watch to see how it all came to be
                </span>
              </motion.div>
            </div>
          </div>
        )}
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
