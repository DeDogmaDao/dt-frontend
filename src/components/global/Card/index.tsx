import { teamType } from "../../../types/propTypes";

interface props {
    data:teamType;
}
const Card:React.FC<props> = ({data}) => {

    return(
        <div className="h-[492px] w-80 flex flex-col justify-center items-center text-white">
            <img className="w-full object-contain" src={data.image} loading="lazy" />
            <p className="text-4xl text-primary-500">{data.name}</p>
            <p className="text-2xl">{data.role}</p>
        </div>
    );
}


export default Card;