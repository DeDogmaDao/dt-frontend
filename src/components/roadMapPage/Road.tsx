import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import RoadItem from "./RoadItem";

interface props {
  color: string;
  index: number;
  activeSection: number;
}
const roadData = [
  {
    title: "Set and get their state.",
    desc: "All motion components internally use MotionValues to track the state and velocity of an animating value.Usually, these are created automatically. But for advanced use-cases, it is possible to create them manually and inject them into motion components.",
  },
  {
    title: "Any MotionValue can spawn ",
    desc: "All motion components internally use MotionValues to track the state and velocity of an animating value.Usually, these are created automatically. But for advanced use-cases, it is possible to create them manually and inject them into motion components.",
  },
  {
    title: "Chain MotionValues via the useTransform hook.",
    desc: "All motion components internally use MotionValues to track the state and velocity of an animating value.Usually, these are created automatically. But for advanced use-cases, it is possible to create them manually and inject them into motion components.",
  },
  {
    title: "before returning it to update the child.",
    desc: "All motion components internally use MotionValues to track the state and velocity of an animating value.Usually, these are created automatically. But for advanced use-cases, it is possible to create them manually and inject them into motion components.",
  },
  {
    title: "Set and get their state.",
    desc: "All motion components internally use MotionValues to track the state and velocity of an animating value.Usually, these are created automatically. But for advanced use-cases, it is possible to create them manually and inject them into motion components.",
  },
];
const Road: React.FC<props> = ({ color, index, activeSection }) => {
  const [clientHeight, setClientHeight] = useState(0);
  useEffect(() => {
    setClientHeight(window.innerHeight);
  }, []);

  return (
    <motion.div
      className="w-screen h-screen absolute left-0 duration-700"
      style={{ top: clientHeight * (index - activeSection) }}
    >
      <div className="flex justify-between items-center w-full h-full">
        <div className="w-1/2 h-full"></div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <ul className="w-[416px] p-8 flex flex-col gap-y-2 bg-neutral-600 rounded-xl">
            {roadData.map(data => {
              return <RoadItem data={data} />
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Road;
