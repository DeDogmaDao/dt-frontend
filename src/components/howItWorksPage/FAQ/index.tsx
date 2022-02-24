import { LayoutGroup, motion, AnimateSharedLayout } from "framer-motion";
import { faqData } from "../../../store/allData";
import EachFAQ from "./EachFAQ";

const FAQ: React.FC = () => {
  return (
    <motion.ul
      layout
      className="flex flex-col justify-center items-center mx-auto w-full h-full bg-secondary-800/40 mt-96 gap-y-1 py-12"
    >
      <LayoutGroup >
        {faqData.map((data) => {
          return <EachFAQ key={data.question} data={data} />;
        })}
        </LayoutGroup>
    </motion.ul>
  );
};

export default FAQ;
