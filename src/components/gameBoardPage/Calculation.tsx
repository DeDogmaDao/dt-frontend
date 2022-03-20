import { motion } from "framer-motion";
import { gameCardType } from "../../types/allTypes";
import CardNum from "./CardNum";
interface props {
  firstCardNum: number;
  currentCard: gameCardType | null;
}

const communityNumStyles: React.CSSProperties = {
  left: "0.3vw",
  bottom: "0vw",
};
const individualNumStyles: React.CSSProperties = {
  right: "0.5vw",
  bottom: "0vw",
};

const Calculation: React.FC<props> = ({ firstCardNum, currentCard }) => {
  return (
    <>
      <motion.div
        layoutId="cardNum"
        className="absolute left-[3vw] top-[22vw] bg-blue-900 text-white p-3"
      >
        {firstCardNum}
      </motion.div>
      <div className="flex flex-col justify-center items-center absolute left-[7vw] bottom-[2.2vw] text-4xl">
        <div className="flex justify-between">
          <motion.div>12</motion.div> ×
          <CardNum
            num={currentCard?.communityNum}
            styles={communityNumStyles}
            layoutID="communityNum"
            showHidden={false}
          />
          +
          <CardNum
            num={currentCard?.individualNum}
            styles={individualNumStyles}
            layoutID="individualNum"
            showHidden={false}
          />
          <motion.div layoutId="individualNum">7987</motion.div> = <div>10</div>
        </div>

        <div className="flex justify-between">
          <div>1222</div> % <div>653</div> = <div>1054</div>
        </div>
      </div>
    </>
  );
};

export default Calculation;
