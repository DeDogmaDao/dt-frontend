import { motion, MotionStyle } from "framer-motion";
import { useEffect, useState } from "react";
import { spellNumber } from "../../types/allTypes";

interface props {
  spellNumber: spellNumber;
}

let topPinStyles = (constant: number, BlueSpellNumber: number) => {
  return {} as MotionStyle;
};
const Door: React.FC<props> = ({ spellNumber }) => {
  const [styles, setStyles] = useState({
    topPin: {} as MotionStyle,
    bottomPin: {} as MotionStyle,
    ring: {} as MotionStyle,
  });

  useEffect(() => {
    setTimeout(() => {
      const plusOrMinus = spellNumber.blue - spellNumber.yellow > 0 ? -1 : 1;
      const delta: number = 10;
      setStyles({
        ring: { translateX: delta / 3 + "vw" },
        topPin: { translateY: (plusOrMinus * Math.pow(delta, 2)) / 28 + "vw" },
        bottomPin: {
          translateY: (plusOrMinus * -Math.pow(delta, 2)) / 35 + "vw",
        },
      });
    }, 3000);
  }, [spellNumber]);

  return (
    <div className="absolute  top-[10.53vw] left-[59.05vw] w-[15.391vw] h-[26vw] bg-red-500">
      <div className="relative w-full h-full">
        <img
          src="/media/game/door.png"
          className="absolute bottom-0 right-0 w-[7.7vw] h-full z-0 "
        />
        <img
          src="/media/game/door.png"
          className="absolute bottom-0 left-0 w-[7.7vw] h-full z-0 scale-x-[-1]"
        />
      </div>
      <motion.div
        style={styles.ring}
        className="absolute top-[12.5vw] left-1/2 ml-[-0.7vw] w-[1.4vw] h-[1.4vw] z-10 duration-2000"
      >
        <div className="relative w-full h-full">
          <img
            src="/media/game/ring.png"
            className="absolute bottom-0 left-0 w-full h-full"
          />

          <motion.img
            style={styles.topPin}
            src="/media/game/pin.png"
            className="absolute top-[-0.5vw] left-1/2 ml-[-0.33vw] w-[0.66vw] z-10 duration-2000"
          />
          <motion.img
            style={{ ...styles.bottomPin, scaleY: -1 }}
            src="/media/game/pin.png"
            className="absolute bottom-[-0.6vw] left-1/2 ml-[-0.33vw] w-[0.66vw] z-10 duration-2000"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Door;
