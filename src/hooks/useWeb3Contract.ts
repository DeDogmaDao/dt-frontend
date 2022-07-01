import { utils } from "ethers";
import { useEffect, useState } from "react";
import { useContractWrite, useSigner, useWaitForTransaction } from "wagmi";
import { deDogmaDaoABI } from "../components/global/ConnectWalletModal/abi";
import { contractAddress } from "../store/constants";
import { transactionResErrorType } from "../types/allTypes";

interface useWeb3ContractType {
  functionName: string;
  args: any[];
  ethersValue: string;
  transactionGasLimit?: number;
}

export const useWeb3Contract = ({
  functionName,
  args,
  ethersValue,
  transactionGasLimit = 200000,
}: useWeb3ContractType) => {
  const [error, setError] = useState<transactionResErrorType>({code: 0, message: "",txHash: ""});
  const { data: signer } = useSigner();
  const {
    data,
    write,
    isError: isErrorWrite,
    isLoading: isLoadingWrite,
    isSuccess: isSuccessWrite,
    error: error1,
  } = useContractWrite(
    {
      addressOrName: contractAddress,
      contractInterface: deDogmaDaoABI,
      signerOrProvider: signer,
    },
    functionName,
    {
      args: args,
      overrides: {
        value: utils.parseEther(ethersValue),
        gasLimit: transactionGasLimit,
      },
    }
  );
  const { data: waitedData } = useWaitForTransaction({
    hash: data?.hash,
    wait: data?.wait,
  });
  useEffect(()=>{
    if(error1){
      const err = error1 && JSON.parse(error1.message.match(/{(.*)}/g)![0]).value.data;
      setError({code: err.code, message: err.message, txHash: err.data.txHash});
    }
  },[error1])

console.log(data?.timestamp)
  return {
    isErrorWrite,
    isLoadingWrite,
    isSuccessWrite,
    waitedData,
    data,
    write,
    error,
  };
};
