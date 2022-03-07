import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { gameCardType, spellNumber } from "../../types/allTypes";
import { spellAni } from "../../utils/animation";
interface props {
  spell: number;
  isFliped: boolean;
  cardIndex: number;
  spellIndex: number;
  gameCardData: gameCardType[];
  data: gameCardType;
  spellNumber: spellNumber;
}
const Spell: React.FC<props> = ({
  spell,
  isFliped,
  cardIndex,
  spellIndex,
  gameCardData,
  data,
  spellNumber,
}) => {
  const column = (spell % 3) + 1;
  const [spellNum, setSpellNum] = useState(0);
  const [isShowed, setIsShowed] = useState(true);
  // const [animVariant, setAnimVariant] = useState<Variants>({});
  // useEffect(() => {
  //   if(isFliped){
  //     setTimeout(() => {
  //       setAnimVariant(spellAni);
  //     }, 500);
  //   }
  // }, [isFliped])
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cardIndex; i++) {
      if (data.spellGroup === gameCardData[i].spellGroup) {
        sum = sum + gameCardData[i].spellValue;
      }
    }
    sum = sum + spellIndex + 1;
    setSpellNum(sum);
  }, []);

  useEffect(() => {
    if (isShowed === true) {
      let globSpellNumber = 0;
      if (data.spellGroup === "yellow") {
        globSpellNumber = spellNumber.yellow;
      }
      if (data.spellGroup === "blue") {
        globSpellNumber = spellNumber.blue;
      }
      if (spellNum <= globSpellNumber) {
        setIsShowed(false);
      }
    }
  }, [spellNumber]);

  return (
    <div
      className="rounded-full bg-white absolute"
      style={{
        left: 5 + column * 5,
        top: 5 + Math.floor(spell / 3) * 10,
        width: 3,
        height: 3,
      }}
    >
      {isShowed && (
        <motion.div
          layoutId={`${data.spellGroup}${spellNum}`}
          className="w-full h-full rounded-full bg-yellow-500"
        ></motion.div>
      )}
    </div>
  );
};

export default Spell;
