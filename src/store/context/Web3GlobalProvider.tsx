import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import type {
  ExternalProvider,
  JsonRpcFetchFunc,
} from "@ethersproject/providers";

function getLibrary(provider: ExternalProvider | JsonRpcFetchFunc) {
  return new Web3Provider(provider);
}

 const Web3GlobalProvider: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  );
};
export default Web3GlobalProvider;