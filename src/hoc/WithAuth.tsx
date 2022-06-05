import { useAuth } from "../store/contexts/authContext";

const WithAuth: React.FC = ({ children }) => {
  const { auth } = useAuth();

  if (auth) {
    return <p>Loading</p>;
  }
  return <>{children}</>;
};

export default WithAuth;
