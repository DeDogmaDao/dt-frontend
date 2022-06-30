import { utils } from "ethers";
import { useContractWrite, useSigner, useWaitForTransaction } from "wagmi";
import { deDogmaDaoABI } from "../components/global/ConnectWalletModal/abi";
import { contractAddress } from "../store/constants";

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
  const { data: signer } = useSigner();
  const {
    data,
    write,
    isError: isErrorWrite,
    isLoading: isLoadingWrite,
    isSuccess: isSuccessWrite,
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
  });
  return {
    isErrorWrite,
    isLoadingWrite,
    isSuccessWrite,
    waitedData,
    data,
    write,
  };
};
