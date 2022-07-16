import { motion, useMotionValue, useTransform } from "framer-motion";
import { gameCardType, spellNumber } from "../../types/allTypes";
import { diamondSpells } from "../../utils/game";
import Spell from "./Spell";

interface props {
  spellNumber: spellNumber;
  currentCard: gameCardType | null;
}

const Diamond: React.FC<props> = ({ spellNumber, currentCard }) => {
   const hue = useMotionValue(0);
   hue.set(spellNumber.blue - spellNumber.yellow);
   if(currentCard?.isWinner){
       hue.set(spellNumber[currentCard.spellGroup]);
   }
   const hueTransform = useTransform(hue, [-1, 1], [-105, 0]);
  return (
    <>
      <motion.div className="w-[1.8vw] h-[3vw] absolute top-[2.55vw] right-[32.4vw] z-100">
        {diamondSpells.map((spell) => {
          return (
            <Spell
              key={spell + "d-spell"}
              spellIndex={spell + 51}
              spellGroup={currentCard?.spellGroup ?? "blue"}
              spellNumber={spellNumber}
              showOrHidden={false}
              spellStyles={{
                bottom: "1.4vw",
                right: "0.8vw",
                width: "0.2vw",
                height: "0.2vw",
              }}
            />
          );
        })}
      </motion.div>
      <motion.div 
      style={{filter: `hue-rotate(${hueTransform.get()}deg)`}}
      className="w-[1.8vw] h-[3vw] absolute top-[2.55vw] right-[32.4vw] z-110 hover:scale-125 duration-300">
        <img className="w-full h-full z-[1000]" src="/img/game/diamond.png" />
      </motion.div>
    </>
  );
};

export default Diamond;
