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


export const navHoverAni:Variants= {
  hidden: {
    width: 0,
    opacity:0,
    transition: {
      duration: 0.7,
    },
  },
  visible: {
    width: "130%",
    opacity:1,
    transition: {
      duration: 0.7,
    },
  }
}



export const gateLine2:any = {
  hidden:(custom:number)=> ({
    pathLength: 0,
    pathOffset: 1,
    transitionEnd:{
      strokeLinecap: "butt",
    },
    transition: { duration: custom, delay: 0, ease: "linear" },
  }),
  visible:(custom:number) =>( {
    pathLength: 1,
    pathOffset: 0,
    transitionEnd:{
      strokeLinecap: "square",
    },
    transition: { duration: custom, delay: 0, ease: "linear" },
  }),
};
