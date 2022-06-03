import { CoinbaseWallet, MetaMaskWallet, WalletConnect } from "./Web3ConnectProvider";
import { WagmiConfig, createClient } from "wagmi";

const client = createClient({
  autoConnect: true,
  connectors: [MetaMaskWallet, WalletConnect, CoinbaseWallet],
});

const Web3GlobalProvider: React.FC = ({ children }) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};
export default Web3GlobalProvider;
