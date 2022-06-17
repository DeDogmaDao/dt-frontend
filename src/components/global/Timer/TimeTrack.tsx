import { useState } from "react";

interface props {
    type:string;
    time:number;
}
const TimeTrack: React.FC<props> = ({time,type}) => {
    const [timeLeft, setTimeLeft] = useState("00");
    if(type==="Sec"){
        setTimeLeft(Math.floor(time%60).toString());
    }
    if(type==="Min"){
        setTimeLeft(Math.floor((time%3600)/60).toString());
    }
    if(type==="H"){
        setTimeLeft(Math.floor((time%3600*24)/3600).toString());
    }
    if(type==="D"){
        setTimeLeft(Math.floor(time/3600/24).toString());
    }
  return (
    <div className="flex justify-center items-center h-full">
      <span className="text-[2rem] font-bold">50</span>
      <span className="self-end text-base font-normal">{type}</span>
    </div>
  );
};

export default TimeTrack;
