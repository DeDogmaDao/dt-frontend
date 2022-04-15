import { LayoutGroup, motion } from "framer-motion";
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
      <motion.ul
        layout
        className="flex flex-col justify-center items-center mx-auto w-full h-full bg-secondary-800/40 mt-96 gap-y-1 py-12"
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
