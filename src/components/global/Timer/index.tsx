import { Dispatch, SetStateAction, useEffect, useState } from "react";
import TimeTrack from "./TimeTrack";

interface props{
    time: number; //second
    classNames?: string | undefined;
}

const Timer:React.FC<props> = ({time,classNames}) => {
    if(time<=0) return null;
    const [currentTime, setCurrentTime] = useState(time);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentTime(prevState=>prevState-1);
        },1000);
        return ()=>{
            clearInterval(interval);
        }
    },[time])

    useEffect(()=>{
        if(currentTime===0){
            setCurrentTime(600);
        }
    },[currentTime])

    return(
        <div className={`h-11 flex justify-between items-center gap-x-3 overflow-y-hidden ${" "+classNames}`}>
           <TimeTrack time={currentTime} type={"D"} />
           <TimeTrack time={currentTime} type={"H"} />
           <TimeTrack time={currentTime} type={"Min"} />
           <TimeTrack time={currentTime} type={"Sec"} />
        </div>
    )
}


export default Timer;