import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface props {
  data: { title: string; desc: string };
  setDesc: Dispatch<SetStateAction<string>>;
}

const RoadItem: React.FC<props> = ({ data, setDesc }) => {
  const descriptionHoverHandler = () => {
    setDesc((prevState) => {
      if (prevState === data.desc) {
        return prevState;
      }
      return "";
    });
    setTimeout(() => {
      setDesc(prevState=>{
          if(prevState===""){
              return data.desc
          }
          return prevState
      });
    }, 100);
  };

  return (
    <motion.li
      onHoverStart={descriptionHoverHandler}
      className="w-full flex justify-start items-start gap-3 text-medium-medium hover:text-primary-500"
    >
      <span className="text-xl">
        <FontAwesomeIcon icon={faAngleRight} />
      </span>
      <p>{data.title}</p>
    </motion.li>
  );
};

export default RoadItem;
