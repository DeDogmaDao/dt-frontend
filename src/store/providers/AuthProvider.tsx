import { useAuthStore } from "../global/authStore";

const AuthProvider: React.FC = ({ children }) => {
const auth = useAuthStore(state=>state.auth);

  if (!auth) {
    return <p className="w-screen h-screen flex justify-center items-center text-3xl">You are not Connected</p>;
  } else {
    return <>{children}</>;
  }
};

export default AuthProvider;
