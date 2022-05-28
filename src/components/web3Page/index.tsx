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
      addressOrName: '0x663F3ad617193148711d28f5334eE4Ed07016602',
      contractInterface: deDogmaDaoABI,
      signerOrProvider: signer,
    },
    "publicMint",
    {
      args:[2],
      overrides:{
        value: utils.parseEther("0.14"),
        gasLimit: 200000,
      }
    }
    )
      // const { data, isIdle, isError, isLoading, isSuccess, sendTransaction } =
      // useSendTransaction({
      //   request: {
      //     to: '0xe3af8b5Bdd1155e78E67Be558C04D3fa6647365d',
      //     value: BigNumber.from('100000000000000000000'), // 1 ETH
      //   },
      // })

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