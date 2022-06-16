import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { deDogmaDaoABI } from "../components/global/ConnectWalletModal/abi";
import { contractAddress } from "../store/constants";

interface resultType {
  tokenId: number;
  startTime: number;
  endTime: number;
  startPrice: string;
  endPrice: string;
  purchasePrice:string;
  owner:string;
  auctionDropPerStep: string;
  isSold: boolean;
}
interface returnType {
  results: resultType[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}
export const useWeb3Auction = () => {
  const [results, setResults] = useState<resultType[]>([]);
  const { data, isError, isLoading, isSuccess } = useContractRead(
    {
      addressOrName: contractAddress,
      contractInterface: deDogmaDaoABI,
    },
    "getAuctionsData"
  );
  useEffect(() => {
    if (data) {
      setResults(() => {
        return data.map((el) => {
          return {
            tokenId: el[0],
            startTime: ethers.BigNumber.from(el[1]).toNumber(),
            endTime: ethers.BigNumber.from(el[2]).toNumber(),
            startPrice: ethers.utils.formatUnits(
              ethers.BigNumber.from(el[3]),
              18
            ),
            endPrice: ethers.utils.formatUnits(
              ethers.BigNumber.from(el[4]),
              18
            ),
            auctionDropPerStep: ethers.utils.formatUnits(
              ethers.BigNumber.from(el[5]),
              18
            ),
            isSold: el[6],
            purchasePrice: ethers.utils.formatUnits(
              ethers.BigNumber.from(el[7]),
              18
            ),
            owner: el[8],
          };
        });
      });
    }
  }, [data]);

  return {
    results,
    isError,
    isLoading,
    isSuccess,
  } as returnType;
};
