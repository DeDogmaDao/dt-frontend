import Image from "next/image";
import { globCardType } from "../../../types/allTypes";

interface props {
    data:globCardType;
}
const Card:React.FC<props> = ({data}) => {

    return(
        <div className="h-[492px] w-80 flex flex-col justify-center items-center text-white">
            <Image width={320} height={492}  src={data.image} loading="lazy" />
            {data.name && <p className="text-4xl text-primary-500">{data.name}</p>}
            {data.role && <p className="text-2xl">{data.role}</p>}
        </div>
    );
}


export default Card;