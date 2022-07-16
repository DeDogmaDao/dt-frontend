import { motion } from "framer-motion";

const Diamond:React.FC = () => {

    return (
        <motion.div className="w-[1.8vw] h-[3vw] absolute top-[2.55vw] right-[32.4vw] z-100 hover:-hue-rotate-[105deg]">
            <img 
            className="w-full h-full"
             src="/img/game/diamond.png" />
        </motion.div>
    )
}

export default Diamond;