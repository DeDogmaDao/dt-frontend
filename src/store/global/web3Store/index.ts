import { Connector } from "wagmi";
import create from "zustand";
interface connectorsType {
  metaMask: () => void;
  walletConnect: () => void;
  coinBase: () => void;
  disconnect: () => void;
  signingMsg: () => void;
}
interface connectionDataType {
  address?:string;
  connector?: Connector<any, any> | undefined;
}

interface web3StoreType {
  connectors: connectorsType;
  setConnectors: (connectors: connectorsType) => void;
  activeConnector: Connector<any, any> | undefined;
  setActiveConnector: (connector: Connector<any, any> | undefined) => void;
  connectionData:connectionDataType | undefined;
  setConnectionData: (connectionData:connectionDataType | undefined) => void;
}
export const useWeb3Store = create<web3StoreType>((set) => ({
  connectors: {
    metaMask: () => {},
    walletConnect: () => {},
    coinBase: () => {},
    disconnect: () => {},
    signingMsg: () => {},
  },
  setConnectors: (connectors) =>
    set({
      connectors: {
        metaMask: connectors.metaMask,
        walletConnect: connectors.walletConnect,
        coinBase: connectors.coinBase,
        disconnect: connectors.disconnect,
        signingMsg: connectors.signingMsg,
      },
    }),
  activeConnector: undefined,
  setActiveConnector: (connector) => set({ activeConnector: connector }),
  connectionData: undefined,
  setConnectionData: (connectionData) => set({ connectionData }),
}));
