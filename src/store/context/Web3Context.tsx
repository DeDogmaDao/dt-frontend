import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

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

// const Web3Context = createContext<Web3ProviderState>(web3InitialState);

// export const Web3ContextProvider: React.FC = ({ children }) => {
//   const web3ProviderState = useWeb3();

//   return (
//     <Web3Context.Provider value={web3ProviderState}>
//       {children}
//     </Web3Context.Provider>
//   );
// };

// export function useWeb3Context() {
//   return useContext(Web3Context);
// }
