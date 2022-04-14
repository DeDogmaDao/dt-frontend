import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
    descData:string[];
}
const EachDesc:React.FC<props> = ({descData}) => {

return(
    <div className="flex flex-col gap-y-3">
        <div><FontAwesomeIcon icon={faBolt} /> <p>
            {"data"}</p></div>
    </div>
)
}

export default EachDesc;