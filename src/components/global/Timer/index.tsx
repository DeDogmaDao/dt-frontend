import TimeTrack from "./TimeTrack";

interface props{
    time: number; //second
}

const Timer:React.FC<props> = ({time}) => {

    return(
        <div className="w-52 h-11 flex justify-between items-center gap-x-5 overflow-hidden">
           <TimeTrack />
        </div>
    )
}


export default Timer;