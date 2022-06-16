
interface props {
        startPrice: string;
        endPrice: string;
        auctionDropPerStep: string;
}

const Prices:React.FC<props> = ({auctionDropPerStep,endPrice,startPrice}) => {

    return(
        <div className="flex flex-col gap-y-4">
            <div>Start Price: 10 ETH</div>
            <div>The amount of price drop: 0.075 ETH</div>
            <div>Resting Price: 1 ETH</div>
            <div>purchase Price: 2 ETH</div>
        </div>
    )
}
export default Prices;