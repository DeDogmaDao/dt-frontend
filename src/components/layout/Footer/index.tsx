import { motion } from "framer-motion";
import Image from "next/image";
import { footerData } from "../../../store/allData";
import Social from "./Social";
const Footer: React.FC = () => {
  return (
    <>
      <motion.footer
        layout
        className="h-full w-full flex flex-col justify-center items-center z-100  relative -mt-40 sm:-mt-56"
      >
        <div className="pt-10 mb-3 scale-[80%] ssm:scale-100 z-10">
          <Image src="/img/logo/treasure.png" width={284} height={94} />
        </div>
        <h3 className="mb-3 text-[1.25rem] ssm:text-[1.75rem] sm:text-[2.375rem] font-bold sm:font-bold z-10">
          NFT Game and Collection by
          <span className="text-primary-500"> DDD</span>
        </h3>
        <span className="w-[1.875rem] h-[.375rem] mb-6 bg-primary-500 z-10 " />
        <ul className="flex justify-center items-center gap-x-1 sm:gap-x-3 mb-36 z-10">
          {footerData.map((data) => {
            return <Social data={data} width="3.375rem" svgWidth="1.625rem" hasTransition={true} />;
          })}
        </ul>
        <p className="mb-10 text-xs ssm:text-medium-light !font-thin z-10">
          &copy; COPYWRITES 2022 DDD. ALL RIGHTS RESERVED
        </p>
      </motion.footer>
    </>
  );
};

export default Footer;
