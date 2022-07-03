import {
  chain,
  Connector,
  useAccount,
  useConnect,
  useSignMessage,
} from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { useDisconnect } from "wagmi";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { useWeb3Store } from "../global/web3Store";
import { useRouter } from "next/router";
import { useAuthStore } from "../global/authStore";
import { utils } from "ethers";

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
const infuraMainNet = `https://mainnet.infura.io/v3/65051aee8c444f7db0f4b0869e108bca`;

export const WalletConnect = new WalletConnectConnector({
  chains: [chain.hardhat],
  options: {
    qrcode: true,
    rpc: {
      1: infuraMainNet,
    },
  },
});

export const MetaMaskWallet = new MetaMaskConnector({
  chains: [chain.hardhat],
});

export const CoinbaseWallet = new CoinbaseWalletConnector({
  options: {
    appName: "DeDogmaDAO",
    jsonRpcUrl: infuraMainNet,
  },
  chains: [chain.hardhat],
});

const Web3ConnectProvider: React.FC = ({ children }) => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const setIsVerified = useAuthStore((state) => state.setIsVerified);
  const router = useRouter();
  const { disconnect } = useDisconnect();
  const {
    connect,
    error: connectError,
    isError: connectIsError,
  } = useConnect();
  const { address, connector: activeConnector } = useAccount();

  const { data: signMsgData, signMessage } = useSignMessage({
    message: "upgrade",
  });

  useEffect(() => {
    if (activeConnector) {
      toast.success(
        `🎉You'r connected! your provider: ${activeConnector.name}`,
        {}
      );
    }
  }, [activeConnector]);
  const metaMaskConnection = useCallback(() => {
    connect({ connector: MetaMaskWallet });
  }, [connect, MetaMaskWallet]);
  const walletConnectConnection = useCallback(() => {
    connect({ connector: WalletConnect });
  }, [connect, WalletConnect]);
  const coinBaseConnection = useCallback(() => {
    connect({ connector: CoinbaseWallet });
  }, [connect, CoinbaseWallet]);
  const disconnection = useCallback(() => {
    disconnect();
    router.push("/");
  }, [disconnect]);
  const signingMsg = useCallback(() => {
    signMessage();
  }, [signMessage]);
  // const reseting = useCallback(() => {
  //   reset();
  // }, [reset]);

  const setConnectors = useWeb3Store((state) => state.setConnectors);
  const setActiveConnector = useWeb3Store((state) => state.setActiveConnector);
  const setConnectionData = useWeb3Store((state) => state.setConnectionData);

  useEffect(() => {
    setConnectors({
      metaMask: metaMaskConnection,
      walletConnect: walletConnectConnection,
      coinBase: coinBaseConnection,
      disconnect: disconnection,
      signingMsg: signingMsg,
    });
  }, [
    signingMsg,
    disconnection,
    metaMaskConnection,
    walletConnectConnection,
    coinBaseConnection,
  ]);
  useEffect(() => {
    setActiveConnector(activeConnector);
  }, [activeConnector]);
  useEffect(() => {
    setConnectionData({ address: address, connector: activeConnector });
    if (typeof address === "string") {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [address]);

  useEffect(() => {
    if (connectError) {
      toast.error(connectError?.message);
    }
  }, [connectIsError]);

  useEffect(() => {
    if (signMsgData !== undefined) {
      const signerAddress = utils.verifyMessage("upgrade", `${signMsgData}`);
      if (signerAddress === address) {
        toast.success("You are verified");
        setIsVerified(true);
      } else {
        toast.error("You are not verified");
        setIsVerified(false);
      }
    }
  }, [signMsgData]);
  return <>{children}</>;
};

export default Web3ConnectProvider;
