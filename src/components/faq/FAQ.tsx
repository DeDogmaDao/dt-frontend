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
      className="w-screen min-h-screen relative pb-32 flex flex-col justify-center items-center"
    >
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <Image
          src={"/img/team/team-bg.png"}
          width="1438"
          height="1128"
          layout="responsive"
        />
      </div>
      <h3 className="z-10 mt-44">Frequently Asked Questions</h3>
      <motion.ul className="flex flex-col justify-center items-center mx-auto w-[63%] h-full rounded-xl  gap-y-1 py-12 z-10 bg-neutral-500 mt-14">
        <LayoutGroup>
          {faqData.map((data) => {
            return <EachFAQ key={data.question} data={data} />;
          })}
        </LayoutGroup>
      </motion.ul>
    </motion.div>
  );
};

export default FAQ;
