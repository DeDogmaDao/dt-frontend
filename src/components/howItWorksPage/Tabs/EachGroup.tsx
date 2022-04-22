import { motion } from "framer-motion";
import { tabsType } from "../../../types/allTypes";
import underLine from "../../images/Union.png";
import deepClone from "lodash/cloneDeep";
import Image from "next/image";

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
    <motion.button
      whileHover={{ scale: activeGroup ? 1 : 1.05 }}
      className=" w-48 md:w-64 aspect-[2.3] relative flex justify-center items-center"
      onClick={clickHandler}
    >
      {activeGroup && (
        <div
          className="absolute top-0 left-0 w-full h-full z-0 flex justify-between items-center overflow-hidden rounded-2xl
       shadow-[0rem_1.125rem_1.25rem_-0.625rem_rgb(240,217,85,0.3)]"
        >
          <span className="w-1/2 h-1/2 self-start bg-gradient-to-br from-[#F0D955] via-transparent to-transparent"></span>
          <span className="w-1/2 h-full bg-gradient-to-br from-transparent via-transparent to-[#F0D955]"></span>
        </div>
      )}
      <div
        className={`z-10 relative flex justify-between items-center w-[99%] h-[99%]  rounded-2xl overflow-hidden  bg-[url('/img/cyc/button-bg.png')] bg-cover
      text-normal-bold duration-300 backdrop-filter backdrop-blur-[.1rem]    ${
        activeGroup ? "grayscale-0" : "grayscale"
      }`}
      >
        <span className="ml-6">{name}</span>
        <span className="relative w-[60%] h-full">
          <Image src={"/img/cyc/" + name + ".png"} layout="fill"  />
        </span>
      </div>
    </motion.button>
  );
};

export default EachGroup;
