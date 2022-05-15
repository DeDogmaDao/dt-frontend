import React, { ReactChild, createContext, useContext } from "react";
import { useWeb3 } from "../../hooks/useWeb3";
import { Web3ProviderState } from "../../types/allTypes";
import { web3InitialState } from "../reducers";

const Web3Context = createContext<Web3ProviderState>(web3InitialState);

export const Web3ContextProvider: React.FC = ({ children }) => {
  const web3ProviderState = useWeb3();

  return (
    <Web3Context.Provider value={web3ProviderState}>
      {children}
    </Web3Context.Provider>
  );
};

export function useWeb3Context() {
  return useContext(Web3Context);
}
