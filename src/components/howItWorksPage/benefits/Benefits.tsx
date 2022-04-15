import Image from "next/image";
import { useState } from "react";
import { benefitsData } from "../../../store/allData";
import EachBenefit from "./EachBenefit";
import EachDesc from "./EachDesc";

const Benefits: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col justify-start items-center h-[90vh] relative" id="benefits">
      <div className="absolute z-0 left-0 top-0 w-full h-full">
      <Image src={'/img/bg/bg1.png'} layout="fill" />
      </div>
      <div className="flex justify-center items-center gap-x-12 text-extera-large-medium z-10 mt-32">
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
      <div className="w-9/12 h-52 mt-16 flex z-10">
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
