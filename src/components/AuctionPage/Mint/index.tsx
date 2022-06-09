import { pricesType } from "../../../types/allTypes";
import Prices from "./Prices";
const priceValues:pricesType = {
    start:0.9,
    drop:0.1,
    purchase:0.8,
    resting:0.7
}
const Mint:React.FC = () => {

    return(
        <div className="w-[42.3125rem] h-[20.25rem] flex justify-center items-center">
            <Prices prices={priceValues} />
        </div>
    )
}

export default Mint;