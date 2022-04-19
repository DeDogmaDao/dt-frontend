import Link from "next/link";

import Head from "next/head";
import { useRouter } from "next/router";
import EachLink from "./EachLink";
import { motion } from "framer-motion";
// types
import { LinkType } from "../../../types/allTypes";
import MobileMenu from "./MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

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
    {
      ref: "/faq",
      text: "FAQ",
    },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-[84px] z-[10000] pointer-events-none">
      <div className="flex justify-start items-center w-full h-full relative">
        <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-neutral-900 via-neutral-900/70 to-transparent " />
        <span className="absolute top-[35px] left-5 ssm:left-16 z-100 pointer-events-auto">
          <Link href="/">
            <div className="flex justify-start items-center gap-x-2">
              <img
                className="w-9 cursor-pointer"
                src="/img/logo/ddd-logo.png"
              />
              <span className="text-small-bold ssm:text-medium-bold md:hidden">
                Demmortal Treasure
              </span>
            </div>
          </Link>
        </span>
        <motion.ul className="absolute pointer-events-auto top-[35px] left-[114px] lg:left-[154px] hidden md:flex justify-start items-center gap-x-5 lg:gap-x-8 z-110">
          {headerLinks.map((headLink) => {
            return <EachLink key={headLink.ref} headLink={headLink} />;
          })}
        </motion.ul>
        <span className="absolute pointer-events-auto top-[32px] right-[72px] w-9 h-9 rounded-full bg-neutral-700 text-white text-xl flex justify-center items-center">
          <FontAwesomeIcon icon={faDiscord} />
        </span>
        <MobileMenu headerLinks={headerLinks} />
      </div>
    </div>
  );
};

export default Header;
