import Link from "next/link";
import { useWeb3Store } from "../../store/global/web3Store";

const ProfilePage: React.FC = () => {
  const disconnect = useWeb3Store((state) => state.connectors.disconnect);
  const signMessage = useWeb3Store((state) => state.connectors.signingMsg);

  return (
    <div className=" w-full min-h-screen flex flex-col gap-5 justify-center items-center text-3xl text-white">
      <h1>user Profile</h1>
      <button
        className="h-16 bg-yellow-700 text-white px-5 rounded-full hover:bg-yellow-900 duration-300"
        onClick={disconnect}
      >
        Disconnect
      </button>
      <button onClick={signMessage} className="h-16 bg-red-700 text-white px-10 rounded-full hover:bg-red-900 duration-300">
        verify
      </button>
      <Link href="/profile/verify"><a className="h-16 px-10 flex justify-center items-center rounded-full bg-blue-700 hover:bg-blue-900 duration-300">To Private Path</a></Link>
    </div>
  );
};

export default ProfilePage;
