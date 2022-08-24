import { useRouter } from "next/router";
import { useRef } from "react";

export const usePathCondition = (url: string | string[]): boolean => {
  const router = useRouter();
  const result = useRef(false);
  if (url[0]) {
    if (typeof url === "string") {
      if (router.asPath === url) {
        result.current = true;
      }
    } else {
      url.forEach((eachUrl) => {
        if (router.asPath === eachUrl) {
          result.current = true;
        }
      });
    }
  }
  return result.current;
};
