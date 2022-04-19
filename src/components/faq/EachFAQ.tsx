import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
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
    <motion.li layout className="w-[96%] sm:w-11/12 group z-10 rounded-lg overflow-hidden shadow-md hover:shadow-inner">
      <div
        className="w-full h-full flex flex-col justify-center items-center z-10 hover:bg-neutral-700 duration-500"
      >
        <motion.div
          layout
          className="w-full flex justify-between items-center px-1 sm:px-5 min-h-14 py-3 sm:py-0 cursor-pointer text-medium-medium "
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <div className="flex gap-x-2 items-center">
            <span className="w-px h-2 bg-yellow-300 duration-500 group-hover:h-6 group-hover:w-px" />
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <span>{data.question}</span>
          </div>
          <span
            className={`bg-secondary-500 text-white rounded-full !h-16 !w-16 !min-w-[64px] ml-3 
            flex justify-center items-center  group-hover:rotate-90 group-hover:bg-secondary-400 duration-500
          ${isExpanded ? "!rotate-45" : ""}`}
          >
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </motion.div>
        {isExpanded && (
          <motion.p
            layout
            className="self-start text-lg ml-10 py-5 text-medium-light  text-secText"
          >
            {data.answer}
          </motion.p>
        )}
        <motion.div layout className="h-px w-10/12 bg-disabled"></motion.div>
      </div>
    </motion.li>
  );
};

export default EachFAQ;
