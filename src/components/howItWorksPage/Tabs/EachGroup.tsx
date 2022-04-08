import { motion } from "framer-motion";
import { tabsType } from "../../../types/allTypes";
import underLine from "../../images/Union.png";
import deepClone from 'lodash/cloneDeep';

interface props {
  name: string;
  activeGroup: boolean;
  setTabs: any;
  tabs: tabsType[];
}
const EachGroup: React.FC<props> = ({ name, activeGroup, setTabs, tabs }) => {
  const clickHandler = () => {
    const clonedState = deepClone(tabs);
    const newGroup = clonedState.map((tab) => {
      if (tab.tabGroup === name) {
        tab.activeGroup = true;
      } else {
        tab.activeGroup = false;
      }
      return tab;
    });
    setTabs(newGroup);
  };
  return (
    <button
      className="relative flex justify-center items-center"
      onClick={clickHandler}
    >
      {name}
      {activeGroup && (
        <motion.img
          src={underLine.src}
          layoutId={"tabGroup"}
          className={
            "absolute left-0 -bottom-3 w-20 h-3 flex justify-center items-start"
          }
        />
      )}
    </button>
  );
};

export default EachGroup;



// import { motion } from "framer-motion";
// import { tabsType } from "../../../types/allTypes";
// import deepClone from "lodash/cloneDeep";
// import { tabBlastAni } from "../../../utils/animation";

// interface props {
//   name: string;
//   activeGroup: boolean;
//   setTabs: any;
//   tabs: tabsType[];
// }
// const EachGroup: React.FC<props> = ({ name, activeGroup, setTabs, tabs }) => {
//   const clickHandler = () => {
//     const clonedState = deepClone(tabs);
//     const newGroup = clonedState.map((tab) => {
//       if (tab.tabGroup === name) {
//         tab.activeGroup = true;
//       } else {
//         tab.activeGroup = false;
//       }
//       return tab;
//     });
//     setTabs(newGroup);
//   };
//   return (
//     <button
//       className={`relative flex justify-center items-center p-4`}
//       onClick={clickHandler}
//     >
//       <p
//         className={`text-sm font-normal z-10 ${
//           activeGroup && "text-blackPrime"
//         }`}
//       >
//         {name}
//       </p>
//       {activeGroup && (
//         <>
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={tabBlastAni}
//             className="w-10 h-10 absolute rounded-full"
//             style={{
//               background:
//                 "radial-gradient(50% 50% at 50% 50%,rgba(255, 255, 255, 0) 0%,#ffffff 100%)",
//             }}
//           ></motion.div>

//           <motion.div
//             layoutId="eachGroup"
//             transition={{ type: "spring", stiffness: 150 }}
//             className={`absolute flex justify-center items-center w-full h-7 bg-primText z-0 rounded-full shadow-cycle shadow-slate-200
//           `}
//           ></motion.div>
//         </>
//       )}
//     </button>
//   );
// };

// export default EachGroup;


// export const tabBlastAni: Variants = {
//   hidden: {
//     scale: 0,
//     opacity: 0.5,
//   },
//   visible: {
//     scale: 3.5,
//     opacity: 0,
//     transition: {
//       duration: 0.8,
//       delay: 0,
//       ease: [0.45, 0.73, 0.4, 0.9],
//     },
//   },
// };