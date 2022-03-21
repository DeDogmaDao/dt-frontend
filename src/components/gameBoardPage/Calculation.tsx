import { motion, useAnimation } from "framer-motion";
import { gameCardType } from "../../types/allTypes";
import CardNum from "./CardNum";
interface props {
  firstCardNum: number;
  currentCard: gameCardType | null;
}

const communityNumStyles: React.CSSProperties = {
  left: "0vw",
  bottom: "0vw",
};
const individualNumStyles: React.CSSProperties = {
  right: "0vw",
  bottom: "0vw",
};

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
      <div className="flex flex-col justify-start items-center absolute left-[6.5vw] bottom-[2.6vw] text-4xl bg-red-400 w-[20vw] h-[5vw]">
        <div className="flex justify-between w-full">
          <div className="w-full bg-lime-300 "></div>
          ×
          <motion.div className="w-full bg-purple-300 relative flex justify-center items-center" initial="hidden" animate={communityControls}>
            <CardNum
              num={currentCard?.communityNum}
              styles={communityNumStyles}
              layoutID="communityNum"
              showHidden={false}
            />
          </motion.div>
          +
          <motion.div className="w-full bg-blue-300 relative" initial="hidden" animate={individualControls}>
            <CardNum
              num={currentCard?.individualNum}
              styles={individualNumStyles}
              layoutID="individualNum"
              showHidden={false}
            />
          </motion.div>
          = <div>10</div>
        </div>

        <div className="flex justify-between">
          {/* <div>1222</div> % <div>653</div> = <div>1054</div> */}
        </div>
      </div>
    </>
  );
};

export default Calculation;
