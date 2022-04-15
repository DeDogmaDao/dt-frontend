import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { LinkType } from "../../../types/allTypes";



interface props {
  headLink: LinkType;
}
const EachLink: React.FC<props> = ({ headLink,  }) => {
  const router = useRouter();


  return (
    <motion.li
    className="text-large-light text-neutral-50/30"
      key={headLink.text}
    >
      <Link href={headLink.ref}>
        <a
          className={`${
            router.pathname === headLink.ref
              ? "text-large-bold text-white"
              : ""
          }`}
        >
          {headLink.text}
        </a>
      </Link>
    </motion.li>
  );
};

export default EachLink;
