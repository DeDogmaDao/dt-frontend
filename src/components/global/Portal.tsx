import { ReactPortal, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface props {
  id: string;
  children:React.ReactNode;
}
const Portal: React.FC<props> = ({ id, children }):ReactPortal | null => {
  const [node, setNode] = useState<HTMLElement | null>();

  useLayoutEffect(() => {
    const nodeElement = document.getElementById(id);
    setNode(nodeElement);
  }, [id, setNode]);

  if (!node) {
    return null;
  }
  return createPortal(children, node);
};

export default Portal;
