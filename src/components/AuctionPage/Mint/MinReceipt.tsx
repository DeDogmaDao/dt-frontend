import { WriteContractConfig } from "@wagmi/core";
import { ethers } from "ethers";
import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";
import { useFreeze } from "../../../hooks/useFreeze";
import { AngleRightSVG } from "../../../store/svg";
import {
  auctionDataType,
  popUpType,
  statusType,
  transactionResErrorType,
} from "../../../types/allTypes";
import PopUp from "../../global/PopUp";

interface props {
  status: statusType;
  write: (overrideConfig?: WriteContractConfig | undefined) => void;
  buyGodWaiteddata: ethers.providers.TransactionReceipt | undefined;
  buyGodData: ethers.providers.TransactionResponse | undefined;
  auctionData: auctionDataType;
  error: transactionResErrorType;
}
const MinReceipt: React.FC<props> = ({
  status,
  write,
  buyGodWaiteddata,
  error,
  auctionData,
  buyGodData,
}) => {
  const [modalType, setModalType] = useState<popUpType>("neutral");
  const [isOpenModal, setIsOpenModal] = useState(false);
  useFreeze(isOpenModal);
  const modalBackdropClickHandler: MouseEventHandler = (e) => {
    const el = e.target as HTMLDivElement;
    e.stopPropagation();
    if (el.parentElement?.parentElement!.matches("#pop-up")) {
      setIsOpenModal(false);
    }
  };

  useEffect(() => {
    if (status.isError) {
      setModalType("failed");
      setIsOpenModal(true);
    } else if (status.isSuccess) {
      setModalType("successful");
      setIsOpenModal(true);
    } else {
      setModalType("neutral");
    }
  }, [status.isError, status.isLoading, status.isSuccess]);

  const tryAgainHandler = () => {
    write();
    setIsOpenModal(false);
  };
  return (
    <PopUp
      isOpen={isOpenModal}
      id="pop-up"
      onBackdropClick={(e) => modalBackdropClickHandler(e)}
      type={modalType}
      title={
        status.isError
          ? "Oh no, payment failed!"
          : status.isSuccess
          ? "Payment successful!"
          : ""
      }
    >
      <div className="w-full h-full flex flex-col px-8 gap-y-6 pt-10 text-base font-normal text-white/60">
        {modalType === "successful" && (
          <div className="w-full flex justify-between text-base font-normal">
            <span>Card name</span>
            <span className="text-white">{auctionData.godName}</span>
          </div>
        )}
        {modalType === "successful" && (
          <div className="w-full flex justify-between">
            <span>Amount paid</span>
            <span className="text-white">{buyGodData?.timestamp + " ETH"}</span>
          </div>
        )}

        <div className="w-full flex justify-between">
          <span>Transaction ID</span>
          <span className="text-white">
            {(modalType === "successful" &&
              buyGodWaiteddata?.transactionHash) ||
              (modalType === "failed" && error.txHash)}
          </span>
        </div>
        <div className="w-full flex justify-between">
          <span>Transaction time</span>
          <span className="text-white">
            {buyGodData?.timestamp ?? new Date().toUTCString()}
          </span>
        </div>
        {modalType === "failed" && (
          <button
            className="bg-primary-500 w-52 h-12 self-center rounded-full text-xl font-medium text-black hover:bg-primary-500/50 hover:text-white duration-300 border-2 border-primary-500"
            onClick={tryAgainHandler}
          >
            Try again
          </button>
        )}
        <div className="w-full border-t-2 border-white/40 border-dashed" />
        <p className="text-center text-sm flex justify-center items-center">
          {modalType === "successful" &&
            "See more details of the transaction in"}
          {modalType === "failed" && "If you have any problem,"}
          <Link href={modalType === "successful" ? "/profile" : "/contactus"}>
            <a className="flex items-center stroke-primary-500 ml-1 text-primary-500 hover:text-secondary-500 hover:stroke-secondary-500 duration-300">
              {modalType === "successful" && "Profile"}
              {modalType === "failed" && "Contact us"}{" "}
              <AngleRightSVG width={20} height={12} fill="none" />
            </a>
          </Link>
        </p>
      </div>
    </PopUp>
  );
};

export default MinReceipt;
