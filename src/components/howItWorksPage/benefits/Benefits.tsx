import { useState } from "react";
import { benefitsData } from "../../../store/allData";
import EachBenefit from "./EachBenefit";
import EachDesc from "./EachDesc";

const Benefits: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="flex justify-center items-center gap-x-12 text-extera-large-medium">
        {benefitsData.map((data, index) => {
          return (
            <EachBenefit
              data={data}
              index={index}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
          );
        })}
      </div>
      <div className="w-9/12 h-52 mt-16 flex ">
        <ul className="flex flex-col gap-y-3">
          {activeIndex !== -1 &&
            benefitsData[activeIndex].desc.map((item,index) => {
              return <EachDesc descData={item} index={index} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
