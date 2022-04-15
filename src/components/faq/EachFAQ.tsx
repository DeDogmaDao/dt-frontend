import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import { faqType } from "../../types/allTypes";

interface props {
  data: faqType;
}

const EachFAQ: React.FC<props> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.li
      layout
      className="w-9/12 flex flex-col justify-center items-center group"
    >
      <motion.div
        layout
        className="w-full flex justify-between items-center rounded-3xl px-5 !h-24 cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <h3 className="text-3xl duration-500 group-hover:text-secondary-200">
          {data.question}
        </h3>
        <span
          className={`bg-secondary-500 text-white text-2xl rounded-full !h-16 !w-16 !min-w-[64px] ml-3 flex justify-center items-center duration-500 group-hover:rotate-90 group-hover:bg-secondary-400
          ${isExpanded ? "!rotate-45" : ""}`}
        >
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </motion.div>
      {isExpanded && (
        <motion.p
          layout
          className="self-start text-lg ml-10 py-5 duration-1000 text-secText"
        >
          {data.answer}
        </motion.p>
      )}
      <motion.div layout className="h-px w-10/12 bg-disabled"></motion.div>
    </motion.li>
  );
};

export default EachFAQ;
