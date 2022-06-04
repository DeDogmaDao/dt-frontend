import { chain, Connector, useAccount, useConnect } from "wagmi";
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

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
const infuraMainNet = `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`;

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
  const { disconnect } = useDisconnect();
  const {
    activeConnector,
    connect,
    connectors,
    error,
    isConnecting,
    pendingConnector,
    reset
  } = useConnect();

  const { data } = useAccount();

  useEffect(() => {
    if (activeConnector) {
      toast.success(
        `🎉You'r connected! your provider: ${activeConnector.name}`,
        {}
      );
    }
  }, [activeConnector]);
  const metaMaskConnection = useCallback(() => {
    connect(MetaMaskWallet);
  }, [connect, MetaMaskWallet]);
  const walletConnectConnection = useCallback(() => {
    connect(WalletConnect);
  }, [connect, WalletConnect]);
  const coinBaseConnection = useCallback(() => {
    connect(CoinbaseWallet);
  }, [connect, CoinbaseWallet]);
  const disconnection = useCallback(() => {
    disconnect();
  }, [disconnect]);

  const setConnectors = useWeb3Store((state) => state.setConnectors);
  const setActiveConnector = useWeb3Store((state) => state.setActiveConnector);
  const setConnectionData = useWeb3Store((state) => state.setConnectionData);

  useEffect(() => {
    setConnectors({
      metaMask: metaMaskConnection,
      walletConnect: walletConnectConnection,
      coinBase: coinBaseConnection,
      disconnect: disconnection,
    });
  }, [
    disconnection,
    metaMaskConnection,
    walletConnectConnection,
    coinBaseConnection,
  ]);
  useEffect(() => {
    setActiveConnector(activeConnector);
  }, [activeConnector]);
  useEffect(() => {
    setConnectionData(data);
  }, [data]);
  useEffect(()=>{
    reset();
    disconnect();
  },[])
  // console.log(data);
  return <>{children}</>;
};

export default Web3ConnectProvider;
