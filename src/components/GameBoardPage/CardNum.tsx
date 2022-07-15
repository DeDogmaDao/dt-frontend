import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface props {
  num?: number;
  styles: React.CSSProperties;
  layoutID: string;
  showHidden: boolean;
  transferNum: boolean;
}

const CardNum: React.FC<props> = ({
  num,
  styles,
  layoutID,
  showHidden,
  transferNum,
}) => {
  const [isShowing, setIsShowing] = useState(showHidden);
  useEffect(() => {
    if (transferNum === true && isShowing === showHidden) {
      setIsShowing((prevState) => !prevState);
    }
  }, [transferNum]);

  return (
    <>
      {isShowing && (
        <motion.div
          style={styles}
          layoutId={layoutID}
          className={`absolute ${
            showHidden === true &&
            "text-[0.5vw] flex justify-center items-center w-[1vw] h-[1vw]"
          }`}
        >
          {num}
        </motion.div>
      )}
    </>
  );
};

export default React.memo(CardNum);
