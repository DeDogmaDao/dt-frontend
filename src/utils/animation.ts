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
    pathOffset: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  visible: {
    pathLength: 1,
    pathOffset: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const navHoverAni: Variants = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
  visible: {
    width: "130%",
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export const gateLine2: any = {
  hidden: (custom: number) => ({
    pathLength: 0,
    pathOffset: 1,
    transitionEnd: {
      strokeLinecap: "butt",
    },
    transition: { duration: custom, delay: 0, ease: "linear" },
  }),
  visible: (custom: number) => ({
    pathLength: 1,
    pathOffset: 0,
    transitionEnd: {
      strokeLinecap: "square",
    },
    transition: { duration: custom, delay: 0, ease: "linear" },
  }),
};

export const gameCardFirstAni: Variants = {
  hidden: {
    translateX: "1500px",
    translateY: "1500px",
    transition: {
      duration: 0.5,
    },
  },
  visible: (custom: number) => ({
    translateX: "0px",
    translateY: "0px",
    transition: {
      duration: 0.01,
      delay: custom * 0.1,
    },
  }),
};
export const newGameCardAni: Variants = {
  hidden: {
    x: -10,
    y: -10,
    transition: {
      duration: 0.5,
    },
  },
  visible: (custom: number) => ({
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      type: "spring",
    },
  }),
};

export const spellAni: Variants = {
  hidden: {
    translateX: "0px",
    translateY: "0px",
  },
  visible: (custom) => ({
    translateX: `${30 * (custom + 1)}px`,
    translateY: "150px",
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
    },
  }),
};

export const eachTabAni: Variants = {
  hidden: {
    width: "200%",
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    width: "100%",
    transition: {
      duration: 0.5,
    },
  },
  out: {
    width: "200%",
    transition: {
      duration: 0.5,
    },
  },
};
