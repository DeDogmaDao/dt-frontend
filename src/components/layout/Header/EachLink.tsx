import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navHoverAni } from "../../../utils/animation";

export interface Links {
  ref: string;
  text: string;
  hovered: boolean;
}

interface props {
  headLink: Links;
  navHovered: boolean;
  navHovering: (order: boolean) => void;
}
const EachLink: React.FC<props> = ({ headLink, navHovered, navHovering }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const condition =
    (router.pathname === headLink.ref && !navHovered) || isHovered;

  const hoverStartHandler = () => {
    setIsHovered(true);
    navHovering(true);
  };
  const hoverEndHandler = () => {
    setIsHovered(false);
    navHovering(false);
  };
  return (
    <motion.li
      key={headLink.text}
      onHoverStart={hoverStartHandler}
      onHoverEnd={hoverEndHandler}
    >
      <Link href={headLink.ref}>
        <a
          className={`${
            router.pathname === headLink.ref
              ? "text-secondary-100"
              : "text-white"
          }`}
        >
          {headLink.text}
        </a>
      </Link>
    </motion.li>
  );
};

export default EachLink;
