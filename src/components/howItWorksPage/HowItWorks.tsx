import Carosel from "../global/Carosel";
import FAQ from "./FAQ";
import { teamData } from "../../store/allData";
import Card from "../global/Card";
import HeaderImg from "./HeaderImg";
import SecOne from "./SecOne";
import Tabs from "./Tabs";
import { motion } from "framer-motion";

const teamClone = [
  ...teamData,
  ...teamData,
  ...teamData,
  ...teamData,
  ...teamData,
];
const HowItWorks: React.FC = () => {
  return (
    <>
      <HeaderImg />

      <SecOne />

      <div className="relative h-screen w-screen my-80 flex justify-center items-center">
        <img src="/media/junks/Door.png" className="h-full" />
        <motion.img
          src="/media/team/member1.png"
          className="absolute w-16 -bottom-5  left-[43%]"
          style={{ transform: "rotateX(69deg) skew(-19deg)" }}
        />
        <motion.img
          src="/media/team/member2.png"
          className="absolute w-16 -bottom-5  left-[50%]"
          style={{ transform: "rotateX(69deg) rotateZ(-12deg)" }}
        />
        <motion.img
          src="/media/team/member3.png"
          className="absolute w-10 bottom-7  left-[45%]"
          style={{ transform: "rotateX(69deg) skew(-19deg)" }}
        />
        <motion.img
          src="/media/team/member1.png"
          className="absolute w-10 bottom-7  left-[50%]"
          style={{ transform: "rotateX(69deg) skew(11deg)" }}
        />
      </div>

      <Carosel allData={teamClone} Item={Card} initialQuantity={100} />
      <FAQ />
      <Tabs />
    </>
  );
};

export default HowItWorks;
