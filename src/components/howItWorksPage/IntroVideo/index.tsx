import Image from "next/image";
import PlaySVG from "../../svgs/play.svg";
import PauseSVG from "../../svgs/pause.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { videoBtnAnim } from "../../../utils/animation";
const InteroVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [iseHovering, setIsHovering] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [once, setOnce] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoClickHandler = () => {
    if (once === false) {
      setOnce(true);
    }
    setIsPlaying((prevState) => !prevState);
  };
  

  useEffect(() => {
    if (isPlaying === false) {
      videoRef.current!.pause();
    } else {
      videoRef.current!.play();
    }
    setShowBtn(true);
    const btnTimeOut = setTimeout(() => {
      setShowBtn(false);
    }, 1500);

    return () => {
      clearTimeout(btnTimeOut)
    }
  }, [isPlaying]);


  return (
    <div className="w-full aspect-[16/13] sm:aspect-video flex justify-center items-center relative">
      <span className="w-full  absolute h-full lg:aspect-video">
        <span className="w-full h-full inner-image-no-max-width">
          <Image src={"/img/bg/sec2.png"} layout="fill" quality={100} />
        </span>
      </span>
      <motion.div
        className="aspect-video w-[90%] sm:w-[70%] rounded-[30px] z-10 mt-[-10%] flex justify-center items-center
      relative cursor-pointer"
      >
        <AnimatePresence>
          {!isPlaying && (
            <motion.span
              initial="hidden"
              animate="visible"
              exit="out"
              variants={videoBtnAnim}
              onClick={videoClickHandler}
              onMouseEnter={() => setIsHovering(true)}
              className="z-20 absolute w-[3rem] md:w-[5.625rem] aspect-square p-2 md:p-6 rounded-full bg-white/20 fill-white
          hover:scale-125 hover:fill-primary-500 duration-150 ease-out"
            >
              <PlaySVG />
            </motion.span>
          )}
          {isPlaying && iseHovering && showBtn && (
            <motion.span
              initial="hidden"
              animate="visible"
              exit="out"
              variants={videoBtnAnim}
              onClick={videoClickHandler}
              onMouseEnter={() => setIsHovering(true)}
              className="z-20 absolute w-[5.625rem] aspect-square p-6 rounded-full bg-white/20 fill-white
          hover:scale-125 hover:fill-primary-500 duration-150 ease-out opacity-50 hover:opacity-100"
            >
              <PauseSVG />
            </motion.span>
          )}
        </AnimatePresence>
        {!once && (
          <div
            className="absolute w-[100%] h-[10rem] mt-[30%]  flex flex-col justify-center items-center z-20
        gap-y-1 pointer-events-none scale-[38%] md:scale-[60%] lg:scale-100"
          >
            <span className="w-[26px] h-[6px] bg-primary-500" />
            <span className="text-[2.5rem] font-bold whitespace-nowrap">
              THE TRESURE <span className="text-primary-500">STORY</span>
            </span>
            <span className="text-xl font-light whitespace-nowrap">
              This is how everything started Between Gods and humans ...
            </span>
          </div>
        )}
        <video
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onClick={videoClickHandler}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={videoRef}
          controls={once}
          poster="/img/bg/Story.png"
          className="aspect-video w-[58.125rem] rounded-[30px] z-10 object-cover"
        >
          <source src={"/img/video/intro.mp4"} type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
};

export default InteroVideo;
