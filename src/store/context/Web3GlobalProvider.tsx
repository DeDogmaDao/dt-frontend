import { WagmiConfig, createClient } from "wagmi";

const client = createClient({
  autoConnect: true,
});

const Web3GlobalProvider: React.FC = ({ children }) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};
export default Web3GlobalProvider;
