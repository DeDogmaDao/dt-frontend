import { motion } from "framer-motion";
import { gameCardType, spellNumber } from "../../types/allTypes";
import { diamondSpells } from "../../utils/game";
import Spell from "./Spell";

interface props {
    spellNumber: spellNumber;
    currentCard: gameCardType | null;
}

const Diamond:React.FC<props> = ({spellNumber,currentCard}) => {
    return (
        <motion.div className="w-[1.8vw] h-[3vw] absolute top-[2.55vw] right-[32.4vw] z-100">
            <img 
            className="w-full h-full z-100"
             src="/img/game/diamond.png" />
             <span className="w-full h-full">
             {diamondSpells.map((spell) => {
          return (
              <Spell
                key={spell + "d-spell"}
                spellIndex={spell + 51}
                spellGroup={currentCard?.spellGroup??"blue"}
                spellNumber={spellNumber}
                showOrHidden={false}
                spellStyles={{bottom:"1.4vw",right:"0.8vw",width:"0.2vw",height:"0.2vw"}}
              />
          );
        })}
             </span>
        </motion.div>
    )
}

export default Diamond;