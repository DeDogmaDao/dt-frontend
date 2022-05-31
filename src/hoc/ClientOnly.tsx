import { useHasMounted } from "../hooks/useHasMounted";

const ClientOnly: React.FC = ({ children }) => {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
