import { motion } from "framer-motion";
import Image from "next/image";
import { footerData } from "../../../store/allData";
import Social from "./Social";
const Footer: React.FC = () => {
  return (
    <>
      <motion.footer
        layout
        className="h-full w-full flex flex-col justify-center items-center z-100 -mt-44 "
        style={{
          background:
            "linear-gradient(0deg, rgba(33,33,33,1) 0%, rgba(33,33,33,1) 80%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div className="pt-32 mb-3 scale-[80%] ssm:scale-100">
          <Image src="/img/logo/treasure.png" width={284} height={94} />
        </div>
        <h3 className="mb-3 text-[20px] ssm:text-[28px] sm:text-[38px] font-bold sm:font-bold">
          NFT Game and Collection by
          <span className="text-yellow-300">DDD</span>
        </h3>
        <span className="w-[30px] h-[6px] mb-6 bg-yellow-300" />
        <ul className="flex justify-center items-center sm:gap-x-3 mb-10">
          {footerData.map((data) => {
            return <Social data={data} />;
          })}
        </ul>
        <p className="mb-20 text-xs ssm:text-medium-light !font-thin">
          &copy; COPYWRITES 2022 DDD. ALL RIGHTS RESERVED
        </p>
      </motion.footer>
    </>
  );
};

export default Footer;
