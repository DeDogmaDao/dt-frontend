import { motion, useAnimation } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { gameCardType, spellNumber } from "../../types/allTypes";
import {
  doorLightAnimation,
  doorRingAni,
  doorToLeftAnimation,
  doorToRightAnimation,
} from "../../utils/animation";
import RingPin from "./RingPin";

interface props {
  spellNumber: spellNumber;
  doorStage: number;
  currentCard: gameCardType | null;
  setDoorStage:Dispatch<SetStateAction<number>>;
}

const Door: React.FC<props> = ({ spellNumber, doorStage, currentCard,setDoorStage }) => {
  const doorAnimControls = useAnimation();
  const rightDoorRef = useRef<HTMLVideoElement>(null);
  const leftDoorRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (doorStage === 1) {
      rightDoorRef.current!.playbackRate = 0.5;
      leftDoorRef.current!.playbackRate = 0.498;
      setTimeout(() => {
        leftDoorRef.current!.play();
        rightDoorRef.current!.play();
        setDoorStage(2);
      }, 1000);
    }
    if(doorStage===4){
      doorAnimControls.start("visible");
    }
  }, [doorStage]);

  return (
    <div className="absolute  top-[10.53vw] left-[59.05vw] w-[15.391vw] h-[26vw] bg-red-500">
      <div className="relative w-full h-full">
        <motion.div
          className="absolute bottom-0 right-0 w-[7.788vw] h-full z-0"
          initial="hidden"
          animate={doorAnimControls}
          variants={doorToRightAnimation}
        >
          <motion.video
            ref={rightDoorRef}
            muted
            className="w-full h-full"
          >
            <source src={"/img/game/door.mp4"} type="video/mp4" />
          </motion.video>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-[7.788vw] h-full z-0 scale-x-[-1]"
          initial="hidden"
          animate={doorAnimControls}
          variants={doorToLeftAnimation}
        >
          <motion.video
            ref={leftDoorRef}
            muted
            className="w-full h-full"
          >
            <source src={"/img/game/door.mp4"} type="video/mp4" />
          </motion.video>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={doorAnimControls}
          variants={doorToLeftAnimation}
          className="relative w-full h-full"
        >
          <RingPin
            spellNumber={spellNumber}
            currentCard={currentCard}
            doorStage={doorStage}
            setDoorStage={setDoorStage}
          />

          {/* {spellNumber.blue === spellNumber.yellow && (
            <motion.svg className="absolute overflow-visible top-[13.17vw] left-[7.65vw] z-0">
              <motion.circle
                initial="hidden"
                animate="visible"
                variants={doorRingAni}
                cx="0"
                cy="0"
                r="0.68vw"
                stroke="#16FBFF"
                strokeWidth="0.4vw"
                fill="none"
              />
            </motion.svg>
          )} */}
        </motion.div>
      </div>
    </div>
  );
};

export default Door;
