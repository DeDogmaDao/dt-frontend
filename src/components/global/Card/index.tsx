import Image from "next/image";
import { globCardType, sizeType } from "../../../types/allTypes";
import { motion, Variants } from "framer-motion";
interface props {
  data: globCardType;
  size: sizeType;
  framerVariants?: Variants;
  framerCustom?: any;
}
const Card: React.FC<props> = ({
  data,
  size,
  framerVariants,
  framerCustom,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={framerVariants}
      custom={framerCustom}
      className="flex flex-col justify-center items-center text-white group"
    >
      <span
        style={{ ...size }}
        className="group-hover:-translate-y-3 group-hover:opacity-70 duration-500 relative rounded-xl overflow-hidden"
      >
        <Image
          src={data.image}
          layout="fill"
          loading="lazy"
          placeholder="blur"
          objectFit="cover"
          
        />
      </span>
      {data.name && (
        <p className="text-medium-bold text-white mt-4 group-hover:text-primary-500 duration-500">
          {data.name}
        </p>
      )}
      {data.role && <p className="text-small-light mt-2">{data.role}</p>}
    </motion.div>
  );
};

export default Card;
