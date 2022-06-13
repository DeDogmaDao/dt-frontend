import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { deDogmaDaoABI } from "../components/global/ConnectWalletModal/abi";
import { contractAddress } from "../store/constants";

interface useWeb3AuctionType {
  argument: any[];
}
interface resultType {
  tokenId: number;
  startTime: number;
  endTime: number;
  startPrice: string;
  endPrice: string;
  auctionDropPerStep: string;
  isSold: boolean;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}
export const useWeb3Auction = ({ argument }: useWeb3AuctionType) => {
  const [results, setResults] = useState<any>({});
  const { data, isError, isLoading, isSuccess } = useContractRead(
    {
      addressOrName: contractAddress,
      contractInterface: deDogmaDaoABI,
    },
    "auctions",
    { args: [...argument] }
  );
  useEffect(() => {
    if (data) {
      setResults({
        tokenId: data[0],
        startTime: ethers.BigNumber.from(data[1]).toNumber(),
        endTime: ethers.BigNumber.from(data[2]).toNumber(),
        startPrice: ethers.utils.formatUnits(
          ethers.BigNumber.from(data[3]),
          18
        ),
        endPrice: ethers.utils.formatUnits(ethers.BigNumber.from(data[4]), 18),
        auctionDropPerStep: ethers.utils.formatUnits(
          ethers.BigNumber.from(data[5]),
          18
        ),
        isSold: data[6],
      });
    }
  }, [data]);

  return {
    ...results,
    isError,
    isLoading,
    isSuccess,
  } as resultType;
};
