import { useEffect } from "react";
// import { useWeb3Context } from "../../store/context/Web3Context";
import Web3Button from "./Web3Button";
import {useWeb3Context} from "../../store/context/Web3Context";
import { BigNumber, utils } from "ethers";
import { useContractRead } from 'wagmi';
import { deDogmaDaoABI } from "./abi";
import { useSendTransaction } from 'wagmi';


const Web3Page:React.FC = () => {

    const prov = useWeb3Context();

    const contractRead = useContractRead(
        {
          addressOrName: '0xe3af8b5Bdd1155e78E67Be558C04D3fa6647365d',
          contractInterface: deDogmaDaoABI,
        },
        'publicMint',
      );
      const { data, isIdle, isError, isLoading, isSuccess, sendTransaction } =
      useSendTransaction({
        request: {
          to: '0xe3af8b5Bdd1155e78E67Be558C04D3fa6647365d',
          value: BigNumber.from('1000000000000000000'), // 1 ETH
        },
      })
      
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="w-1/2 h-1/2 bg-red-200/50 flex justify-center items-center">
            <Web3Button onclick={()=>{
                prov.metaMaskConnection();
                sendTransaction();
                console.log(data);
            
            
            }} />

            </div>
            <div className="w-1/2 h-1/2 bg-red-200/50 flex flex-col justify-center items-center gap-5">
                {/* <div>{address}</div> */}
                {/* <div>{network}</div>
                <div>{provider}</div>
                <div>{web3Provider}</div> */}
            </div>
        </div>
    )
}

export default Web3Page;