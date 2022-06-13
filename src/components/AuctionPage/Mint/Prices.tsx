
interface props {
    prices?: any;
}

const Prices:React.FC<props> = ({prices}) => {

    return(
        <div className="flex flex-col gap-y-4">
            <div>Start Price: {prices.start} ETH</div>
            <div>The amount of price drop: {prices.drop} ETH</div>
            <div>Resting Price: {prices.purchase} ETH</div>
            <div>Resting Price: {prices.resting} ETH</div>
        </div>
    )
}
export default Prices;