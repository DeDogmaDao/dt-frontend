import { useEffect } from "react";

export const useFreeze = (ifTrueFreeze: boolean) => {
  useEffect(() => {
    if (!ifTrueFreeze) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [ifTrueFreeze]);
};
