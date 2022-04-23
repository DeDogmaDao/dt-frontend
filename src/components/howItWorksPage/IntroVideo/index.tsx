import Image from "next/image";
import PlaySVG from "../../svgs/play.svg";
import PauseSVG from "../../svgs/pause.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { videoBtnAnim } from "../../../utils/animation";
const InteroVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [iseHovering, setIsHovering] = useState(false);
  const [isTapped, setIsTapped] = useState(0);
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
  }, [isPlaying]);

  useEffect(() => {
    setIsHovering(true);
    const btnTimeOut = setTimeout(() => {
      setIsHovering(false);
    }, 2000);

    return () => {
      clearTimeout(btnTimeOut);
    };
  }, [isTapped]);

  return (
    <div className="w-full aspect-[16/13] sm:aspect-video flex justify-center items-center relative">
      <span className="w-full  absolute h-full lg:aspect-[1382/814]">
        <span className="w-full h-full inner-image-no-max-width">
          <Image src={"/img/bg/sec2.png"} layout="fill" quality={100}  />
        </span>
      </span>
      <motion.div
        className="aspect-video w-[90%] sm:w-[70%] rounded-[30px] z-10 mt-[-5%] flex justify-center items-center
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
              onTap={() => setIsTapped((prevState) => prevState + 1)}
              onMouseEnter={() => setIsHovering(true)}
              className="z-20 absolute w-[3rem] md:w-[5.625rem] aspect-square p-2 md:p-6 rounded-full bg-white/20 fill-white
          hover:scale-125 hover:fill-primary-500 duration-150 ease-out"
            >
              <PlaySVG />
            </motion.span>
          )}
          {isPlaying && iseHovering && (
            <motion.span
              initial="hidden"
              animate="visible"
              exit="out"
              variants={videoBtnAnim}
              onClick={videoClickHandler}
              onTap={() => setIsTapped((prevState) => prevState + 1)}
              onMouseEnter={() => setIsHovering(true)}
              className="z-20 absolute w-[5.625rem] aspect-square p-6 rounded-full bg-white/20 fill-white
          hover:scale-125 hover:fill-primary-500 duration-150 ease-out opacity-50 hover:opacity-100"
            >
              <PauseSVG />
            </motion.span>
          )}
        </AnimatePresence>
        {!once && (
          <motion.div
            onTap={() => setIsTapped((prevState) => prevState + 1)}
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
          </motion.div>
        )}
        <img src='/img/video/border.png' className="aspect-[16/9] w-[58.3rem] pl-px absolute" />
        <motion.video
          onTap={() => setIsTapped((prevState) => prevState + 1)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onClick={videoClickHandler}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={videoRef}
          controls={once}
          poster="/img/bg/Story.png"
          className="aspect-video w-[58.125rem] rounded-[1.9vw] z-10 object-cover"
        >
          <source src={"/img/video/intro.mp4"} type="video/mp4" />
        </motion.video>
      </motion.div>
    </div>
  );
};

export default InteroVideo;
