import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
// import { useWeb3Context } from "../../store/context/Web3Context";
import Web3Button from "./Web3Button";
import Modal from "../Modal";
import { motion } from "framer-motion";
import Image from "next/image";
import { web3ModalHeaderImg } from "../../../store/img";
import { walletsID, web3Wallets } from "../../../store/allData";
import { privacyLink, tosLink } from "../../../store/allLinks";
import { AngleRightSVG } from "../../../store/svg";
import { useWeb3Store } from "../../../store/global/web3Store";
import { useFreeze } from "../../../hooks/useFreeze";

interface props {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  isOpenModal: boolean;
}
const ConnectWalletModal: React.FC<props> = ({
  isOpenModal,
  setIsOpenModal,
}) => {
  useFreeze(isOpenModal);
  const walletsHandler = useWeb3Store((state) => state.connectors);
  const activeConnector = useWeb3Store((state) => state.activeConnector);
  const connectionData = useWeb3Store((state) => state.connectionData);

  // const { write, waitedData } = useWeb3Contract({
  //   functionName: "publicMint",
  //   args: [2],
  //   ethersValue: "1.5",
  // });

  const modalBackdropClickHandler: MouseEventHandler = (e) => {
    const el = e.target as HTMLDivElement;
    e.stopPropagation();
    if (el.parentElement?.parentElement!.matches("#connect-wallet-modal")) {
      setIsOpenModal(false);
    }
  };

  useEffect(() => {
    if (walletsID.some((el) => activeConnector?.id.includes(el))) {
      setIsOpenModal(false);
    }
  }, [activeConnector?.id]);
  const learnMoreAboutWallets = () => {
    window.open("https://metamask.io/download.html", "_blank");
  };
  return (
    <Modal
      isOpen={isOpenModal}
      id="connect-wallet-modal"
      onBackdropClick={(e) => modalBackdropClickHandler(e)}
    >
      <div className="relative w-full h-full flex justify-center items-center backdrop-blur-[.8125rem]">
        <div
          className="w-[30.8125rem] h-[30.1875rem] rounded-[1.25rem] bg-body-800
         overflow-hidden ring-2 ring-primary-500/30 flex flex-col justify-start shadow-[0_58px_33px_-42px_rgba(44,237,255,0.29)]"
        >
          <motion.span className="w-full h-[6.3125rem] will-change-transform relative flex justify-center items-center">
            <h3 className="text-2xl font-bold absolute z-10">Connect Wallet</h3>
            <span className=" w-full h-full">
              <Image
                alt="modal header"
                src={web3ModalHeaderImg}
                layout={"fill"}
                quality={90}
                placeholder="blur"
              />
            </span>
          </motion.span>
          <div className="w-full mt-12 flex flex-col justify-center items-center">
            <Web3Button
              index={0}
              name={web3Wallets[0].name}
              onclick={() => {
                walletsHandler.metaMask();
              }}
            />
            <Web3Button
              index={1}
              name={web3Wallets[1].name}
              onclick={() => {
                walletsHandler.walletConnect();
              }}
            />
            <Web3Button
              index={2}
              name={web3Wallets[2].name}
              onclick={() => {
                walletsHandler.coinBase();
              }}
            />
          </div>
          <div className="w-full h-20 mt-6 flex flex-col justify-center items-center gap-y-3 text-center">
            <p className="w-8/12">
              By connecting your wallet, you agree to our{" "}
              <a
                href={tosLink}
                target={"_blank"}
                className="link-inside-text font-bold"
              >
                Terms of Service
              </a>{" "}
              and our{" "}
              <a
                href={privacyLink}
                target={"_blank"}
                className="link-inside-text font-bold"
              >
                Privacy Policy.
              </a>
            </p>
            <button
              onClick={learnMoreAboutWallets}
              className="flex items-center gap-1 text-[.75rem] hover:text-primary-500 duration-500"
            >
              Learn more about wallets{" "}
              <span className="w-1 stroke-white">
                <AngleRightSVG />
              </span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConnectWalletModal;
