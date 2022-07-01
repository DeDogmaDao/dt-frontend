import { ethers } from "ethers";
import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useContractRead } from "wagmi";
import { useWeb3Contract } from "../../../hooks/useWeb3Contract";
import {
  auctionDropInterval,
  auctionDuration,
  contractAddress,
} from "../../../store/constants";
import { auctionDataType, auctionResultType, statusType } from "../../../types/allTypes";
import ConnectWalletModal from "../../global/ConnectWalletModal";
import { deDogmaDaoABI } from "../../global/ConnectWalletModal/abi";
import Timer from "../../global/Timer";
import { useWeb3Store } from "../../../store/global/web3Store";
import CurrentPrice from "./CurrentPrice";
import MinReceipt from "./MinReceipt";

interface props {
  data: auctionResultType | undefined;
  status: statusType;
  auctionStage: number;
  setAuctionStage: Dispatch<SetStateAction<number>>;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  index: number;
  auctionData:auctionDataType;
}
const BuyButton: React.FC<props> = ({
  data,
  status,
  auctionStage,
  setAuctionStage,
  setActiveIndex,
  index,
}) => {
  const activeConnector = useWeb3Store((state) => state.activeConnector);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [tensTimer, setTensTimer] = useState(-2);
  const [once, setOnce] = useState(false);

  const { data: priceData, refetch: refetchPriceData } = useContractRead(
    {
      addressOrName: contractAddress,
      contractInterface: deDogmaDaoABI,
    },
    "getAuctionPrice",
    { args: [index+1] }
  );
  const { data: updatedData, refetch: refetchUpdatedData } = useContractRead(
    {
      addressOrName: contractAddress,
      contractInterface: deDogmaDaoABI,
    },
    "auctions",
    { args: [1] }
    );
    
    const {
      data: buyGodData,
      write,
      waitedData: buyGodWaiteddata,
      isErrorWrite,
      isLoadingWrite,
      isSuccessWrite,
    } = useWeb3Contract({
      functionName: "buyAGodInAuction",
      args: [index + 1],
      ethersValue: ethers.utils.formatUnits(
        ethers.BigNumber.from(priceData ?? "100"),
        18
        ),
      });
      console.log(ethers.utils.formatUnits(
        ethers.BigNumber.from(priceData ?? "100"),
        18
        ),)
  useEffect(() => {
    if (data && auctionStage > 0) {
      const now = new Date().getTime();

      const timeStep = (data.endTime - now / 1000) / auctionDropInterval;
      setTensTimer(Math.floor(timeStep));
      if (auctionStage === 2) {
        setTimer(Math.round(data.startTime - now / 1000));
      } else if (auctionStage === 1) {
        setTimer(
          Math.round((timeStep - Math.floor(timeStep)) * auctionDropInterval)
        );
      }
    }
  }, [data, auctionStage]);

  useEffect(() => {
    if (data && auctionStage === 1 && tensTimer !== -2) {
      const price: number =
        data.startPrice -
        Math.floor(
          auctionDuration / auctionDropInterval -
            1 /*** -1 bcs we dont have any drop in the beggining of auction ***/ -
            tensTimer
        ) *
          data.auctionDropPerStep;
      if (price < data.endPrice) {
        setCurrentPrice(data.endPrice);
      } else {
        if (once) {
          setCurrentPrice(-1);
          setTimeout(() => {
            setCurrentPrice(price);
          }, 1900);
        } else {
          setOnce(true);
          setCurrentPrice(price);
        }
      }
      if (tensTimer === -1) {
        setAuctionStage(0);
        setTimeout(() => {
          setActiveIndex((prevState) => {
            if (prevState !== 9) {
              return prevState + 1;
            }
            return 9;
          });
        }, 1000);
      }
      refetchPriceData();
      refetchUpdatedData();
    }
  }, [tensTimer]);

   useEffect(()=>{
     console.log(buyGodWaiteddata);
   },[buyGodWaiteddata])
  const buyHandler = () => {
    if (activeConnector) {
      if (updatedData && updatedData[6] === false) {
        write();
      }
    } else {
      setIsOpenModal(true);
    }
  };

  return (
    <div className="flex flex-col justify-start items-start text-xl font-normal">
      <div className="flex justify-center items-center flex-nowrap h-14">
        {auctionStage === 1 ? (
          <>
            The next reduction occurs in:
            <Timer
              time={timer}
              classNames="ml-2"
              setTensTimer={setTensTimer}
              tensTimer={tensTimer}
            />
          </>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-start items-center gap-x-4 mt-6">
        <button
          onClick={buyHandler}
          disabled={
            !status.isLoading || auctionStage === 0 || auctionStage === 2
          }
          className="h-12 w-44 text-xl font-medium flex justify-center items-center
        bg-primary-500 hover:bg-primary-500/50 hover:text-white border-2 border-primary-500 duration-300 rounded-full text-black
        disabled:bg-neutral-800 disabled:hover:bg-neutral-800 disabled:border-primary-500/10 disabled:text-white/60"
        >
          {(auctionStage === 1 && "Buy Now") ||
            (auctionStage === 0 && "Auction is Over!") ||
            (auctionStage === 2 && "Upcoming...")}
        </button>
        <p className="text-xl font-normal flex justify-center items-center">
          {auctionStage === 0 ? (
            <span className="flex gap-x-2">
              <span className="font-bold">Owner:</span>
              <span className="text-primary-500">
                {data?.owner.substring(0, 7) +
                  "..." +
                  data?.owner.substring(data.owner.length - 7)}
              </span>
            </span>
          ) : (
            <span className="font-normal flex gap-x-2">
              Current Price:
              <span className="font-bold">
                {auctionStage === 1 ? (
                  <CurrentPrice price={currentPrice.toFixed(4)} />
                ) : (
                  data?.startPrice.toFixed(4) + " ETH"
                )}
              </span>
            </span>
          )}
        </p>
      </div>
      <ConnectWalletModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      <MinReceipt
        status={{
          isError: isErrorWrite,
          isLoading: isLoadingWrite,
          isSuccess: isSuccessWrite,
        }}
        write={write}
        buyGodWaiteddata={buyGodWaiteddata}
        paidValue={ethers.utils.formatUnits(
          ethers.BigNumber.from(priceData ?? "100"),
          18
          )}
      />
    </div>
  );
};
export default BuyButton;
