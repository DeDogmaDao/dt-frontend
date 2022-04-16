import Link from "next/link";

import Head from "next/head";
import { useRouter } from "next/router";
import EachLink from "./EachLink";
import { motion } from "framer-motion";
// types
import { LinkType } from "../../../types/allTypes";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const headerLinks: LinkType[] = [
    {
      ref: "/",
      text: "Home",
    },
    {
      ref: "/#benefits",
      text: "Benefits",
    },
    {
      ref: "/#intro",
      text: "Intro",
    },
    {
      ref: "/#cards",
      text: "Cards",
    },
    {
      ref: "/roadmap",
      text: "Roadmap",
    },
    {
      ref: "/team",
      text: "Team",
    },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-[84px] z-100 ml-16 pt-9">
      <div className="flex justify-start items-center w-full h-full ">
        <Link href="/">
          <img src="/img/logo/ddd-logo.png" />
        </Link>
        {/* <motion.ul className="flex justify-start items-center ml-9 gap-x-8">
          {headerLinks.map((headLink) => {
            return <EachLink key={headLink.ref} headLink={headLink} />;
          })}
        </motion.ul> */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
