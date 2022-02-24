import { Variants } from "framer-motion";

export const socialAni: Variants = {
  hidden: {
    scale: 0,

    transition: {
      duration: 0.5,
      ease: [0.95, 0.32, 0.37, 1.21],
    },
  },
  visible: {
    scale: 1,

    transition: {
      duration: 0.5,
      ease: [0.95, 0.32, 0.37, 1.21],
    },
  },
};

export const discordBtnAni: Variants = {
  hidden: {
    pathLength: 0,
    pathOffset:0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  visible: {
    pathLength: 1,
    pathOffset:1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
