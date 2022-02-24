import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialType } from "../../../types/propTypes";
import { motion } from 'framer-motion';
import { useState } from "react";
interface props {
    data:socialType;
}
const Social:React.FC<props> = ({data}) => {
    // const [isHovering, setIsHovering] = useState(false);

    return(
        <motion.li className="text-xl hover:text-primary-400 hover:scale-125 duration-700 flex justify-center items-center relative">
        <motion.div className="w-10 h-10 rounded-full bg-red-400  absolute left-0 top-0"></motion.div>
        <a href={data.href} target="_blank">
          <FontAwesomeIcon icon={data.icon} />
        </a>
      </motion.li>
    );
}


export default Social;