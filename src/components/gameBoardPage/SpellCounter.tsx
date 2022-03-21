import { motion } from "framer-motion";
import { useState } from "react";
import { numsList } from "../../store/allData";
import { spellCounterAni } from "../../utils/animation";

const SpellCounter: React.FC = () => {
  const [nums, setNums] = useState(numsList);
  return (
    <motion.div className="flex flex-col justify-between items-center">
      {nums.map((num) => {
        return (
          <>
            {num && (
              <motion.span
                initial="hidden"
                animate="visible"
                exit="out"
                variants={spellCounterAni}
                className=""
              >
                {num}
              </motion.span>
            )}
          </>
        );
      })}
    </motion.div>
  );
};

export default SpellCounter;
