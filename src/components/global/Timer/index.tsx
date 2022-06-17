import { useEffect, useState } from "react";
import TimeTrack from "./TimeTrack";

interface props{
    time: number; //second
}

const Timer:React.FC<props> = ({time}) => {
    const [currentTime, setCurrentTime] = useState(Math.abs(time));
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentTime(prevState=>prevState-1);
        },1000);
        return ()=>{
            clearInterval(interval);
        }
    },[time])

    return(
        <div className="w-52 h-11 flex justify-between items-center gap-x-5 overflow-hidden">
           <TimeTrack time={currentTime} type={"Sec"} />
        </div>
    )
}


export default Timer;