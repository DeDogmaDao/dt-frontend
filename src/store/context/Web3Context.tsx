import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import { createContext, useCallback } from "react";

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

interface Web3ProviderStateType {}

const Web3Context = createContext<Web3ProviderStateType>({});

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

  return <Web3Context.Provider value={{}}>{children}</Web3Context.Provider>;
};

// export function useWeb3Context() {
//   return useContext(Web3Context);
// }
