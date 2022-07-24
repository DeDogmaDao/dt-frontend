import { motion, MotionStyle } from "framer-motion";
import { useEffect, useState } from "react";
import { spellNumber } from "../../types/allTypes";

interface props {
  spellNumber: spellNumber;
}
const RingPin: React.FC<props> = ({ spellNumber }) => {
  const [styles, setStyles] = useState({
    topPin: {} as MotionStyle,
    bottomPin: {} as MotionStyle,
    ring: {} as MotionStyle,
  });

  useEffect(() => {
    setTimeout(() => {
      const plusOrMinus = spellNumber.blue - spellNumber.yellow >= 0 ? -1 : 1;
      const delta: number = spellNumber.yellow - spellNumber.blue;
      setStyles({
        ring: { translateX: delta / 3 + "vw" },
        topPin: { translateY: (plusOrMinus * Math.pow(delta, 2)) / 350 + "vw" },
        bottomPin: {
          translateY: (plusOrMinus * -Math.pow(delta, 2)) / 400 + "vw",
        },
      });
    }, 3000);
  }, [spellNumber]);

  return (
    <motion.div
      style={styles.ring}
      className="absolute top-[12vw] left-1/2 ml-[-0.8vw] w-[1.6vw] h-[1.6vw] z-10 duration-2000"
    >
      <div className="relative w-full h-full">
        <img
          src="/img/game/ring.png"
          className="absolute bottom-0 left-0 w-full h-full"
        />
        <img
          src="/img/game/ringLight.png"
          className="absolute top-px left-0 w-full h-full z-10"
        />

        <motion.div
          style={styles.topPin}
          className="absolute  left-1/2 ml-[-0.33vw] top-[-0.6vw] z-20 duration-2000 flex justify-start items-start"
        >
          <span className="border-[0.3vw] border-transparent border-b-[0.28vw] border-b-red-500 w-0 h-0 relative">
            <span className="w-0 h-0 absolute left-[-0.34vw] top-[0.27vw] border-[0.33vw] border-transparent border-t-[0.7vw] border-t-red-500 "></span>
          </span>
        </motion.div>
        <motion.div
          style={{ ...styles.bottomPin, scaleY: -1 }}
          className="absolute bottom-[-0.8vw] left-1/2 ml-[-0.33vw] w-0 h-0 z-20 duration-2000 flex justify-start items-start"
        >
          <span className="border-[0.3vw] border-transparent border-b-[0.28vw] border-b-red-500 w-0 h-0 relative">
            <span className="w-0 h-0 absolute left-[-0.34vw] top-[0.27vw] border-[0.33vw] border-transparent border-t-[0.7vw] border-t-red-500 "></span>
          </span>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default RingPin;
