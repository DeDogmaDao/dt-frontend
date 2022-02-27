import { ReactElement } from "react";
import { tabType, teamType } from "../../../types/allTypes";

interface props {
data: tabType;
}
const Card:React.FC<props> = ({data}) => {

    return(
        <div className="h-full py-5 w-80 flex flex-col justify-center items-center text-white">
            <img className="w-full object-contain" src={data.image} loading="lazy" />
            <p className="text-4xl text-primary-500">{data.name}</p>
            {/* <div>{data.desc}</div> */}
        </div>
    );
}


export default Card;