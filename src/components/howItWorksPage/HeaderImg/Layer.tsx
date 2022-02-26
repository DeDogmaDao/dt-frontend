import { layersType } from "../../../types/propTypes";

interface props {
    data: layersType;
    index:number;
}
const Layer:React.FC<props> = ({data,index}) => {


    return (
        <img src={data.image}
        className={`${index===0 ? "w-full h-full": "absolute left-0 top-0 w-full h-full"}`} />
    );
}


export default Layer;