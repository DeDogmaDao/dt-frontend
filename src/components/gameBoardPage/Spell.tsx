import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  bottomRightPosition,
  gameCardType,
  spellNumber,
} from "../../types/allTypes";
import { spellAni } from "../../utils/animation";
interface props {
  spellIndex: number;
  spellNumber: spellNumber;
  spellGroup: string;
  showOrHidden: boolean;
  spellStyles: bottomRightPosition;
}
const Spell: React.FC<props> = ({
  spellIndex,
  spellNumber,
  spellGroup,
  showOrHidden,
  spellStyles,
}) => {
  const [isShowed, setIsShowed] = useState(showOrHidden);
  const [once, setOnce] = useState(false);

  useEffect(() => {
    if (once === false && spellNumber[spellGroup] >= spellIndex) {
      setIsShowed((prevState) => !prevState);
      setOnce(true);
    }
  }, [spellNumber]);

  const color = spellGroup === "yellow" ? "yellow" : "#00FFFF";
  return (
    <div className="rounded-full bg-white absolute" style={spellStyles}>
      {isShowed && (
        <motion.div
          layoutId={`${spellGroup}${spellIndex}`}
          // @ts-ignore
          transition={{ duration: 5, ease:[.92,.08,.59,.88], type:"spring", stiffness:(spellIndex%3+1) * 200 *(Math.floor(Math.random()*4 + 7)/10), mass:10 * (Math.floor(Math.random()*4 + 7)/10), damping:40 * (Math.floor(Math.random()*4 + 7)/10), velocity:-10 }}
          initial="hidden"
          animate="visible"
          variants={spellAni}
          custom={{num:spellIndex, color:color}}
          className="w-full h-full rounded-full z-110"
          style={{backgroundColor:color}}
        ></motion.div>
      )}
    </div>
  );
};

export default Spell;
