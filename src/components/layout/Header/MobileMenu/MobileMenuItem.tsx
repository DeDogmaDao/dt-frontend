import { motion } from "framer-motion";
import Link from "next/link";
import { LinkType } from "../../../../types/allTypes";

interface props {
  link: LinkType;
}
const MobileMenuItem: React.FC<props> = ({ link }) => {
  return (
    <motion.li
    className="mb-5 flex justify-start cursor-pointer">
      <Link href={link.ref}>
        <div>{link.text}</div>
      </Link>
    </motion.li>
  );
};

export default MobileMenuItem;
