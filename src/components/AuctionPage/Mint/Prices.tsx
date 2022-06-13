
interface props {
    prices?: {
        startPrice: string;
        endPrice: string;
        auctionDropPerStep: string;
    };
}

const Prices:React.FC<props> = ({prices}) => {

    return(
        <div className="flex flex-col gap-y-4">
            <div>Start Price: {prices?.startPrice} ETH</div>
            <div>The amount of price drop: {prices?.auctionDropPerStep} ETH</div>
            {/* <div>Resting Price: {prices.purchase} ETH</div> */}
            <div>Resting Price: {prices?.endPrice} ETH</div>
        </div>
    )
}
export default Prices;