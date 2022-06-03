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

interface Web3ProviderStateType {
  metaMaskConnection: () => void;
  walletConnectConnection: () => void;
  coinBaseConnection: () => void;
  disconnection:()=>void;
  activeConnector:Connector<any, any> | undefined;
  data:any;
}

const Web3Context = createContext<Web3ProviderStateType>({
  metaMaskConnection: () => {},
  walletConnectConnection: () => {},
  coinBaseConnection: () => {},
  disconnection:()=>{},
  data:"",
  activeConnector: undefined,
});

export const Web3ContextProvider: React.FC = ({ children }) => {
  const [contextValue, setContextValue] = useState<Web3ProviderStateType>({
    metaMaskConnection: () => {},
    walletConnectConnection: () => {},
    coinBaseConnection: () => {},
    disconnection:()=>{},
    data:"",
    activeConnector: undefined,
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
    if(activeConnector){
      toast.success(`🎉You'r connected! your provider: ${activeConnector.name}`, {
        });
    }
  },[activeConnector])





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
  
  useEffect(() => {
    setContextValue({
      metaMaskConnection,
      walletConnectConnection,
      coinBaseConnection,
      disconnection,
      data,
      activeConnector,
    });
  }, [metaMaskConnection, walletConnectConnection, coinBaseConnection]);

  console.log(activeConnector)
  return (
    <Web3Context.Provider value={contextValue}>{children}</Web3Context.Provider>
  );
};

export function useWeb3Context() {
  return useContext(Web3Context);
}
