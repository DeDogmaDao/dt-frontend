import { useEffect } from "react";
// import { useWeb3Context } from "../../store/context/Web3Context";
import Web3Button from "./Web3Button";
import {useWeb3Context} from "../../store/context/Web3Context";
import { BigNumber, utils } from "ethers";
import { deDogmaDaoABI } from "./abi";
import { useSendTransaction, useSigner } from 'wagmi';
import { useContractWrite, useWaitForTransaction } from 'wagmi';

const Web3Page:React.FC = () => {

    const prov = useWeb3Context();
    const { data: signer } = useSigner();
    const {data, write, isSuccess, } = useContractWrite({
      addressOrName: '0x2E983A1Ba5e8b38AAAeC4B440B9dDcFBf72E15d1',
      contractInterface: deDogmaDaoABI,
      signerOrProvider: signer,
    },
    "publicMint",
    {
      args:[1],
      overrides:{
        value: utils.parseEther("0.07"),
        gasLimit: 200000,
      }
    }
    )
      const {data:waitedData } = useWaitForTransaction({
        hash: data?.hash
      })
      console.log(waitedData)
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="w-1/2 h-1/2  flex flex-col gap-5 justify-center items-center">
            <Web3Button name="connect" onclick={()=>{
                prov.metaMaskConnection();
            }} />
            <Web3Button name="disconnect" onclick={()=>{
                prov.disconnection();
            }} />
            <Web3Button name="send" onclick={ ()=>{
                write();
                console.log(waitedData)
                

            }} />

            </div>
            <div className="w-1/2 h-1/2 flex flex-col justify-center items-center gap-5">
                {/* <div>{address}</div> */}
                {/* <div>{network}</div>
                <div>{provider}</div>
                <div>{web3Provider}</div> */}
            </div>
        </div>
    )
}

export default Web3Page;