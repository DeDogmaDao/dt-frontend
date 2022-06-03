import create from "zustand";
interface connectorsType {
    metaMask: () => void;
    walletConnect: () => void;
    coinBase: () => void;
    disconnect: () => void;
}

interface web3StoreType {
  connectors: connectorsType;
  setConnectors:(connectors: connectorsType) => void;
}
export const useWeb3Store = create<web3StoreType>((set) => ({
  connectors: {
    metaMask: () => {},
    walletConnect: () => {},
    coinBase: () => {},
    disconnect: () => {},
  },
  setConnectors: (connectors:connectorsType) =>
    set({
      connectors: {
        metaMask: connectors.metaMask,
        walletConnect: connectors.walletConnect,
        coinBase: connectors.coinBase,
        disconnect: connectors.disconnect,
      },
    }),
}));
