import { motion } from "framer-motion";
import Image from "next/image";
import { teamDataLvl1, teamDataLvl2 } from "../../store/allData";
import { pageAnimation, teamMemberAni } from "../../utils/animation";
import Card from "../global/Card";

const Team: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
      exit="out"
      className="w-screen min-h-screen relative pb-32 mb-20"
    >
      <span className="absolute w-full aspect-[1440/1097]">
        <span className="w-full h-full inner-image-no-max-width">
          <Image src={"/img/bg/sec4.png"} layout="fill" quality={100}  />
        </span>
      </span>
      <div className="relative w-full h-full flex flex-col justify-start items-center pt-24 md:pt-32 pb-10">
        <h3 className="text-[1.25rem] ssm:text-[1.75rem] sm:text-[2.375rem] font-bold">
          Meet the Creators
        </h3>
        <div className="flex flex-wrap justify-center items-center w-full gap-8 mt-20">
          {teamDataLvl1.map((member, index) => {
            return (
              <Card
                data={member}
                size={{ width: 200, height: 260 }}
                framerVariants={teamMemberAni}
                framerCustom={index}
              />
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center items-center w-full gap-8 mt-8">
          {teamDataLvl2.map((member, index) => {
            return (
              <Card
                data={member}
                size={{ width: 200, height: 260 }}
                framerVariants={teamMemberAni}
                framerCustom={index * 2}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
