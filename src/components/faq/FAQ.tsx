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
      className="w-screen min-h-screen relative pb-32"
    >
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <Image
          src={"/img/team/team-bg.png"}

          layout="fill"
        />
      </div>
      <motion.ul
        layout
        className="flex flex-col justify-center items-center mx-auto w-full h-full  gap-y-1 py-12 z-10"
      >
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
