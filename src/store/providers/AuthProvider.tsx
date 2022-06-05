import { useAuthStore } from "../global/authStore";

const AuthProvider: React.FC = ({ children }) => {
const auth = useAuthStore(state=>state.auth);

  if (auth) {
    return <p>Loading</p>;
  }
  return <>{children}</>;
};

export default AuthProvider;
