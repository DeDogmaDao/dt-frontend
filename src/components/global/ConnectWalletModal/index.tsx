import { MouseEvent, MouseEventHandler, useEffect, useState } from "react";
// import { useWeb3Context } from "../../store/context/Web3Context";
import Web3Button from "./Web3Button";
import { useWeb3Context } from "../../../store/context/Web3Context";
import { useWeb3Contract } from "../../../hooks/useWeb3Contract";
import Modal from "../Modal";

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
      <div className="relative w-full h-full flex justify-center items-center backdrop-blur-[.8125rem]">
        <div className="w-[30.8125rem] h-[30.1875rem] bg-red-500">
          <div className="w-1/2 h-1/2  flex flex-col gap-5 justify-center items-center">
            <Web3Button
              name="connect"
              onclick={() => {
                prov.metaMaskConnection();
              }}
            />
            <Web3Button
              name="disconnect"
              onclick={() => {
                prov.disconnection();
              }}
            />
            <Web3Button
              name="send"
              onclick={() => {
                write();
                console.log(waitedData);
              }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConnectWalletModal;
