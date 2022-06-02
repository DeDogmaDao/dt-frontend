import { useState } from "react";
import ConnectWalletModal from "../../global/ConnectWalletModal";

const ConnectWallet: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const walletModalClickHandler = () => {
    setIsOpenModal((prevState) => {
      if (prevState === true) {
        return false;
      }
      return true;
    });
  };
  return (
    <>
      <button
        onClick={walletModalClickHandler}
        className="w-[8.125rem] h-10 z-50 text-sm text-black font-bold cursor-pointer pointer-events-auto flex justify-center items-center text-center
        absolute top-[2rem] right-[4.5rem] bg-primary-500 hover:bg-primary-700 rounded-full"
      >
        Connect Wallet
      </button>
      <ConnectWalletModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </>
  );
};

export default ConnectWallet;
