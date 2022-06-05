import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthType {
  auth: boolean;
}
interface setAuthType {
  setAuth: (status: boolean) => void;
}
const AuthStateContext = createContext<AuthType>({ auth: false });
const AuthDispatchContext = createContext<setAuthType>({
  setAuth: (status) => {},
});

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const setAuthAction = useCallback(
    (status: boolean) => {
      setAuth(status);
    },
    [setAuth]
  );

  useEffect(() => {}, []);

  return (
    <AuthStateContext.Provider value={{ auth: auth }}>
      <AuthDispatchContext.Provider value={{setAuth:setAuthAction}}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuth = () => useContext(AuthStateContext);
const useSetAuth = () => useContext(AuthDispatchContext);

export default AuthProvider;
export { useAuth, useSetAuth };
