import { motion, useMotionValue, useTransform } from "framer-motion";
import { gameCardType, spellNumber } from "../../types/allTypes";
import { colorSpell, diamondSpells } from "../../utils/game";
import Spell from "./Spell";

interface props {
  spellNumber: spellNumber;
  currentCard: gameCardType | null;
}

const Diamond: React.FC<props> = ({ spellNumber, currentCard }) => {
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
      <motion.div className="w-[1.8vw] h-[3vw] absolute top-[2.55vw] right-[32.4vw] hover:scale-125 duration-300 z-[1000]">
        <div className="w-ful h-full relative flex justify-center items-center">
          <motion.span
            // style={{ borderBottomColor: diamondColorTransform }}
            transition={{ type: "spring", stiffness: 500 }}
            className="z-0 w-0 h-0 border-[0.9vw] border-transparent border-b-[1.5vw] relative top-[-1.3vw]"
          >
            <motion.span
              // style={{ borderTopColor: diamondColorTransform }}
              className="absolute left-[-0.9vw] top-[1.5vw] w-0 h-0  border-[0.9vw]
          border-transparent border-t-[1.55vw] "
            ></motion.span>
          </motion.span>
          <motion.img
            className="w-full h-full z-110 absolute left-0 top-0"
            src="/img/game/diamond.png"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Diamond;
