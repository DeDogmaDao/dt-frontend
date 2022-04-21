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
      ref: "/#cards",
      text: "Cards",
    },
    {
      ref: "/roadmap",
      text: "Roadmap",
    },
    {
      ref: "/faq",
      text: "FAQ",
    },
    {
      ref: "/team",
      text: "Team",
    },
  ];

  return (
    <div className=" w-full h-[5.25rem] z-[10000] pointer-events-none">
      <div className="flex justify-start items-center w-full h-full relative">
        <div
          className="absolute top-0 left-0 w-full h-[7.5rem] "
          style={{
            background:
              "linear-gradient(180deg, #15161C 0%, #0B0C18 39.92%, rgba(20, 20, 28, 0) 100%)",
            filter: "blur(70px)",
            backdropFilter: "blur(138px)",
          }}
        />
        <span className="absolute top-[2.1875rem]  left-5 ssm:left-16 z-100 pointer-events-auto">
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
        <motion.ul className="absolute pointer-events-auto top-[2.565rem] mt-[-.3rem] 2xl:mt-0 left-[7.125rem] lg:left-[9.625rem] hidden md:flex justify-start items-center gap-x-5 lg:gap-x-8 z-110">
          {headerLinks.map((headLink) => {
            return <EachLink key={headLink.ref} headLink={headLink} />;
          })}
        </motion.ul>
        <span className="absolute pointer-events-auto top-[2rem] right-[4.5rem] w-9 h-9 rounded-full bg-neutral-700 text-white text-xl flex justify-center items-center">
          <img src= alt="" />
        </span>
        <MobileMenu headerLinks={headerLinks} />
      </div>
    </div>
  );
};

export default Header;
