import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../../../../hooks/useDimensions";
import { LinkType } from "../../../../types/allTypes";
import { mobileMenuAni, navBodyAni } from "../../../../utils/animation";
import MenuToggle from "./MenuToggle";
import MobileMenuItem from "./MobileMenuItem";
import { footerData } from "../../../../store/allData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
        className="w-full absolute top-0 right-0 bottom-0 "
      />
      <motion.ul
        className="absolute  top-24 left-9 w-56 text-large-light"
        variants={navBodyAni}
      >
        {headerLinks.map((link) => {
          return (
            <MobileMenuItem link={link} cycleIsExpanded={cycleIsExpanded} />
          );
        })}
      </motion.ul>
      <MenuToggle cycleIsExpanded={cycleIsExpanded} />
      <motion.div className="absolute bottom-10 left-0 w-screen h-[100px] flex flex-col justify-center items-center gap-y-6">
        <ul className="flex justify-center items-center w-full h-1/2 gap-x-3">
          {footerData.map((social) => {
            return (
              <a href={social.href} target="_blank">
                <li className="w-8 h-8 rounded-full bg-neutral-700 text-white text-base flex justify-center items-center cursor-pointer">
                  <FontAwesomeIcon icon={social.icon} />
                </li>
              </a>
            );
          })}
        </ul>
        <p className="text-[10px]">&copy; COPYWRITES 2022 DDD. ALL RIGHTS RESERVED</p>
      </motion.div>
    </motion.nav>
  );
};

export default MobileMenu;
