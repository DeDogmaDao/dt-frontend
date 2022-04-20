import { motion } from "framer-motion";
import Image from "next/image";
import { footerData } from "../../../store/allData";
import Social from "./Social";
const Footer: React.FC = () => {
  return (
    <>
      <motion.footer
        layout
        className="h-full w-full flex flex-col justify-center items-center z-100  relative"
      >
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <div className="w-full h-full relative">
          <Image src="/img/bg/sec4.png" layout="fill" />
          </div>
        </div>
        <div className="pt-80 mb-3 scale-[80%] ssm:scale-100 z-10">
          <Image src="/img/logo/treasure.png" width={284} height={94} />
        </div>
        <h3 className="mb-3 text-[20px] ssm:text-[28px] sm:text-[38px] font-bold sm:font-bold z-10">
          NFT Game and Collection by
          <span className="text-yellow-300"> DDD</span>
        </h3>
        <span className="w-[30px] h-[6px] mb-6 bg-yellow-300 z-10" />
        <ul className="flex justify-center items-center sm:gap-x-3 mb-10 z-10">
          {footerData.map((data) => {
            return <Social data={data} />;
          })}
        </ul>
        <p className="mb-20 text-xs ssm:text-medium-light !font-thin z-10">
          &copy; COPYWRITES 2022 DDD. ALL RIGHTS RESERVED
        </p>
      </motion.footer>
    </>
  );
};

export default Footer;
