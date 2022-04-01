import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import { faqType } from "../../../types/propTypes";

interface props {
  data: faqType;
}

const EachFAQ: React.FC<props> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.li
      layout
      className="w-9/12 flex flex-col justify-center items-center  cursor-pointer group"
      onClick={() => setIsExpanded((prev) => !prev)}
    >
      <motion.div
        layout
        className="w-full flex justify-between items-center rounded-3xl px-5 !h-24"
      >
        <h3 className="text-3xl duration-500 group-hover:text-primary-200">
          {data.question}
        </h3>
        <span
          className={`bg-primary-500 text-black text-2xl rounded-full !h-16 !w-16 !min-w-[64px] ml-3 flex justify-center items-center duration-500 group-hover:rotate-90 group-hover:bg-primary-400
          ${isExpanded ? "!rotate-45" : ""}`}
        >
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </motion.div>
      {isExpanded && (
        <motion.p
          layout
          className="self-start text-lg ml-10 py-5 duration-1000"
        >
          {data.answer}
        </motion.p>
      )}
    </motion.li>
  );
};

export default EachFAQ;
