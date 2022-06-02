import { chain, Connector, useConnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { useDisconnect } from 'wagmi';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
const infuraMainNet = `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`;

const WalletConnect = new WalletConnectConnector({
  chains: [chain.hardhat],
  options: {
    qrcode: true,
    rpc: {
      1: infuraMainNet,
    },
  },
});

const InjectedWallet = new MetaMaskConnector({
  chains: [chain.hardhat],
});

const CoinbaseWallet = new CoinbaseWalletConnector({
  options: {
    appName: "DeDogmaDAO",
    jsonRpcUrl: infuraMainNet,
  },
  chains: [chain.hardhat],
});

interface Web3ProviderStateType {
  metaMaskConnection: () => void;
  walletConnectConnection: () => void;
  coinBaseConnection: () => void;
  disconnection:()=>void;
  data:any;
}

const Web3Context = createContext<Web3ProviderStateType>({
  metaMaskConnection: () => {},
  walletConnectConnection: () => {},
  coinBaseConnection: () => {},
  disconnection:()=>{},
  data:""
});

export const Web3ContextProvider: React.FC = ({ children }) => {
  const [contextValue, setContextValue] = useState<Web3ProviderStateType>({
    metaMaskConnection: () => {},
    walletConnectConnection: () => {},
    coinBaseConnection: () => {},
    disconnection:()=>{},
    data:""
  });
  const { disconnect } = useDisconnect();
  const {
    activeConnector,
    connect,
    connectors,
    error,
    isConnecting,
    pendingConnector,
    data,
  } = useConnect();


  useEffect(() =>{
    if(typeof activeConnector !== "undefined"){
      toast.success(`🎉You'r connected! your provider: ${activeConnector.name}`, {
        autoClose: 10000,
        pauseOnHover: true,
        draggable: true,
        });
    }
  },[activeConnector?.name])





  const metaMaskConnection = useCallback(() => {
    connect(InjectedWallet);
  }, [connect, InjectedWallet]);
  const walletConnectConnection = useCallback(() => {
    connect(WalletConnect);
  }, [connect, WalletConnect]);
  const coinBaseConnection = useCallback(() => {
    connect(CoinbaseWallet);
  }, [connect, CoinbaseWallet]);
  const disconnection = useCallback(() => {
    disconnect();
  }, [connect, CoinbaseWallet]);
  
  useEffect(() => {
    setContextValue({
      metaMaskConnection,
      walletConnectConnection,
      coinBaseConnection,
      disconnection,
      data
    });
  }, [metaMaskConnection, walletConnectConnection, coinBaseConnection]);

  
  return (
    <Web3Context.Provider value={contextValue}>{children}</Web3Context.Provider>
  );
};

export function useWeb3Context() {
  return useContext(Web3Context);
}
