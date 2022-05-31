import { PropsWithChildren, ReactNode } from "react";
import { useHasMounted } from "../hooks/useHasMounted";

const ClientOnly = ({
  children,
}: PropsWithChildren<{ children?: ReactNode }>) => {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  return children;
};

export default ClientOnly;
