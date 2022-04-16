import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../../../../hooks/useDimensions";
import { mobileMenuAni } from "../../../../utils/animation";

const MobileMenu: React.FC = () => {
  const mobileMenuContainerRef = useRef(null);
  const [isExpanded, cycleIsExpanded] = useCycle(false, true);
  const dimension = useDimensions(mobileMenuContainerRef);
  return (
    <motion.nav
      initial={false}
      animate={isExpanded ? "opened" : "closed"}
      ref={mobileMenuContainerRef}
      custom={dimension.height}
      className="absolute top-0 right-0 bottom-0 w-80"
    >
      <motion.div
      variants={mobileMenuAni}

      className="w-screen absolute top-0 right-0 bottom-0 bg-white">

      </motion.div>
    </motion.nav>
  );
};

export default MobileMenu;
