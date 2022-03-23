import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface props {
  num?: number;
  styles: React.CSSProperties;
  layoutID: string;
  showHidden: boolean;
  transferNum: boolean;
}

const CardNum: React.FC<props> = ({ num, styles, layoutID, showHidden,transferNum }) => {
  const [isShowing, setIsShowing] = useState(showHidden);
  const [once, setOnce] = useState(false);

  useEffect(() => {
    
    if(transferNum===true){
      setIsShowing((prevState)=>!prevState)
    }
    

  }, [transferNum])
  
  
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
