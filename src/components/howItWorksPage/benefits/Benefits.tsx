import { benefitsData } from "../../../store/allData";

const Benefits:React.FC = () => {

    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
{benefitsData.map(data=>{
    return
})}
            </div>
            <div className="w-9/12 h-28 flex justify-center items-center bg-red-300">

            </div>
        </div>
    )
}

export default Benefits;