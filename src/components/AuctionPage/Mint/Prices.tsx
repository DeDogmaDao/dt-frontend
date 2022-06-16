import { AuctionVerticalDashLineSVG } from "../../../store/svg";

interface props {
        startPrice: string;
        endPrice: string;
        auctionDropPerStep: string;
}

const Prices:React.FC<props> = ({auctionDropPerStep,endPrice,startPrice}) => {

    return(
        <div className="flex flex-col gap-y-4 relative mt-8 ml-10 font-bold text-xl">
            <div>Start Price: 10 ETH</div>
            <div>The amount of price drop: 0.075 ETH</div>
            <div>Resting Price: 1 ETH</div>
            {/* <div>purchase Price: 2 ETH</div> */}
            <span className="h-[7.375rem] w-[.125rem] fill-primary-50 absolute -left-4">
                <AuctionVerticalDashLineSVG />
            </span>
        </div>
    )
}
export default Prices;