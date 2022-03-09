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

  return (
    <div className="rounded-full bg-white absolute" style={spellStyles}>
      {isShowed && (
        <motion.div
          layoutId={`${spellGroup}${spellIndex}`}
          transition={{ duration: 1 }}

          className="w-full h-full rounded-full bg-yellow-500 z-110"
        ></motion.div>
      )}
    </div>
  );
};

export default Spell;
