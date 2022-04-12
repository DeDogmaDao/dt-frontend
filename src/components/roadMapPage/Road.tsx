import { motion } from "framer-motion";

interface props {
  color:string;
}
const Road: React.FC<props> = ({color}) => {
  return (
    <motion.div className="w-screen h-screen">
      <div className="flex justify-between items-center w-full h-full">
          <div className="w-1/2 h-full " style={{backgroundColor:color}}></div>
          <div className="w-1/2 h-full bg-green-300"></div>
      </div>
    </motion.div>
  );
};

export default Road;
