import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { LinkType } from "../../../../types/allTypes";
import { menuItemAni } from "../../../../utils/animation";

interface props {
  link: LinkType;
  cycleIsExpanded: () => void;
}
const MobileMenuItem: React.FC<props> = ({ link,cycleIsExpanded }) => {
    const router = useRouter();
  return (
    <motion.li
    onClick={cycleIsExpanded}
    variants={menuItemAni}
    whileHover={{scale:1.05}}
    whileTap={{scale:0.95}}
    className={`mb-5 flex justify-start cursor-pointer ${router.pathname === link.ref && "text-large-bold text-primary-500"}`}>
      <Link href={link.ref}>
        <div>{link.text}</div>
      </Link>
    </motion.li>
  );
};

export default MobileMenuItem;
