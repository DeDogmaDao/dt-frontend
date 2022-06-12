import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { deDogmaDaoABI } from "../components/global/ConnectWalletModal/abi";


export const useWeb3Auction = () => {
    const [results, setResults] = useState<any>({});
    const {data} = useContractRead(
      {
        addressOrName: "0x663f3ad617193148711d28f5334ee4ed07016602",
        contractInterface: deDogmaDaoABI,
      },
      "auctions",
      { args: [5] }
    );
    useEffect(() => {
  if(data){
    setResults({
      tokenId: data[0],
      startTime: ethers.BigNumber.from(data[1]).toNumber(),
      endTime: ethers.BigNumber.from(data[2]).toNumber(),
      startPrice: ethers.utils.formatUnits(ethers.BigNumber.from(data[3]), 18),
      endPrice: ethers.utils.formatUnits(ethers.BigNumber.from(data[4]), 18),
      auctionDropPerStep: ethers.utils.formatUnits(
        ethers.BigNumber.from(data[5]),
        18
      ),
      isSold: data[6],
    });
  }
  }, [data]);
  
}