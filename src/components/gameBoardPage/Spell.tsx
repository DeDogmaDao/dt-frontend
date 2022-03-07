import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { gameCardType } from "../../types/allTypes";
import { spellAni } from "../../utils/animation";
interface props {
  spell: number;
  isFliped: boolean;
  cardIndex: number;
  spellIndex: number;
  gameCardData: gameCardType[];
  data: gameCardType;
}
const Spell: React.FC<props> = ({
  spell,
  isFliped,
  cardIndex,
  spellIndex,
  gameCardData,
  data,
}) => {
  const column = (spell % 3) + 1;
  const [spellNum, setSpellNum] = useState(0);
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
console.log(`${data.spellGroup}${spellNum}`);
  return (
    <div className="rounded-full bg-white absolute" style={{
      left: 5 + column * 5,
      top: 5 + Math.floor(spell / 3) * 10,
      width: 3,
      height: 3,
    }}>
    <motion.div
      layoutId={`${data.spellGroup}${spellNum}`}
      className="w-full h-full rounded-full bg-yellow-500"
    ></motion.div>
  </div>
  );
};

export default Spell;
