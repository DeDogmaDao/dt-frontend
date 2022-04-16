import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../../../../hooks/useDimensions";
import { LinkType } from "../../../../types/allTypes";
import { mobileMenuAni } from "../../../../utils/animation";
import MobileMenuItem from "./MobileMenuItem";

interface props {
  headerLinks: LinkType[];
}
const MobileMenu: React.FC<props> = ({ headerLinks }) => {
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
        className="w-screen absolute top-0 right-0 bottom-0 bg-white"
      />
      <motion.ul className="absolute p-6 top-24 w-56">
        {headerLinks.map((link) => {
          return <MobileMenuItem link={link} />;
        })}
      </motion.ul>
      
    </motion.nav>
  );
};

export default MobileMenu;
