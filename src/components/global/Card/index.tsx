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
        className="group-hover:-translate-y-3 group-hover:opacity-90 duration-500 relative rounded-xl overflow-hidden"
      >
        <Image
          src={data.image}
          layout="fill"
          loading="lazy"
          placeholder="blur"
          objectFit="cover"
          
        />
        <span className="w-full h-full absolute bottom-0 left-0 bg-gradient-to-t from-cyan-900 via-cyan-900/80
         to to-cyan-900/10 pt-[30%] pb-5 px-4 flex justify-center items-end
         text-white text-base font-normal translate-y-[100%] group-hover:translate-y-0 duration-700">{data.desc}</span>
      </span>
        <a target={"_blank"} href={data.link} className="cursor-pointer flex flex-col justify-center items-center w-full mt-5 gap-y-2">
      {data.name && (
        <p className="text-medium-bold text-white  group-hover:text-primary-500 duration-500">
          {data.name}
        </p>
      )}
      {data.role && <span  className="text-small-light ">{data.role}</span>}
      </a>
    </motion.div>
  );
};

export default Card;
