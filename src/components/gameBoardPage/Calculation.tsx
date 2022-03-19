import { motion } from "framer-motion";
interface props {
  firstCardNum: number;
}

const Calculation: React.FC<props> = ({ firstCardNum }) => {
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
          <div>12</div> × <div>6</div> + <div>7987</div> = <div>10</div>
        </div>

        <div className="flex justify-between">
          <div>1222</div> % <div>653</div> = <div>1054</div>
        </div>
      </div>
    </>
  );
};

export default Calculation;
