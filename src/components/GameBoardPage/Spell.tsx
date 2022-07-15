import { motion } from "framer-motion";
import { CSSProperties, useEffect, useState } from "react";
import { bottomRightPosition, spellNumber } from "../../types/allTypes";
import { spellAni } from "../../utils/animation";
import { colorSpell, transitionSpell } from "../../utils/game";
interface props {
  spellIndex: number;
  spellNumber: spellNumber;
  spellGroup: string;
  showOrHidden: boolean;
  spellStyles: CSSProperties;
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
    <motion.div className={`bg-white absolute ${!showOrHidden && "rounded-full"}`} style={spellStyles}>
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
          className={`w-full h-full z-110 ${!showOrHidden && "rounded-full"}`}
          style={{ backgroundColor: colorSpell(spellGroup === "yellow") }}
        ></motion.div>
      )}
    </motion.div>
  );
};

export default Spell;
