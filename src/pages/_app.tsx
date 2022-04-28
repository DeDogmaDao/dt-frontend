// types
import type { AppProps } from "next/app";
// libs

import { useRouter } from "next/router";
// components
import Layout from "../components/layout/Layout";

// hooks
// store
// utils & animation
import "../../styles/tailwind.css";
import Head from "next/head";
import { useEffect, useLayoutEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();

  // useLayoutEffect(() => {
  //   if (router.pathname !== "underconstruction") {
  //     router.push("/underconstruction");
  //   }
  // }, []);

  useLayoutEffect(() => {
    const resizeHandlerFont = () => {
      if (window.innerWidth > 1536) {
        const htmlTag = document.querySelector("html");
        const windowWidth = window.innerWidth;
        const scaleFont = windowWidth / 1536;
        htmlTag!.style.fontSize = scaleFont * 16 + "px";
      } else {
        const htmlTag = document.querySelector("html");
        htmlTag!.style.fontSize = 16 + "px";
      }
    };
    resizeHandlerFont();
    window.addEventListener("resize", resizeHandlerFont);

    return () => {
      window.removeEventListener("resize", resizeHandlerFont);
    };
  }, []);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
