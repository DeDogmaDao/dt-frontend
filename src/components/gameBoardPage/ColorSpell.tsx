import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { spellAni } from "../../utils/animation";

interface props {
  layoutID:string;
  showOrHidden: boolean;
  globSpellNumber:number;
  spellNum:number | null;
}

const ColorSpell: React.FC<props> = ({ layoutID, showOrHidden, globSpellNumber, spellNum }) => {
  const [isShowed, setIsShowed] = useState(showOrHidden);
  const [once, setOnce] = useState(false);
useEffect(() => {
  if(once === false && spellNum !== null && globSpellNumber >= spellNum) {
    setIsShowed((prevState) => !prevState)
    setOnce(true);
  }
}, [spellNum, globSpellNumber])

  return (
    <>
      {isShowed && (
        <motion.div
        layoutId={layoutID}
          transition={{ duration: 3, ease: "linear" }}
          initial="hidden"
          animate="visible"
          variants={spellAni}
          className="w-full h-full rounded-full bg-yellow-500 z-110"
        ></motion.div>
      )}
    </>
  );
};

export default ColorSpell;
