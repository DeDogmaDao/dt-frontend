import { ReactElement, RefObject, useEffect, useRef } from "react";
import { tabType, teamType } from "../../../types/allTypes";

interface props {
data: tabType;
cardRef: RefObject<HTMLDivElement>;

}
const Card:React.FC<props> = ({data, cardRef}) => {
const eachCradRef = useRef<HTMLDivElement>(null);
useEffect(() => {
    // const scaleRatio = cardRef.current!.offsetLeft - eachCradRef.current!.offsetLeft;
}, [])

    return(
        <div ref={data.activeCard ? cardRef : eachCradRef} className="h-full py-5 w-80 flex flex-col justify-center items-center text-white">
            <img className="w-full object-contain" src={data.image} loading="lazy" />
            <p className="text-4xl text-primary-500">{data.name}</p>
            {/* <div>{data.desc}</div> */}
        </div>
    );
}


export default Card;