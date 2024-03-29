import { Variants } from "framer-motion";
import { colorSpell } from "./game";

export const pageAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.7,
    },
  },
  out: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.5 },
  },
};

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
      duration: 0.5,
      delay: custom.cardIndex * 0.1 + 2,
    },
  }),
  stage1: (custom: { cardIndex: number; styles: any }) => ({
    left: [custom.styles.left, "13.2vw", "14vw", "13vw", "13vw"],
    z: [-0.1, -0.1, 50, 100, 0],
    scale: [1, 1.5, 1.5, 2.5, 2.5],
    top: [custom.styles.top, "-5.5vw", "-5vw", "19vw", "22vw"],
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
          19.5,
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
          18,
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
          17.5,
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
          19.5,
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
          18,
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
          17.5,
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
    scale: [1.5, 2, 1],
    boxShadow: [
      `0px 0px 3px 3px ${custom.color}`,
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
export const eachTabAni: Variants = {
  hidden: {
    width: "200%",
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    width: "100%",
    transition: {
      duration: 0.4,
    },
  },
  out: {
    width: "200%",
    transition: {
      duration: 0.3,
    },
  },
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

export const carouselDisplayAni: Variants = {
  hidden: ({ cardPlace, innerWidth }) => {
    if (innerWidth < 1280) {
      return {
        left: 50 + cardPlace * 70 + "%",
        scale: 1 - 0.8 * Math.abs(cardPlace),
        opacity: 0.3,
      };
    } else {
      return {
        left: -30 + cardPlace * 30 + "rem",
        scale: cardPlace / 1.5,
        opacity: 0.3,
      };
    }
  },
  visible: ({ cardPlace, innerWidth, tabGroup }) => {
    if (innerWidth < 1280) {
      return {
        scale: 1 - 0.4 * Math.abs(cardPlace),
        left: 50 + cardPlace * 35 + "%",
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      };
    } else {
      if (tabGroup === "humans") {
        return {
          scale: 1 + 0.25 * (cardPlace - 2),
          left: -2 + cardPlace * 9 * (1 + 0.25 * (cardPlace - 2)) + "rem",
          opacity: 1,
          zIndex: 200 + (cardPlace - 2),
          transition: {
            duration: 0.4,
          },
        };
      } else {
        return {
          scale: 1 + 0.1 * (cardPlace - 2),
          left: cardPlace * 8 * (1 + 0.1 * (cardPlace - 2)) + "rem",
          opacity: 1,
          zIndex: 200 + (cardPlace - 2),
          transition: {
            duration: 0.4,
          },
        };
      }
    }
  },
  out: ({ cardPlace, innerWidth }) => {
    if (innerWidth < 1280) {
      return {
        left: 50 + cardPlace * 70 + "%",
        scale: 0,
        opacity: 0,
        transition: {
          duration: 0.2,
        },
      };
    } else {
      return {
        left: -30 + cardPlace * 60 + "rem",
        scale: cardPlace,
        opacity: 0,
        transition: {
          duration: 0.2,
        },
      };
    }
  },
};

export const tabInfoContainerAni: Variants = {
  hidden: ({ innerWidth }) => {
    if (innerWidth < 1280) {
      return {
        y: -600,
        opacity: 0,
        scale: 0,
      };
    } else {
      return {
        x: -50,
        opacity: 0,
      };
    }
  },
  visible: ({ innerWidth }) => {
    if (innerWidth < 1280) {
      return {
        y: 0,
        opacity: [0, 0.7, 1],
        scale: [0, 0.3, 1],
        transition: {
          duration: 0.4,
          delay: 0.15,
          times: [0, 0.5, 1],
          ease: "easeIn",
        },
      };
    } else {
      return {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 0.15,
        },
      };
    }
  },
  out: ({ innerWidth }) => {
    if (innerWidth < 1280) {
      return {
        opacity: 0,
        y: 50,
        transition: {
          duration: 0.4,
        },
      };
    } else {
      return {
        opacity: 0,
        x: 50,
        transition: {
          duration: 0.4,
        },
      };
    }
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

export const tabFrameAni: Variants = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 0.7,
      times: [0, 0.3, 1],
    },
  },
};

export const spellCounterAni: Variants = {
  hidden: {
    translateY: 100,
  },
  visible: (custom) => ({
    translateY: 0,
    transition: {
      duration: custom,
      ease: "easeOut",
    },
  }),
  out: (custom) => ({
    translateY: -100,
    transition: {
      duration: custom,
      ease: "easeOut",
    },
  }),
};

export const diamondAniUp: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: (custom) => ({
    opacity: custom.spellSum === 0 ? 0 : 1,
    borderBottomColor:
      custom.spellDiff !== 0
        ? colorSpell(custom.spellDiff < 0)
        : colorSpell(custom.color === "yellow"),
    transition: {
      duration: 5,
    },
  }),
};
export const diamondAniDown: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: (custom) => ({
    opacity: custom.spellSum === 0 ? 0 : 1,
    borderTopColor:
      custom.spellDiff !== 0
        ? colorSpell(custom.spellDiff < 0)
        : colorSpell(custom.color === "yellow"),
    transition: {
      duration: 5,
    },
  }),
};
export const pinAniUp: Variants = {
  hidden: {
    borderBottomColor: "#4A4A4A",
  },
  visible: (custom) => ({
    borderBottomColor:
      custom.spellDiff !== 0
        ? colorSpell(custom.spellDiff < 0)
        : colorSpell(custom.color === "yellow"),
    transition: {
      duration: 5,
      delay:2,
    },
  }),
  blink: {
    opacity: [1, 0.5, 1, 0.5, 1, 0.5, 1],
    transition: {
      duration: 2,
      times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
    },
  },
};
export const pinAniDown: Variants = {
  hidden: {
    borderTopColor: "#4A4A4A",
  },
  visible: (custom) => ({
    borderTopColor:
      custom.spellDiff !== 0
        ? colorSpell(custom.spellDiff < 0)
        : colorSpell(custom.color === "yellow"),
    transition: {
      duration: 5,
      delay:2,
    },
  }),
  blink: {
    opacity: [1, 0.5, 1, 0.5, 1, 0.5, 1],
    transition: {
      duration: 2,
      times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
    },
  },
};
export const ringPinAni: Variants = {
  hidden: {
    boxShadow: `0px 0px 5px 3px #fff`,
  },
  visible: (custom) => ({
    boxShadow: `0px 0px 5px 3px ${
      custom.spellDiff !== 0
        ? colorSpell(custom.spellDiff < 0)
        : colorSpell(custom.color === "yellow")
    }`,
    transition: {
      duration: 5,
      delay:2,
    },
  }),

  blink: (custom) => {
    const color =
      custom.spellDiff !== 0
        ? colorSpell(custom.spellDiff < 0)
        : colorSpell(custom.color === "yellow");

    return {
      boxShadow: [
        `0px 0px 5px 3px ${color}`,
        `0px 0px 200px 50px ${color}`,
        `0px 0px 300px 30px ${color}`,
        `0px 0px 200px 70px ${color}`,
        `0px 0px 5px 3px ${color}`,
      ],
      transition: {
        duration: 2.5,
        times: [0, 0.3,0.4,0.6, 1],
      },
    };
  },
};

export const opacityBlinkAni: Variants = {
  hidden: {},
  visible: {
    opacity: [1, 0.5, 1, 0.5, 1, 0.5, 1],
    transition: {
      duration: 1,
      times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
    },
  },
};

export const allDiamondAni: Variants = {
  hidden: {},
  visible: (custom) => ({
    scale: [1, 1.2, 1, 1.3, 1, 1.2, 1],
    transition: {
      duration: 3,
      times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
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
      // delay: 5,
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
export const doorToLeftAnimation: Variants = {
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

export const doorLightAnimation: Variants = {
  hidden: {
    width: "100%",
    opacity: 0,
  },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 5,
    },
  },
};

export const teamMemberAni: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: custom * 0.2,
      type: "spring",
    },
  }),
};

// export const roadMapBoxAni:Variants = {
//   hidden:{

//   }
// }

export const roadMapDescAni: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export const roadAni: Variants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const eachBenefitAni: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};
export const eachBenefitDescAni: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.1 + custom * 0.2,
    },
  }),
};

export const callToActionSvgAni: Variants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,

    transition: {
      delay: 0,
      duration: 1.5,
      repeat: 2000,
      repeatDelay: 5,
    },
  },
};
export const callToactionSvgArrowRightAni: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0, 0, 1],
    transition: {
      duration: 1.5,
      times: [0, 0.93, 1],
      repeat: 2000,
      repeatDelay: 5,
      repeatType: "loop",
    },
  },
};

export const mobileMenuContainerAni: Variants = {
  opened: {
    height: "100vh",
    transition: {
      when: "beforeChildren",
      duration: 0.01,
    },
  },
  closed: {
    height: "100%",
    transition: {
      when: "afterChildren",
      duration: 0.2,
    },
  },
};

export const mobileMenuAni: Variants = {
  opened: (custom = 1000) => ({
    clipPath: `circle(${custom * 2 + 200}px at calc(100% - 46px) 51px)`,
    backgroundColor: "#212121",
    transition: {
      clipPath: { type: "spring", stiffness: 20, restDelta: 2 },
    },
  }),
  closed: {
    clipPath: "circle(20px at calc(100% - 46px) 51px)",
    backgroundColor: "#363636",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const navBodyAni: Variants = {
  opened: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const menuItemAni: Variants = {
  opened: {
    display: "flex",
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
export const menuSocialItemAni: Variants = {
  opened: {
    display: "flex",
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 100,
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
    transition: {
      x: { stiffness: 1000 },
    },
  },
};
export const menuCopyRightAni: Variants = {
  opened: {
    display: "flex",
    x: 0,
    opacity: 1,
    transition: {
      opacity: { delay: 0.5 },
      x: { delay: 0.5, stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

export const heroAnim: Variants = {
  hidden: {
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  visible: {
    scale: 1.5,
    transition: {
      duration: 10,
      ease: [0.25, 0.72, 0, 0.94],
    },
  },
};
export const cityAnim: Variants = {
  hidden: {
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  visible: {
    scale: 0.8,
    transition: {
      duration: 10,
      ease: [0.25, 0.72, 0, 0.94],
    },
  },
};

export const videoBtnAnim: Variants = {
  hidden: {
    opacity: 1,
    rotate: "0deg",
    scale: 0.7,
    fill: ["#fff"],
  },
  visible: {
    opacity: 1,
    rotate: "1800deg",
    scale: [0.7, 1.3, 1],
    fill: ["#3D14BB", "#3D14BB", "#fff"],
    transition: {
      times: [0, 0.8, 1],
      duration: 1,
      delay: 0.1,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

export const backToTopAni: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
    },
  },
  out: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const goldenContainerAni: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.01,
      staggerChildren: 0.06,
      when: "beforeChildren",
    },
  },
};
export const goldenFirstAni: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: custom * 0.12,
    },
  }),
};
export const goldenSplitAni: Variants = {
  hidden: (custom) => ({
    opacity: 0,
    x: -500 + custom * 100,
    y: custom % 2 !== 0 ? 300 : -300,
    scale: 3,
  }),
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1 + custom * 0.1,
      duration: 0.7,
      ease: "easeInOut",
    },
  }),
};
export const goldenSecondAni: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.5,
    },
  },
};

export const heroSvgAni: Variants = {
  hidden: (custom) => ({ x: 20 * custom }),
  visible: {
    x: 0,
    transition: { duration: 0.2, type: "spring", stiffness: 300, damping: 20 },
  },
};

export const web3ConnectWalletModalAni: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: "720deg" },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: "0deg",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  out: {
    opacity: 0,
    scale: 0,
    rotate: "720deg",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const connectWalletHoverTolltipAni: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 0.8,
  },
};

export const timerAni: Variants = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  out: {
    y: 100,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const auctionContainerAni: Variants = {
  hidden: (custom) => {
    return {
      x: custom ? -30 : 30,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    };
  },
  visible: (custom) => {
    return {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    };
  },
  out: (custom) => {
    return {
      x: custom ? 30 : -30,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    };
  },
};

export const auctionPriceAni: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.1,
    y: -50,
  },
  visible: (custom) => ({
    opacity: [0, 1, 1],
    scale: [0.1, 1, 1],
    y: [-50, 0, 0],
    color: ["#2CEDFF", "#2CEDFF", "#EEEE"],
    transition: {
      times: [0, 0.333, 1],
      duration: 2.4,
      delay: custom * 0.05,
      ease: "easeInOut",
    },
  }),
  out: (custom) => ({
    opacity: [1, 1, 0],
    scale: [1, 1, 0.1],
    y: [0, 0, 50],
    color: ["#EEEE", "#fc0317", "#fc0317"],
    transition: {
      times: [0, 0.4, 1],
      duration: 1.1,
      delay: custom * 0.05,
      ease: "easeInOut",
    },
  }),
};
