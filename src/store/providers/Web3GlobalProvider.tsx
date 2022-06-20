import {
  CoinbaseWallet,
  MetaMaskWallet,
  WalletConnect,
} from "./Web3ConnectProvider";
import { WagmiConfig, createClient } from "wagmi";
import { providers } from "ethers";

import { chain, configureChains } from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { providerRPC } from "../constants";

const { chains, provider } = configureChains(
  [chain.hardhat],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: providerRPC,
      }),
    }),
  ],
)

const client = createClient({
  provider:provider,
  autoConnect: true,
  connectors: [MetaMaskWallet, WalletConnect, CoinbaseWallet],
});

const Web3GlobalProvider: React.FC = ({ children }) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};
export default Web3GlobalProvider;
