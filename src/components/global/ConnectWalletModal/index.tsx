import { MouseEvent, MouseEventHandler, useEffect, useState } from "react";
// import { useWeb3Context } from "../../store/context/Web3Context";
import Web3Button from "./Web3Button";
import { useWeb3Context } from "../../../store/context/Web3Context";
import { useWeb3Contract } from "../../../hooks/useWeb3Contract";
import Modal from "../Modal";
import { motion } from "framer-motion";
import Image from "next/image";
import { web3ModalHeaderImg } from "../../../store/img";
import { web3Wallets } from "../../../store/allData";
import { privacyLink, tosLink } from "../../../store/allLinks";

const ConnectWalletModal: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);

  const prov = useWeb3Context();
  const { write, waitedData } = useWeb3Contract({
    functionName: "publicMint",
    args: [2],
    ethersValue: "1.5",
  });

  const modalBackdropClickHandler: MouseEventHandler = (e) => {
    const el = e.target as HTMLDivElement;
    e.stopPropagation();
    if (el.parentElement?.parentElement!.matches("#connect-wallet-modal")) {
      setIsOpenModal(false);
    }
  };

  return (
    <Modal
      isOpen={isOpenModal}
      id="connect-wallet-modal"
      onBackdropClick={(e) => modalBackdropClickHandler(e)}
    >
      <div className="relative w-full h-full flex justify-center items-center backdrop-blur-[.8125rem] ">
        <div
          className="w-[30.8125rem] h-[30.1875rem] rounded-[1.25rem] bg-body-800
         overflow-hidden ring-2 ring-primary-500/30 flex flex-col justify-start"
        >
          <motion.span className="w-full h-[6.3125rem] will-change-transform">
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
                prov.metaMaskConnection();
              }}
            />
            <Web3Button
              index={1}
              name={web3Wallets[1].name}
              onclick={() => {
                write();
                console.log(waitedData);
              }}
            />
            <Web3Button
              index={2}
              name={web3Wallets[2].name}
              onclick={() => {
                prov.disconnection();
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
            <p>Learn more about wallets</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConnectWalletModal;
