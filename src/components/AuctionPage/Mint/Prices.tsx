import { pricesType } from "../../../types/allTypes";

interface props {
    prices: pricesType;
}

const Prices:React.FC<props> = ({prices}) => {

    return(
        <div className="flex flex-col gap-y-4">
            <span>Start Price: {prices.start} ETH</span>
            <span>The amount of price drop: {prices.drop} ETH</span>
            <span>Resting Price: {prices.purchase} ETH</span>
            <span>Resting Price: {prices.resting} ETH</span>
        </div>
    )
}
export default Prices;