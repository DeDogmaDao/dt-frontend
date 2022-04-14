import { Dispatch, SetStateAction, useState } from "react";
import { benefitType } from "../../../types/allTypes";

interface props {
    data:benefitType;
    index:number;
    setActiveIndex: Dispatch<SetStateAction<number>>;
    activeIndex: number;
}
const EachBenefit: React.FC<props> = ({data,index, activeIndex, setActiveIndex}) => {

  const benefitBtnClickHandler = () => {
    setActiveIndex((prevState) => {
      if (prevState === index) {
        return prevState;
      }
      return -1;
    });
    setTimeout(() => {
        setActiveIndex(prevState=>{
          if(prevState===-1){
              return index
          }
          return prevState
      });
    }, 100);
  }

  return (
    <button className="flex justify-center items-center"
    onClick={benefitBtnClickHandler}
    >
      <div>{data.title}</div>
      <div></div>
    </button>
  );
};

export default EachBenefit;
