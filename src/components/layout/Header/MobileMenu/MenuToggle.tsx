import { motion } from "framer-motion";
import Path from "./Path";

interface props {
  cycleIsExpanded: () => void;
}

const MenuToggle: React.FC<props> = ({ cycleIsExpanded }) => {
  return (
    <button onClick={cycleIsExpanded}
    className="select-none outline-none border-none no-select-a-tag cursor-pointer absolute top-[29px] right-[37px] w-7 h-7 p-3 rounded-full bg-transparent">
      <svg width={23} height={23} viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            opened: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            opened: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            opened: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default MenuToggle;
