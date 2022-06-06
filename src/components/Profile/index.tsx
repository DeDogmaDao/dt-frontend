import { useWeb3Store } from "../../store/global/web3Store";

const Profile: React.FC = () => {
  const disconnect = useWeb3Store((state) => state.connectors.disconnect);
  
  return (
    <div className=" w-full min-h-screen flex flex-col gap-5 justify-center items-center text-3xl text-white">
      <h1>user Profile</h1>
      <button
        className="h-16 bg-yellow-700 text-white px-5 rounded-full hover:bg-yellow-900"
        onClick={disconnect}
      >
        Disconnect
      </button>
      <button className="h-16 bg-red-700 text-white px-5 rounded-full hover:bg-red-900">
        verify
      </button>
    </div>
  );
};

export default Profile;
