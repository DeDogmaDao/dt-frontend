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
  visible: (custom: { cardIndex: number; styles: any }) => ({
    translateX: "0px",
    translateY: "0px",
    transition: {
      duration: 0.1,
      delay: custom.cardIndex * 0.1 + 2,
    },
  }),
  stage1: (custom: { cardIndex: number; styles: any }) => ({
    left: [custom.styles.left, "13.2vw", "14vw", "19vw","13vw"],
    z: [-0.1, -0.1,50, 100,0],
    scale: [1, 1.5,1.5, 2.5,2.5],
    top: [custom.styles.top, "-5.5vw","-5vw", "15vw","20vw"],
    rotateY: ["0deg", "0deg","0deg", "-90deg","-180deg"],
    transition: {
      duration: 0.7,
      times: [0, 0.3,0.5, 0.7,1],
      ease: "easeOut",
    },
  }),
  
  stage2:{
    left:["13vw","50vw"],
    rotateY:["0deg", "20deg"],
    scale:[1,0.3],
    transition: {
      duration: 0.7,
      times: [0, 1],
      ease: "easeOut",
    },
  }
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
    x: 0,
    y: 0,
    scale: 1,
  },
  visible: (custom) => ({
    x: [-50 * (custom.num % 3), 50 * (custom.num % 3), 0],
    y: [50 * (custom.num % 3), -50 * (custom.num % 3), 0],
    scale: [1.5, 2.5, 1],
    boxShadow: [
      `0px 0px 5px 5px ${custom.color}`,
      `0px 0px 2px 2px ${custom.color}`,
      `0px 0px 0px 0px ${custom.color}`,
    ],
    transition: {
      boxShadow: {
        times: [0.3, 0.6, 1],
        duration: 4,
      },
      default: {
        times: [0.3, 0.6, 1],
        duration: 2,
        delay: (custom.num % 3) * 0.3,
        type: "spring",
        stiffness: 300,
        mass: 5,
        damping: 30,
      },
    },
  }),
};

export const tabEachGroupAni: Variants = {
  hidden: {
    width: "50%",
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

export const tabGroupAni: Variants = {
  hidden: {
    rotateY: "0deg",
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
  right: {
    rotateY: "20deg",
    transition: {
      duration: 0.3,
    },
  },
  left: {
    rotateY: "-20deg",
    transition: {
      duration: 0.3,
    },
  },
};

export const tabBlastAni: Variants = {
  hidden: {
    scale: 0,
    opacity: 0.5,
  },
  visible: {
    scale: 3.5,
    opacity: 0,
    transition: {
      duration: 0.8,
      delay: 0,
      ease: [0.45, 0.73, 0.4, 0.9],
    },
  },
};

// page: howItWorks / comp: Tabs
export const tabImageContainerAni: Variants = {
  hidden: {
    translateY: -200,
    opacity: 0.2,
  },
  visible: {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  out: {
    translateY: 200,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
export const tabDescContainerAni: Variants = {
  hidden: {
    translateX: 200,
    opacity: 0.2,
  },
  visible: {
    translateX: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
  out: {
    translateX: -50,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
export const tabImageAni: Variants = {
  hidden: (custom) => ({
    height: 0,
    opacity: 0.2,
  }),
  visible: (custom) => ({
    height: "100%",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  }),
};

export const spellCounterAni: Variants = {
  hidden: {
    translateY: 100,
  },
  visible: {
    translateY: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  out: {
    translateY: -100,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
export const calcFadeAni: Variants = {
  hidden: {
    opacity: 0,
  },
  visible:(custom)=> ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3 * custom,
      ease: "easeInOut",
    },
  }),
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
export const calcFirstResultAni: Variants = {
  hidden: (custom) => ({
    opacity: custom,
  }),
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 1,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
export const calcCardSideAni:Variants = {
  hidden: {
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{
      duration:1,
      delay:7
    }
  }
}
// export const calcFirstResultAni: Variants = {
//   hidden: {
//     opacity: 0,
//     left:"15vw",
//     top:"0vw",
//   },
//   visible: {
//     opacity: [0,1,1,1] ,
//     left:["15vw","15vw","0vw","0vw"],
//     top:["0vw","0vw","2.5vw","2.5vw"],
//       transition: {
//         times:[0,0.3,0.8,1],
//       duration: 2.5,
//       delay:1,
//     },
//   },
//   out: {
//     opacity: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//     },
//   },
// };
