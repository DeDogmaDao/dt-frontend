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
const AuthContext = createContext<AuthType>({ auth: false });
const IsVerifiedContext = createContext<AuthType>({ auth: false });
const SetAuthContext = createContext<setAuthType>({
  setAuth: (status) => {},
});
const SetIsVerifiedContext = createContext<setAuthType>({
  setAuth: (status) => {},
});

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const setAuthAction = useCallback(
    (status: boolean) => {
      setAuth(status);
    },
    [setAuth]
  );
  const setIsVerifiedAction = useCallback(
    (status: boolean) => {
      setIsVerified(status);
    },
    [setIsVerified]
  );

  return (
    <AuthContext.Provider value={{ auth: auth }}>
      <IsVerifiedContext.Provider value={{ auth: isVerified }}>
        <SetAuthContext.Provider value={{ setAuth: setAuthAction }}>
          <SetIsVerifiedContext.Provider value={{ setAuth: setIsVerifiedAction }}>
            {children}
          </SetIsVerifiedContext.Provider>
        </SetAuthContext.Provider>
      </IsVerifiedContext.Provider>
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
const useSetAuth = () => useContext(SetAuthContext);
const useIsVerified = () => useContext(IsVerifiedContext);
const useSetIsVerified = () => useContext(SetIsVerifiedContext);

export default AuthProvider;
export { useAuth, useSetAuth, useIsVerified, useSetIsVerified };
