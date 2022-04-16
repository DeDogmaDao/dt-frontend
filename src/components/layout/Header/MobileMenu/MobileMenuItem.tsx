import { motion } from "framer-motion";
import Link from "next/link";
import { LinkType } from "../../../../types/allTypes";
import { menuItemAni } from "../../../../utils/animation";

interface props {
  link: LinkType;
}
const MobileMenuItem: React.FC<props> = ({ link }) => {
  return (
    <motion.li
    variants={menuItemAni}
    whileHover={{scale:1.05}}
    whileTap={{scale:0.95}}
    className="mb-5 flex justify-start cursor-pointer">
      <Link href={link.ref}>
        <div>{link.text}</div>
      </Link>
    </motion.li>
  );
};

export default MobileMenuItem;
