import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface props {
    type:string;
    time:number;
}
const nums: number[] = Array.from(Array(10).keys()); 
const TimeTrack: React.FC<props> = ({time,type}) => {
    const [timeLeft, setTimeLeft] = useState(0);
useEffect(()=>{
    if(type==="Sec"){
        setTimeLeft(Math.floor(time%60));
    }
    if(type==="Min"){
        setTimeLeft(Math.floor((time%3600)/60));
    }
    if(type==="H"){
        setTimeLeft(Math.floor((time%3600*24)/3600));
    }
    if(type==="D"){
        setTimeLeft(Math.floor(time/3600/24));
    }
},[time])

  return (
    <div className="flex justify-center items-center h-full">
      <span className="text-[2rem] font-bold w-12 flex justify-center items-center">
        {nums.map((item)=>{
            if(timeLeft%10 !== item) return null;
            return(<motion.span
            >
                {item}
            </motion.span>)
        })}
      </span>
      <span className="self-end text-base font-normal">{type}</span>
    </div>
  );
};

export default TimeTrack;
