import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { faqData } from "../../store/allData";
import { allBgImg } from "../../store/img";
import { pageAnimation } from "../../utils/animation";
import BackToTop from "../global/BackToTop";
import EachFAQ from "./EachFAQ";

const FaqPage:React.FC = () => {

  const faqRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={faqRef}
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
      exit="out"
      className=" w-full h-full relative will-change-transform"
    >
      <BackToTop containerRef={faqRef} />
      <motion.span layout className="absolute w-full aspect-[1440/1097] will-change-transform">
        <span className="w-full h-full inner-image-no-max-width will-change-transform">
          <Image src={allBgImg.sec4} layout="fill" quality={100} alt="dedogmadao NFT" title="dedogmadao NFT" />
        </span>
      </motion.span>
      <LayoutGroup>
        <motion.div
          layout
          className="w-screen min-h-screen relative pb-32 mb-20 flex flex-col justify-center items-center will-change-transform"
        >
          <motion.h3
            layout
            className="z-10 mt-32 md:mt-44 text-[1.25rem] ssm:text-[1.75rem] sm:text-[2.375rem] font-bold sm:font-bold will-change-transform"
          >
            Frequently Asked Questions
          </motion.h3>
          <motion.ul
            layout
            className="flex flex-col justify-center items-center mx-auto w-[95%] sm:w-[90%] md:w-[75%] lg:w-[63%] will-change-transform
      h-full rounded-xl  gap-y-1 py-12 z-10 bg-neutral-500 mt-14"
          >
            {faqData.map((data) => {
              return <EachFAQ key={data.question} data={data} />;
            })}
          </motion.ul>
        </motion.div>
      </LayoutGroup>
    </motion.div>
  );
};

export default FaqPage;
