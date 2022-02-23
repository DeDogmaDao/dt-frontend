import Link from "next/link";

import Head from "next/head";
import { useRouter } from "next/router";
import EachLink from "./EachLink";
import { motion } from "framer-motion";
// types
import { Links } from "./EachLink";
import { useCallback, useState } from "react";

const Header: React.FC = () => {
  const [navHovered, setNavHovered] = useState<boolean>(false);
  const navHovering = useCallback(
    (order) => {
      setNavHovered(order);
    },
    [setNavHovered]
  );

  const headerLinks: Links[] = [
    {
      ref: "/",
      text: "Home",
      hovered: false,
    },
    {
      ref: "/profile",
      text: "My Profile",
      hovered: false,
    },
    {
      ref: "/hiw",
      text: "How It Works",
      hovered: false,
    },
    {
      ref: "/gallery",
      text: "All NFTS",
      hovered: false,
    },
  ];

  return (
    <>
      <div className="header-container">
        <h1>
          <Link href="/">Nepolia</Link>
        </h1>
        <motion.ul
        >
          {headerLinks.map((headLink) => {
            return (
              <EachLink
                key={headLink.ref}
                headLink={headLink}
                navHovered={navHovered}
                navHovering={navHovering}
              />
            );
          })}
        </motion.ul>
      </div>
    </>
  );
};

export default Header;
