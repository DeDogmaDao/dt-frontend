import { motion } from "framer-motion";
import { pageAnimation } from "../../utils/animation";



const FAQ:React.FC = () => {


    return(
        <motion.div
        initial="hidden"
        animate="visible"
        variants={pageAnimation}
        exit="out"
        className="w-screen min-h-screen relative pb-32"
      ></motion.div>
    )
}

export default FAQ;