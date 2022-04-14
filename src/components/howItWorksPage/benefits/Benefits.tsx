import { benefitsData } from "../../../store/allData";
import EachBenefit from "./EachBenefit";

const Benefits: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="flex justify-center items-center gap-x-12 text-extera-large-medium">
        {benefitsData.map((data, index) => {
          return <EachBenefit data={data} index={index} />;
        })}
      </div>
      <div className="w-9/12 h-28 mt-16 flex justify-center items-center bg-red-300"></div>
    </div>
  );
};

export default Benefits;
