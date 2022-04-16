import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../../../../hooks/useDimensions";
import { LinkType } from "../../../../types/allTypes";
import { mobileMenuAni } from "../../../../utils/animation";
import MenuToggle from "./MenuToggle";
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
      className="absolute top-0 right-0 bottom-0 w-screen h-screen"
    >
      <motion.div
        variants={mobileMenuAni}
        className="w-full absolute top-0 right-0 bottom-0 bg-white"
      />
      <motion.ul className="absolute  top-24 w-56">
        {headerLinks.map((link) => {
          return <MobileMenuItem link={link} />;
        })}
      </motion.ul>
      <MenuToggle cycleIsExpanded={cycleIsExpanded} />
    </motion.nav>
  );
};

export default MobileMenu;
