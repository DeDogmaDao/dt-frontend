import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { useWeb3Store } from "../../../store/global/web3Store";
import { connectWalletHoverTolltipAni } from "../../../utils/animation";
import ConnectWalletModal from "../../global/ConnectWalletModal";

const ConnectWallet: React.FC = () => {
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const account = useWeb3Store((state) => state.connectionData);

  const modifiedAddress: string = account?.address
    ? account?.address!.slice(0, 5) + "..." + account?.address!.slice(-5)
    : "";

  const walletModalClickHandler = () => {
    if (account?.address) {
      router.push("/profile");
    } else {
      setIsOpenModal((prevState) => {
        if (prevState === true) {
          return false;
        }
        return true;
      });
    }
  };
  return (
    <>
      <motion.button
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={walletModalClickHandler}
        className="w-[8.125rem] h-10 z-50 text-sm text-white font-bold cursor-pointer pointer-events-auto flex justify-center items-center text-center
        absolute top-[2rem] right-[4.5rem] bg-primary-500 hover:bg-primary-700 rounded-full"
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <p>{account?.address ? modifiedAddress : "Connect Wallet"}</p>
          {isHovered && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={connectWalletHoverTolltipAni}
              className="absolute left-0 top-full mt-1 w-full h-full
           bg-neutral-500/50 text-white/40 rounded-full flex justify-center items-center"
            >
              User Profile
            </motion.div>
          )}
        </div>
      </motion.button>
      <ConnectWalletModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </>
  );
};

export default ConnectWallet;
