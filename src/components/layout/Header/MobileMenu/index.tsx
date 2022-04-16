import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../../../../hooks/useDimensions";
import { LinkType } from "../../../../types/allTypes";
import { mobileMenuAni, navBodyAni } from "../../../../utils/animation";
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
      className="absolute top-0 right-0  w-screen h-screen"
    >
      <motion.div
        variants={mobileMenuAni}
        className="w-full absolute top-0 right-0 bottom-0 bg-neutral-700"
      />
      <motion.ul className="absolute  top-24 left-9 w-56 text-large-light" variants={navBodyAni}>
        {headerLinks.map((link) => {
          return <MobileMenuItem link={link} />;
        })}
      </motion.ul>
      <MenuToggle cycleIsExpanded={cycleIsExpanded} />
    </motion.nav>
  );
};

export default MobileMenu;
