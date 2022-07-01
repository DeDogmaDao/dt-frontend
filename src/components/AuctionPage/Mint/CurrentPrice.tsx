import { AnimatePresence, motion } from "framer-motion";
import { auctionPriceAni } from "../../../utils/animation";
interface props {
  price: string;
}

const CurrentPrice: React.FC<props> = ({ price }) => {
  return (
    <motion.span
      className="flex justify-between"
      initial="hidden"
      animate="visible"
      exit="out"
    >
      <div className=" h-full flex w-24 justify-center">
        <AnimatePresence exitBeforeEnter>
          {price.split("").map((el, index) => {
            if (Number(price) === -1 || Number(price)===0) return null;
            return (
              <motion.span
                key={"auctionprice" + index}
                variants={auctionPriceAni}
                initial="hidden"
                animate="visible"
                exit="out"
                custom={index}
              >
                {el}
              </motion.span>
            );
          })}
        </AnimatePresence>
      </div>
      <p> ETH</p>
    </motion.span>
  );
};

export default CurrentPrice;
