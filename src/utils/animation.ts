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
    rotateY: "0deg",
    transition: {
      duration: 0.5,
    },
  },
  visible: (custom: { cardIndex: number; styles: any }) => ({
    translateX: "0px",
    translateY: "0px",
    rotateY: "180deg",
    transition: {
      duration: 0.1,
      delay: custom.cardIndex * 0.1 + 2,
    },
  }),
  stage1: (custom: { cardIndex: number; styles: any }) => ({
    left: [custom.styles.left, "13.2vw", "14vw", "13vw", "13vw"],
    z: [-0.1, -0.1, 50, 100, 0],
    scale: [1, 1.5, 1.5, 2.5, 2.5],
    top: [custom.styles.top, "-5.5vw", "-5vw", "19vw", "20vw"],
    rotateY: ["180deg", "180deg", "180deg", "270deg", "360deg"],
    transition: {
      duration: 0.8,
      times: [0, 0.3, 0.5, 0.7, 1],
      ease: "easeOut",
    },
  }),

  stage2: (custom) => {
    // const scaleXValues = custom.spellGroup === "yellow" ? 0.2 : 0.2;
    // const scaleYValues = custom.spellGroup === "yellow" ? 0.2 : 0.2;
    const midLineFirstRow = 1016;
    const midLineSecondtRow = 1000;
    const midLineThirdtRow = 992;
    const convertToVW = (1 / 1920) * 100;
    const styleFn = (
      devide: number,
      reset: number,
      midLine: number,
      gapX: number,
      left: boolean,
      scale: number,
      translateY: number,
      rotateX: number,
      translateZ: number = 0
    ) => {
      const translateXValue = left
        ? (midLine -
            (((custom.spellNumber.yellowCardCount - reset - 1) % devide) + 1) *
              gapX) *
          convertToVW
        : (midLine +
            5 +
            ((custom.spellNumber.blueCardCount - reset - 1) % devide) * gapX) *
          convertToVW;
      const scaleValue = scale;
      const translateYValue = translateY;
      const rotateXValue = rotateX;
      const translateZValue = translateZ;
      return [
        translateXValue,
        translateYValue,
        rotateXValue,
        scaleValue,
        translateZValue,
      ];
    };
    let transX = 0,
      transY = 0,
      transZ = 0,
      scales = 0,
      rotates = 0;

    if (custom.spellGroup === "yellow") {
      if (custom.spellNumber.yellowCardCount <= 8) {
        [transX, transY, rotates, scales] = styleFn(
          8,
          0,
          midLineFirstRow,
          75,
          true,
          0.7,
          22,
          95
        );
      }
      if (
        custom.spellNumber.yellowCardCount <= 20 &&
        custom.spellNumber.yellowCardCount > 8
      ) {
        [transX, transY, rotates, scales, transZ] = styleFn(
          13,
          8,
          midLineSecondtRow,
          43,
          true,
          0.4,
          20.5,
          110,
          -1.5
        );
      }
      if (
        custom.spellNumber.yellowCardCount <= 36 &&
        custom.spellNumber.yellowCardCount > 20
      ) {
        [transX, transY, rotates, scales, transZ] = styleFn(
          16,
          20,
          midLineThirdtRow,
          23,
          true,
          0.2,
          20,
          135,
          -3.5
        );
      }
    }
    if (custom.spellGroup === "blue") {
      if (custom.spellNumber.blueCardCount <= 8) {
        [transX, transY, rotates, scales] = styleFn(
          8,
          0,
          midLineFirstRow,
          75,
          false,
          0.7,
          22,
          95
        );
      }
      if (
        custom.spellNumber.blueCardCount <= 20 &&
        custom.spellNumber.blueCardCount > 8
      ) {
        [transX, transY, rotates, scales, transZ] = styleFn(
          13,
          8,
          midLineSecondtRow,
          43,
          false,
          0.4,
          20.5,
          110,
          -1.5
        );
      }
      if (
        custom.spellNumber.blueCardCount <= 36 &&
        custom.spellNumber.blueCardCount > 20
      ) {
        [transX, transY, rotates, scales, transZ] = styleFn(
          16,
          20,
          midLineThirdtRow,
          23,
          false,
          0.2,
          20,
          135,
          -3.5
        );
      }
    }

    return {
      translateX: transX + "vw",
      translateY: transY + "vw",
      translateZ: transZ + "vw",
      rotateX: rotates + "deg",
      rotateY: "0deg",
      scale: scales,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    };
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
export const tabImageButtomAni: Variants = {
  hidden: {
    rotate: "0deg",
  },
  visible: {
    rotate: "180deg",
    transition: {
      duration: 1.5,
      ease: "easeOut",
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
  visible: (custom)=>({
    translateY: 0,
    transition: {
      duration: custom,
      ease: "easeOut",
    },
  }),
  out: (custom)=>({
    translateY: -100,
    transition: {
      duration: custom,
      ease: "easeOut",
    },
  }),
};
export const calcFadeAni: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
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
export const calcCardSideAni: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 7,
    },
  },
};

export const doorRingAni: Variants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      delay: 5,
    },
  },
};

export const doorToRightAnimation: Variants = {
  hidden: {
    translateX: "0vw",
  },
  visible: {
    translateX: "8vw",
    transition: {
      duration: 3,
      mass: 10,
      ease: "easeIn",
    },
  },
};
export const doorToLefttAnimation: Variants = {
  hidden: {
    translateX: "0vw",
    scaleX: "-1",
  },
  visible: {
    translateX: "-8vw",
    transition: {
      duration: 3,
      mass: 10,
      ease: "easeIn",
    },
  },
};
