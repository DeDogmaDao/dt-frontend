import Image from "next/image";
import PlaySVG from "../../svgs/play.svg";
import PauseSVG from "../../svgs/pause.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { videoBtnAnim } from "../../../utils/animation";
import introBg from "../../images/bg/sec2.png";

const InteroVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [iseHovering, setIsHovering] = useState(false);
  const [isTapped, setIsTapped] = useState(0);
  const [showBtn, setShowBtn] = useState(true);
  const [once, setOnce] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const videoClickHandler = () => {
    if (once === false) {
      setOnce(true);
    }
    setIsPlaying((prevState) => !prevState);
  };

  // useEffect(() => {
  //   if (isPlaying === false) {
  //     videoRef.current!.pause();
  //   } else {
  //     videoRef.current!.play();
  //   }
  //   setShowBtn(true);
  // }, [isPlaying]);

  // useEffect(() => {
  //   setIsHovering(true);
  //   const btnTimeOut = setTimeout(() => {
  //     setIsHovering(false);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(btnTimeOut);
  //   };
  // }, [isTapped]);

  return (
    <div className="w-full aspect-[16/13] sm:aspect-video flex justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full h-[7.5rem] bg-gradient-to-b from-bodymain via-transparent to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-[7.5rem] bg-gradient-to-t from-bodymain via-transparent to-transparent z-[1]" />
      <span className="w-full  absolute h-full lg:aspect-[1382/814]">
        <span className="w-full h-full inner-image-no-max-width">
          <Image src={introBg} layout="fill" quality={100} placeholder="blur" />
        </span>
      </span>
      <motion.div
        className="aspect-video w-[90%] sm:w-[70%] rounded-[30px] z-10 mt-[-0%] flex justify-center items-center
      relative cursor-pointer bg-red-50/40 overflow-hidden"
      onClick={()=>{videoRef.current!.src="https://www.youtube.com/embed/sP13ARp0jTA?autoplay=1"}}
      >
      <iframe
      className="w-full h-full"
      ref={videoRef}
      loading="lazy"
      src={``}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Demmortal Treasure dedogmadao"
    />
        {!once && (
          <motion.div
            onTap={() => setIsTapped((prevState) => prevState + 1)}
            className="absolute w-[100%] h-[10rem] mt-[30%]  flex flex-col justify-center items-center z-20
        gap-y-1 pointer-events-none scale-[38%] md:scale-[60%] lg:scale-100"
          >
            <span className="w-[26px] h-[6px] bg-primary-500" />
            <span className="text-[2.5rem] font-bold whitespace-nowrap">
              Odyssey of the{" "}
              <span className="text-primary-500">Titan’s treasure</span>
            </span>
            <span className="text-xl font-light text-center md:px-10">
              Olympians, Titans and mortals- united in search of fortune. Watch
              to see how it all came to be
            </span>
          </motion.div>
        )}
        <img
          src="/img/video/border.png"
          className="w-full aspect-video pl-px absolute"
        />
      </motion.div>
    </div>
  );
};

export default InteroVideo;
