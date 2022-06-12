import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { deDogmaDaoABI } from "../components/global/ConnectWalletModal/abi";

interface useWeb3AuctionType {
  argument: any[];
}
export const useWeb3Auction = ({ argument }: useWeb3AuctionType) => {
  const [results, setResults] = useState<any>({});
  const { data, isError, isLoading, isSuccess } = useContractRead(
    {
      addressOrName: "0x663f3ad617193148711d28f5334ee4ed07016602",
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
  };
};
