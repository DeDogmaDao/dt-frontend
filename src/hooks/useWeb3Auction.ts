import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { deDogmaDaoABI } from "../components/global/ConnectWalletModal/abi";
import { contractAddress } from "../store/constants";
import { auctionResultType, statusType } from "../types/allTypes";

interface returnType {
  results: auctionResultType[] | [];
  status: statusType;
}
export const useWeb3Auction = () => {
  const [results, setResults] = useState<auctionResultType[]>([]);
  const { isError, isSuccess, internal } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: deDogmaDaoABI,
    functionName: "getAuctionsData",
    onSuccess(data) {
      setResults(() => {
        return data.map((el) => {
          return {
            tokenId: el[0],
            startTime: ethers.BigNumber.from(el[1]).toNumber(),
            endTime: ethers.BigNumber.from(el[2]).toNumber(),
            startPrice: Number(
              ethers.utils.formatUnits(ethers.BigNumber.from(el[3]), 18)
            ),
            endPrice: Number(
              ethers.utils.formatUnits(ethers.BigNumber.from(el[4]), 18)
            ),
            auctionDropPerStep: Number(
              ethers.utils.formatUnits(ethers.BigNumber.from(el[5]), 18)
            ),
            isSold: el[6],
            purchasePrice: Number(
              ethers.utils.formatUnits(ethers.BigNumber.from(el[7]), 18)
            ),
            owner: el[8],
          };
        });
      });
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });

  return {
    results,
    status: { isError, isLoading: internal.isFetchedAfterMount, isSuccess },
  } as returnType;
};
