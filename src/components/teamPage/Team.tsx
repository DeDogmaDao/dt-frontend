import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { teamDataLvl1, teamDataLvl2 } from "../../store/allData";
import { pageAnimation, teamMemberAni } from "../../utils/animation";
import BackToTop from "../global/BackToTop";
import TeamCard from "./TeamCard";
import teamBg from "../images/bg/sec4.png";
const Team: React.FC = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={teamRef}
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
      exit="out"
      className="w-screen min-h-screen relative  mb-44"
    >
      <BackToTop containerRef={teamRef} />

      <span className="absolute w-full aspect-[1440/1097] z-0">
        <span className="w-full h-full inner-image-no-max-width ">
          <div className="absolute bottom-0  left-0 w-full h-[7.5rem] bg-gradient-to-t from-bodymain to-transparent z-[1]" />
          <Image alt="dedogmadao background"  src={teamBg} layout="fill" quality={100} />
        </span>
      </span>
      <div className="relative w-full h-full flex flex-col justify-start items-center pt-24 md:pt-32 pb-10 mx-auto">
        <h3 className="text-[1.25rem] ssm:text-[1.75rem] sm:text-[2.375rem] font-bold">
          Meet the Creators
        </h3>
        <div className="flex flex-wrap justify-center items-center w-full gap-8 mt-20">
          {teamDataLvl1.map((member, index) => {
            return (
              <TeamCard
              key={member.name + index}
                data={member}
                size={{ width: "18.75rem", height: "24.375rem" }}
                framerVariants={teamMemberAni}
                framerCustom={index}
              />
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center items-center w-full gap-8 mt-20">
          {teamDataLvl2.map((member, index) => {
            return (
              <TeamCard
              key={member.name + index}
                data={member}
                size={{ width: "18.75rem", height: "24.375rem" }}
                framerVariants={teamMemberAni}
                framerCustom={index + 3}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
