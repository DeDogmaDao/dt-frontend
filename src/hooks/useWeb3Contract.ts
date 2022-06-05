import { utils } from "ethers";
import { useContractWrite, useSigner, useWaitForTransaction } from "wagmi";
import { deDogmaDaoABI } from "../components/global/ConnectWalletModal/abi";

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
  const { data, write } = useContractWrite(
    {
      addressOrName: "0x663f3ad617193148711d28f5334ee4ed07016602",
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
    write,
  };
};
