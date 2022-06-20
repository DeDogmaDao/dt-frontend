
import { motion } from "framer-motion";
import { useState } from "react";
import { PlusSVG } from "../../store/svg";
import { faqType } from "../../types/allTypes";

interface props {
  data: faqType;
}

const EachFAQ: React.FC<props> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.li layout className="w-[96%] sm:w-11/12 group z-10 rounded-lg overflow-hidden shadow-md hover:shadow-inner will-change-transform">
      <div
        className="w-full h-full flex flex-col justify-center items-center z-10 hover:bg-neutral-700 duration-500 will-change-transform"
      >
        <motion.div
          layout
          className="w-full flex justify-between items-center px-1 sm:px-5 min-h-14 py-3 sm:py-0 cursor-pointer text-medium-medium 2xl:text-large-medium  will-change-transform"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <div className="flex gap-x-2 items-center will-change-transform">
            <span className="w-px h-2 bg-primary-500 duration-500 group-hover:h-6 group-hover:w-px will-change-transform" />
            <span className="font-medium">{data.question}</span>
          </div>
          <span
            className={` text-white rounded-full !h-16 !w-16 !min-w-[4rem] ml-3  will-change-transform
            flex justify-center items-center  group-hover:rotate-90  duration-500
          ${isExpanded ? "!rotate-45" : ""}`}
          >
            <span className="w-4 fill-white will-change-transform"><PlusSVG /></span>
          </span>
        </motion.div>
        {isExpanded && (
          <motion.p
            layout
            className="self-start text-lg ml-10 py-5 pr-6 text-medium-light font-thin will-change-transform"
          >
            {data.answer}
          </motion.p>
        )}
        <motion.div layout className="h-px w-10/12 bg-disabled will-change-transform"></motion.div>
      </div>
    </motion.li>
  );
};

export default EachFAQ;
