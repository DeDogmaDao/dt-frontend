import { toast } from "react-toastify";
import { useAuthStore } from "../global/authStore";
import { useWeb3Store } from "../global/web3Store";

interface props {
    children:React.ReactNode;
}

const VerifyingProvider:React.FC<props> = ({children}) => {
    const isVerified = useAuthStore(state=> state.isVerified);
    const disconnect= useWeb3Store(state=> state.connectors.disconnect);

    if(!isVerified){
        setTimeout(() => {
            disconnect();
            setTimeout(() => {
                toast.error("You are not verified, connect your wallet again!");
            }, 300);
        }, 0);
    }
    return<>{children}</>
}

export default VerifyingProvider;