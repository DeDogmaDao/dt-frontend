import { benefitType } from "../../../types/allTypes";

interface props {
    data:benefitType;
    index:number;
}
const EachBenefit: React.FC<props> = ({data,index}) => {
  return (
    <button className="flex justify-center items-center">
      <div>{data.title}</div>
      <div></div>
    </button>
  );
};

export default EachBenefit;
