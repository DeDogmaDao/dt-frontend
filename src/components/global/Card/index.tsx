import Image from "next/image";
import { globCardType, sizeType } from "../../../types/allTypes";

interface props {
    data:globCardType;
    size:sizeType;
}
const Card:React.FC<props> = ({data, size}) => {

    return(
        <div  className="flex flex-col justify-center items-center text-white">
            <Image width={size.width} height={size.height}  src={data.image} loading="lazy" />
            {data.name && <p className="text-medium-bold text-white mt-4">{data.name}</p>}
            {data.role && <p className="text-small-light mt-2">{data.role}</p>}
        </div>
    );
}


export default Card;