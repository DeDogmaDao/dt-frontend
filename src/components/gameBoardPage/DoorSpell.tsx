import { bottomRightPosition, spellNumber } from "../../types/allTypes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { spellAni } from "../../utils/animation";
interface props {
  spells: number[];
  spell: number;
  spellPosition: bottomRightPosition;
  right: number;
  spellNumber: spellNumber;
}
const DoorSpell: React.FC<props> = ({
  spells,
  spell,
  right,
  spellPosition,
  spellNumber,
}) => {
  const [isShowed, setIsShowed] = useState(false);





  const spellStyles = (spell: number) => ({
    right:
      right === 0
        ? right + spell * (spellPosition.right / spells.length) + "vw"
        : right - spell * (spellPosition.right / spells.length) + "vw",
    bottom: 0 + spell * (spellPosition.bottom / spells.length) + "vw",
    width: spellPosition.width + "vw",
    height: spellPosition.height + "vw",
  });

  const idFirstPart = right === 0 ? "blue" : "yellow";
  const idSecondPart = spells.length > 20 ? spell + 1 : spell + 41;



  
  useEffect(() => {
    if(isShowed === false && idSecondPart <= spellNumber[idFirstPart]){
      setIsShowed(true)
      console.log("doorSpell : " + `${idFirstPart}${idSecondPart}`)
    }
  }, [spellNumber])
  



  return (
    <div className="rounded-full bg-white absolute" style={spellStyles(spell)}>
      {isShowed && (
        <motion.div
          layoutId={`${idFirstPart}${idSecondPart}`}
          transition={{ duration: 3, ease: "linear" }}
          initial="hidden"
          animate="visible"
          variants={spellAni}
          className="w-full h-full rounded-full bg-yellow-500"
        ></motion.div>
      )}
    </div>
  );
};

export default DoorSpell;
