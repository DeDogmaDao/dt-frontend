import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { roadMapType } from "../../types/allTypes";
import { roadMapDescAni } from "../../utils/animation";
import RoadItem from "./RoadItem";

interface props {
  roadData:roadMapType;
  index: number;
  activeSection: number;
}

const Road: React.FC<props> = ({ index, activeSection,roadData }) => {
  const [clientHeight, setClientHeight] = useState(0);
  const [desc, setDesc] = useState("");
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
            {roadData.roadData.map((data) => {
              return <RoadItem data={data} setDesc={setDesc} />;
            })}
            <div className="w-full h-28 px-5 overflow-clip text-small-light text-neutral-50/60 ">
              {desc !== "" && (
                <motion.p
                className="indent-8"
                  initial={"hidden"}
                  animate="visible"
                  variants={roadMapDescAni}
                >
                  {desc}
                </motion.p>
              )}
            </div>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Road;
