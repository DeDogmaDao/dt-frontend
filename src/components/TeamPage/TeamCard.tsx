import Image from "next/image";
import { sizeType, teamCardType } from "../../types/allTypes";
import { motion, Variants } from "framer-motion";
import Social from "../global/Social";
import { lgData, mdData, smData } from "../../store/allData";
interface props {
  data: teamCardType;
  size: sizeType;
  framerVariants?: Variants;
  framerCustom?: any;
}
const TeamCard: React.FC<props> = ({
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
      itemID={
        [smData[0], mdData[1], smData[1], mdData[0], lgData[0]][framerCustom]
      }
    >
      <span
        style={{ ...size }}
        className="group-hover:-translate-y-3 group-hover:opacity-90 duration-500 relative rounded-xl overflow-hidden"
      >
        <Image
        alt={"dedogmadao team " + data.name}
          src={data.image}
          layout="fill"
          loading="lazy"
          placeholder="blur"
          objectFit="cover"
        />
        <span
          className="w-full h-full absolute bottom-0 left-0 bg-gradient-to-t from-primary-900 via-primary-900/80
         to to-primary-900/10  pb-5 px-4 flex justify-center items-end
         text-white text-base font-normal translate-y-[100%] group-hover:translate-y-0 duration-700"
        >
          <div className="w-full relative h-full flex flex-col justify-between">
            <div className="w-full h-10 mt-3 flex justify-end items-center gap-x-3">
              {data.link?.map((item) => {
                return (
                  <Social
                  key={item.href}
                    data={item}
                    hasTransition={true}
                    svgWidth={"1.25rem"}
                    width={"2.5rem"}
                  />
                );
              })}
            </div>
            <p>{data.desc}</p>
          </div>
        </span>
      </span>

      {data.name && (
        <p className="text-medium-bold text-white  group-hover:text-primary-500 duration-500 mt-3">
          {data.name}
        </p>
      )}
      {data.role && <span className="text-small-light mt-1">{data.role}</span>}
    </motion.div>
  );
};

export default TeamCard;
