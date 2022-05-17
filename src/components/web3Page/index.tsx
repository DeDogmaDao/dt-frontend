import { useEffect } from "react";
import { useWeb3Context } from "../../store/context/Web3Context";
import {Web3Button} from "./Web3Button";

const Web3Page:React.FC = () => {
    const {address, network,provider,web3Provider} = useWeb3Context();
    useEffect(()=>{

        console.log(network);
        console.log(provider);
        console.log(web3Provider);
    },[address])
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="w-1/2 h-1/2 bg-red-200/50 flex justify-center items-center">
            <Web3Button />

            </div>
            <div className="w-1/2 h-1/2 bg-red-200/50 flex flex-col justify-center items-center gap-5">
                <div>{address}</div>
                {/* <div>{network}</div>
                <div>{provider}</div>
                <div>{web3Provider}</div> */}
            </div>
        </div>
    )
}

export default Web3Page;