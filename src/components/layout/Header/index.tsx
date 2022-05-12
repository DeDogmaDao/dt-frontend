import Link from "next/link";

import EachLink from "./EachLink";
import { motion } from "framer-motion";
// types
import { LinkType } from "../../../types/allTypes";
import MobileMenu from "./MobileMenu";
import { socialSVGs } from "../../../store/svg";
import { LogoSVG } from "../../../store/svg";
import { discordLink, gitbookLink } from "../../../store/allLinks";

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
    <div className="absolute top-0 left-0 w-full h-[5.25rem] z-[10000] pointer-events-none">
      <div className="flex justify-start items-center w-full h-full relative">
        <div className="absolute top-0 left-0 w-full h-[7.5rem] bg-gradient-to-b from-[#090919] via-[#090919]/50 to-transparent " />
        <span className="absolute top-[2.3rem]  left-5 ssm:left-16 z-100 pointer-events-auto cursor-pointer">
          <Link href="/">
            <div className="flex justify-start items-center gap-x-2 fill-white hover:fill-primary-500 duration-300">
              <LogoSVG width="2.5rem" />
              <span className="text-small-bold ssm:text-medium-bold hidden sm:block md:hidden ">
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
        <a
          href={gitbookLink}
          target="_blank"
          className="z-50 pointer-events-auto absolute top-[2rem] right-[7.7rem] px-2 ssm:w-[8.5rem] h-10 rounded-full bg-neutral-600 text-white text-sm font-bold 
    flex justify-evenly items-center hover:bg-neutral-500 duration-200 fill-primary-500 hover:fill-primary-700 cursor-pointer"
        >
          <span className=" ">
            <socialSVGs.GitBookSVG width={26} />
          </span>
          <span>Litepaper</span>
        </a>
        <a
          href={discordLink}
          target="_blank"
          className="z-50 absolute cursor-pointer pointer-events-auto top-[2rem] right-[4.5rem] w-10 h-10 rounded-full bg-neutral-600
         text-white text-xl flex justify-center items-center hover:bg-neutral-500 duration-200 fill-primary-500 hover:fill-primary-700"
        >
          <socialSVGs.DiscordSVG width={26} />
        </a>
        <MobileMenu headerLinks={headerLinks} />
      </div>
    </div>
  );
};

export default Header;
