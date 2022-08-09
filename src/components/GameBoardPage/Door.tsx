import { motion, useAnimation } from "framer-motion";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { gameCardType, spellNumber } from "../../types/allTypes";
import {
  doorLightAnimation,
  doorRingAni,
  doorToLeftAnimation,
  doorToRightAnimation,
} from "../../utils/animation";
import { times } from "../../utils/game";
import RingPin from "./RingPin";

interface props {
  spellNumber: spellNumber;
  doorStage: number;
  currentCard: gameCardType | null;
  setDoorStage: Dispatch<SetStateAction<number>>;
  videoSource: gameCardType;
}

const Door: React.FC<props> = ({
  spellNumber,
  doorStage,
  currentCard,
  setDoorStage,
  videoSource,
}) => {
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
      }, times.door2StageTime);
    }
    if (doorStage === 4) {
      doorAnimControls.start("visible");
      setTimeout(() => {
        setDoorStage(5);
      }, times.door5StageTime);
    }
  }, [doorStage]);

  return (
    <div className="absolute  top-[10.53vw] left-[59.05vw] w-[15.391vw] h-[26vw] bg-neutral-900">
      <div className="relative w-full h-full">
        <motion.div
          className="absolute bottom-0 right-0 w-[7.788vw] h-full z-0"
          initial="hidden"
          animate={doorAnimControls}
          variants={doorToRightAnimation}
        >
          <motion.video ref={rightDoorRef} muted className="w-full h-full">
            <source
              src={
                `/img/game/${videoSource.spellGroup}Door.mp4`
              }
              type="video/mp4"
            />
          </motion.video>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-[7.788vw] h-full z-0 scale-x-[-1]"
          initial="hidden"
          animate={doorAnimControls}
          variants={doorToLeftAnimation}
        >
          <motion.video ref={leftDoorRef} muted className="w-full h-full">
            <source src={`/img/game/${videoSource.spellGroup}Door.mp4`} type="video/mp4" />
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
        </motion.div>
      </div>
    </div>
  );
};

export default Door;
