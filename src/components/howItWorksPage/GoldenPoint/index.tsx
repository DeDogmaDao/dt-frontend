import { motion } from "framer-motion";


const GoldenPoint: React.FC = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-col justify-center items-center">
      <motion.div className="flex justify-center gap-x-1">
        Demmortal Treasure is more than a{" "}
        <div>
          {"Collectable".split("").map((word) => {
            return <motion.span>{word}</motion.span>;
          })}
        </div>
      </motion.div>
      <div>
        Sustainable economy empowered by Anti-Rug Protocols and a Daily Lottery
        with guaranteed prize. All by owning a NFT!
      </div>
    </motion.div>
  );
};

export default GoldenPoint;
