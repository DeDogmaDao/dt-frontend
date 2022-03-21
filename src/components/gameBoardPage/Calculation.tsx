import { motion, useAnimation } from "framer-motion";
import { gameCardType } from "../../types/allTypes";
import { calcFirstResultAni } from "../../utils/animation";
import CardNum from "./CardNum";
interface props {
  firstCardNum: number;
  currentCard: gameCardType | null;
}

const communityNumStyles: React.CSSProperties = {};
const individualNumStyles: React.CSSProperties = {};

const Calculation: React.FC<props> = ({ firstCardNum, currentCard }) => {
  const communityControls = useAnimation();
  const individualControls = useAnimation();

  return (
    <>
      <motion.div
        layoutId="cardNum"
        className="absolute left-[3vw] top-[22vw] bg-blue-900 text-white p-3"
      >
        {firstCardNum}
      </motion.div>
      <div className="flex flex-col justify-start items-center absolute left-[5.5vw] bottom-[2.6vw] text-2xl bg-red-400 w-[22vw] h-[5vw]">
        <div className="w-[4.5vw] h-[2.5vw] bg-lime-300 absolute left-0 top-0"></div>
        <div className="w-[1.5vw] h-[2.5vw] bg-gray-300 absolute left-[4.5vw] top-0 text-center">
          ×
        </div>
        <div className="w-[3vw] h-[2.5vw] bg-blue-300 absolute left-[6vw] top-0 text-center">
          <motion.div
            className="w-full h-full relative flex justify-center items-center"
            initial="hidden"
            animate={communityControls}
          >
            <CardNum
              num={currentCard?.communityNum}
              styles={communityNumStyles}
              layoutID="communityNum"
              showHidden={false}
            />
          </motion.div>
        </div>
        <div className="w-[1.5vw] h-[2.5vw] bg-gray-300 absolute left-[9vw] top-0 text-center">
          +
        </div>
        <div className="w-[3vw] h-[2.5vw] bg-purple-300 absolute left-[10.5vw] top-0 text-center">
          <motion.div
            className="w-full h-full relative flex justify-center items-center"
            initial="hidden"
            animate={individualControls}
          >
            <CardNum
              num={currentCard?.individualNum}
              styles={individualNumStyles}
              layoutID="individualNum"
              showHidden={false}
            />
          </motion.div>
        </div>
        <div className="w-[1.5vw] h-[2.5vw] bg-gray-300 absolute left-[13.5vw] top-0 text-center">
          =
        </div>
        <div className="w-[7vw] h-[2.5vw] bg-orange-300 absolute left-[15vw] top-0 text-center">
          {currentCard && (
            <motion.div
              className="relative flex justify-center items-center h-full w-full"
              initial="hidden"
              animate="visible"
              variants={calcFirstResultAni}
            >
              {currentCard?.cardNum * currentCard?.communityNum +
                currentCard?.individualNum}
            </motion.div>
          )}
        </div>

        <div className="w-[6.5vw] h-[2.5vw] bg-green-300 absolute left-[0vw] top-[2.5vw] text-center"></div>
        <div className="w-[1.5vw] h-[2.5vw] bg-gray-300 absolute left-[6.5vw] top-[2.5vw] text-center">
          %
        </div>
        <div className="w-[5.5vw] h-[2.5vw] bg-red-300 absolute left-[8vw] top-[2.5vw] text-center"></div>
        <div className="w-[1.5vw] h-[2.5vw] bg-gray-300 absolute left-[13.5vw] top-[2.5vw] text-center">
          %
        </div>
        <div className="w-[7vw] h-[2.5vw] bg-blue-300 absolute left-[15vw] top-[2.5vw] text-center"></div>
      </div>
    </>
  );
};

export default Calculation;
