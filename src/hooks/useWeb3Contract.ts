import { utils } from "ethers";
import { useContractWrite, useSigner, useWaitForTransaction } from "wagmi";
import { deDogmaDaoABI } from "../components/web3Page/abi";

interface useWeb3ContractType {
    functionName:string;
    args:any[];
    ethersValue:string;
    transactionGasLimit:number;
}

export const useWeb3Contract = ({functionName,args,ethersValue,transactionGasLimit=200000}:useWeb3ContractType) => {
  const { data: signer } = useSigner();
  const { data } = useContractWrite(
    {
      addressOrName: "0x2E983A1Ba5e8b38AAAeC4B440B9dDcFBf72E15d1",
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
  const {
    data: waitedData,
    isLoading: waitedIsLoading,
    isError: waitedIsError,
    isSuccess: waitedIsSuccess,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  return {
    waitedData,
    waitedIsError,
    waitedIsLoading,
    waitedIsSuccess,
    data,
  };
};
