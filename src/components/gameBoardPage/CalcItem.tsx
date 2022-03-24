import { motion, Variants } from "framer-motion";
interface props {
  tailwindClasses: string;
  framerVariant: Variants;
  framerCustom?: any;
  framerLayoutId?: string;
}

const CalcItem: React.FC<props> = ({
  children,
  framerVariant,
  framerCustom,
  tailwindClasses,
  framerLayoutId,
}) => {
  return (
    <motion.div
      layoutId={framerLayoutId}
      initial="hidden"
      animate="visible"
      exit="out"
      variants={framerVariant}
      custom={framerCustom}
      className={`absolute text-center ${tailwindClasses}`}
    >
      <div className="w-full h-full relative flex justify-center items-center">
        {children}
      </div>
    </motion.div>
  );
};

export default CalcItem;
