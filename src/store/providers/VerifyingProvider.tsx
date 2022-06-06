import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useAuthStore } from "../global/authStore";
import { useWeb3Store } from "../global/web3Store";

const VerifyingProvider:React.FC = ({children}) => {
    const router = useRouter();
    const isVerified = useAuthStore(state=> state.isVerified);
    const disconnect= useWeb3Store(state=> state.connectors.disconnect);

    if(!isVerified){
        setTimeout(() => {
            toast.error("You are not verified, connect your wallet again!");
            disconnect();
        }, 0);
    }
    return<>{children}</>
}

export default VerifyingProvider;