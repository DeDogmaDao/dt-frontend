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

export const gameCardAni: Variants = {
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
      duration: 0.1,
      delay: custom * 0.1 + 2,
    },
  }),
  stage1: {
    left: 100,
    top: "70%",
    transition: {
      duration: 0.5,
    },
  },
};
export const newGameCardAni: Variants = {
  hidden: (custom) => ({
    rotateX: "0deg",
    rotateZ: "0deg",
    rotateY: "0deg",
    transition: {
      duration: 0.5,
    },
  }),
  visible: (custom: number) => ({
    x: 0,
    y: custom,
    z: custom * 2,
    rotateX: "25deg",
    rotateZ: "-25deg",
    scale: 0.5,
    transition: {
      duration: 0.5,
      delay: 0.1,
      type: "keyframes",
    },
  }),
};

export const spellAni: Variants = {
  hidden: {
    x: -90,
    y: -90,
    scale: 1,
  },
  visible: (custom) => ({
    x: 0,
    y: 0,
    scale: [2, 3, 1],
    boxShadow: [
      `0px 0px 5px 5px ${custom.color}`,
      `0px 0px 2px 2px ${custom.color}`,
      `0px 0px 0px 0px ${custom.color}`,
    ],
    transition: {
      boxShadow: {
        times: [0.5, 0.5, 0.9],
        duration: 4,
      },
      default: {
        times: [0.1, 0.9, 0.2],
        duration: 2,
        delay: custom.num * 0.3,
        type: "spring",
        stiffness: 300,
        mass: 5,
        damping: 30,
      },
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

export const tabImageContainerAni: Variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      delay:0.2
    },
  },
  out: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
