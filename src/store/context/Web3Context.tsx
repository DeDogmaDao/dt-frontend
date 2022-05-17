import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import { createContext, useCallback, useContext } from "react";

const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
  appName: "DeDogmaDao",
  supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
  rpc: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

interface Web3ProviderStateType {
  metaMaskConnection: () => void;
  walletConnectConnection: () => void;
  coinBaseConnection: () => void;
  closeConnection: () => void;
  active: boolean;
  error: Error | undefined;
  account: string | null | undefined;
  chainId: number | undefined;
  connector: any;
  library: any;
}

const Web3Context = createContext<Web3ProviderStateType>({
  metaMaskConnection: () => {},
  walletConnectConnection: () => {},
  coinBaseConnection: () => {},
  closeConnection: () => {},
  active: false,
  error: undefined,
  account: undefined,
  chainId: undefined,
  connector: undefined,
  library: undefined,
});

export const Web3ContextProvider: React.FC = ({ children }) => {
  const {
    activate,
    deactivate,
    active,
    setError,
    account,
    chainId,
    connector,
    error,
    library,
  } = useWeb3React();
  const metaMaskConnection = useCallback(() => {
    activate(Injected);
  }, [activate, Injected]);
  const walletConnectConnection = useCallback(() => {
    activate(WalletConnect);
  }, [activate, WalletConnect]);
  const coinBaseConnection = useCallback(() => {
    activate(CoinbaseWallet);
  }, [activate, CoinbaseWallet]);
  const closeConnection = useCallback(() => {
    deactivate();
  }, [deactivate]);

  const contextValue = {
    metaMaskConnection,
    walletConnectConnection,
    coinBaseConnection,
    closeConnection,
    active,
    error,
    account,
    chainId,
    connector,
    library,
  };

  return (
    <Web3Context.Provider value={contextValue}>{children}</Web3Context.Provider>
  );
};

export function useWeb3Context() {
  return useContext(Web3Context);
}