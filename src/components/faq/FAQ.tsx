import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import { faqData } from "../../store/allData";
import { pageAnimation } from "../../utils/animation";
import EachFAQ from "./EachFAQ";

const FAQ: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
      exit="out"
      className=" w-full h-full relative"
    >
      <motion.span layout className="absolute w-full aspect-[1440/1097]">
        <span className="w-full h-full inner-image-no-max-width">
          <Image src={"/img/bg/sec4.png"} layout="fill" quality={100} />
        </span>
      </motion.span>
      <LayoutGroup>
        <motion.div
          layout
          className="w-screen min-h-screen relative pb-32 mb-20 flex flex-col justify-center items-center"
        >
          <motion.h3
            layout
            className="z-10 mt-32 md:mt-44 text-[1.25rem] ssm:text-[1.75rem] sm:text-[2.375rem] font-bold sm:font-bold"
          >
            Frequently Asked Questions
          </motion.h3>
          <motion.ul
            layout
            className="flex flex-col justify-center items-center mx-auto w-[95%] sm:w-[90%] md:w-[75%] lg:w-[63%]
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

export default FAQ;
