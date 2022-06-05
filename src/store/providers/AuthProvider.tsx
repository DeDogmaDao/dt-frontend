import { useAuth } from "../contexts/authContext";

const AuthProvider: React.FC = ({ children }) => {
  const { auth } = useAuth();

  if (auth) {
    return <p>Loading</p>;
  }
  return <>{children}</>;
};

export default AuthProvider;
