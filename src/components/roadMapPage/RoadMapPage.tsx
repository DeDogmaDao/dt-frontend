import { motion } from "framer-motion";
import Road from "./Road";
const colors = ["#f542e9", "#5c485a", "#1b7a29"];

const RoadMapPage: React.FC = () => {

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top:0, bottom:-100}}
      dragElastic={0.5}
      dragTransition={{modifyTarget:(target)=>{
        console.log(target)
        return target *10
      }}}
      className="flex flex-col justify-start items-center w-full h-full"
    >
      {colors.map((color) => {
        return <Road color={color} />;
      })}
    </motion.div>
  );
};

export default RoadMapPage;
