import { useHasMounted } from "../hooks/useHasMounted";
interface props {
  children:React.ReactNode;
}

const ClientOnly: React.FC<props> = ({ children }) => {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
