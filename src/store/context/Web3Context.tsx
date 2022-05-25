import { chain, useConnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
const infuraMainNet = `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`;

const WalletConnect = new WalletConnectConnector({
  chains: [chain.mainnet],
  options: {
    qrcode: true,
    rpc: {
      1: infuraMainNet,
    },
  },
});

const InjectedWallet = new MetaMaskConnector({
  chains: [chain.mainnet],
});

const CoinbaseWallet = new CoinbaseWalletConnector({
  options: {
    appName: "DeDogmaDAO",
    jsonRpcUrl: infuraMainNet,
  },
  chains: [chain.mainnet],
});

interface Web3ProviderStateType {
  metaMaskConnection: () => void;
  walletConnectConnection: () => void;
  coinBaseConnection: () => void;
}

const Web3Context = createContext<Web3ProviderStateType>({
  metaMaskConnection: () => {},
  walletConnectConnection: () => {},
  coinBaseConnection: () => {},
});

export const Web3ContextProvider: React.FC = ({ children }) => {
  const [contextValue, setContextValue] = useState<Web3ProviderStateType>({
    metaMaskConnection: () => {},
    walletConnectConnection: () => {},
    coinBaseConnection: () => {},
  });
  const {
    activeConnector,
    connect,
    connectors,
    error,
    isConnecting,
    pendingConnector,
  } = useConnect();
  console.log(pendingConnector);
  const metaMaskConnection = useCallback(() => {
    connect(InjectedWallet);
  }, [connect, InjectedWallet]);
  const walletConnectConnection = useCallback(() => {
    connect(WalletConnect);
  }, [connect, WalletConnect]);
  const coinBaseConnection = useCallback(() => {
    connect(CoinbaseWallet);
  }, [connect, CoinbaseWallet]);

  useEffect(() => {
    setContextValue({
      metaMaskConnection,
      walletConnectConnection,
      coinBaseConnection,
    });
  }, [metaMaskConnection, walletConnectConnection, coinBaseConnection]);

  return (
    <Web3Context.Provider value={contextValue}>{children}</Web3Context.Provider>
  );
};

export function useWeb3Context() {
  return useContext(Web3Context);
}
