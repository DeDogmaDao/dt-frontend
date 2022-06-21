import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { auctionDropInterval } from "../../../store/constants";
import TimeTrack from "./TimeTrack";

interface props{
    time: number|null; //second
    classNames?: string | undefined;
    setTensTimer:Dispatch<SetStateAction<number>>;
    tensTimer:number;
}

const Timer:React.FC<props> = ({time,classNames,setTensTimer,tensTimer}) => {
    if(time===null) {
        return <></>
    }
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
        if(currentTime===0 && tensTimer>0){
            setCurrentTime(auctionDropInterval);
            setTensTimer(prevState=>prevState-1);
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