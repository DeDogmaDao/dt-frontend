import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface props {
  num?: number;
  styles: React.CSSProperties;
  layoutID: string;
  showHidden: boolean;
}

const CardNum: React.FC<props> = ({ num, styles, layoutID, showHidden }) => {
  const [isShowing, setIsShowing] = useState(showHidden);
  const [once, setOnce] = useState(false);

  useEffect(() => {
    
    setTimeout(() => {
      setIsShowing((prevState)=>!prevState)
    }, 2000);

  }, [])
  
  
  return (
    <>
      {isShowing && (
        <motion.div style={styles} layoutId={layoutID} className="absolute ">
          {num}
        </motion.div>
      )}
    </>
  );
};

export default CardNum;
