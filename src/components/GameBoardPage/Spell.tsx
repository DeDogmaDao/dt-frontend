import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { bottomRightPosition, spellNumber } from "../../types/allTypes";
import { spellAni } from "../../utils/animation";
import { colorSpell, transitionSpell } from "../../utils/game";
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

  useEffect(() => {
    if (isShowed === showOrHidden && spellNumber[spellGroup] >= spellIndex) {
      setIsShowed((prevState) => !prevState);
    }
  }, [spellNumber]);

  return (
    <div className="rounded-full bg-white absolute" style={spellStyles}>
      {isShowed && (
        <motion.div
          layoutId={`${spellGroup}${spellIndex}`}
          transition={transitionSpell(spellIndex)}
          initial="hidden"
          animate="visible"
          variants={spellAni}
          custom={{
            num: spellIndex,
            color: colorSpell(spellGroup === "yellow"),
          }}
          className="w-full h-full rounded-full z-110"
          style={{ backgroundColor: colorSpell(spellGroup === "yellow") }}
        ></motion.div>
      )}
    </div>
  );
};

export default Spell;
