
interface props {
        startPrice: string;
        endPrice: string;
        auctionDropPerStep: string;
}

const Prices:React.FC<props> = ({auctionDropPerStep,endPrice,startPrice}) => {

    return(
        <div className="flex flex-col gap-y-4">
            <div>Start Price: {startPrice} ETH</div>
            <div>The amount of price drop: {auctionDropPerStep} ETH</div>
            {/* <div>Resting Price: {prices.purchase} ETH</div> */}
            <div>Resting Price: {endPrice} ETH</div>
        </div>
    )
}
export default Prices;