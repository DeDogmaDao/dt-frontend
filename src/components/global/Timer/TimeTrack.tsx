import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { timerAni } from "../../../utils/animation";

interface props {
  type: string;
  time: number;
}
const nums: number[] = Array.from(Array(10).keys());
const TimeTrack: React.FC<props> = ({ time, type }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  
  useEffect(() => {
    if (type === "Sec") {
      setTimeLeft(Math.floor(time % 60));
    }
    if (type === "Min") {
      setTimeLeft(Math.floor((time % 3600) / 60));
    }
    if (type === "H") {
      setTimeLeft(Math.floor((time % (3600 * 24)) / 3600));
    }
    if (type === "D") {
      setTimeLeft(Math.floor(time / (3600 * 24)));
    }
  }, [time]);
  if (type === "D" && timeLeft === 0) {
    return <></>;
  }
  if (type === "H" && timeLeft === 0 && Math.floor(time / (3600 * 24)) === 0) {
    return <></>;
  }


  
  return (
    <motion.div  className="flex justify-center items-center h-full">
      <motion.span  className="text-[2rem] w-10 font-bold flex justify-center items-center relative">
        <AnimatePresence>
          {nums.map((item) => {
            if (Math.floor(timeLeft / 10) !== item) return null;
            return (
              <motion.span
                key={"tens" + item}
                className="absolute left-0 w-5 text-center"
                initial={"hidden"}
                animate={"visible"}
                exit={"out"}
                variants={timerAni}
              >
                {item}
              </motion.span>
            );
          })}
          {nums.map((item) => {
            if (timeLeft % 10 !== item) return null;
            return (
              <motion.span
                key={"first" + item}
                className="absolute right-0 w-5 text-center"
                initial={"hidden"}
                animate={"visible"}
                exit={"out"}
                variants={timerAni}
              >
                {item}
              </motion.span>
            );
          })}
        </AnimatePresence>
      </motion.span>
      <motion.span  className="self-end text-base font-normal">{type}</motion.span>
    </motion.div>
  );
};

export default TimeTrack;
