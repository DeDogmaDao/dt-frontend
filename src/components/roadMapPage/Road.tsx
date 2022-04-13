import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface props {
  color: string;
  index: number;
  activeSection: number;
}
const Road: React.FC<props> = ({ color, index, activeSection }) => {
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    setClientHeight(window.innerHeight);
  }, []);

  return (
    <motion.div
      className="w-screen h-screen absolute left-0 duration-700"
      style={{ top: clientHeight * (index - activeSection) }}
    >
      <div className="flex justify-between items-center w-full h-full">
        <div className="w-1/2 h-full" ></div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <ul className="w-[416px] p-8 ">

          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Road;
