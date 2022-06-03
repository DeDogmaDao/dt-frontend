// types
import type { AppProps } from "next/app";
// libs
import { useRouter } from "next/router";
// components
import Layout from "../components/layout/Layout";

// hooks
// store
const Web3GlobalProvider = dynamic(
  () => import("../store/context/Web3GlobalProvider")
);
// utils & animation
import "../../styles/tailwind.css";
import Head from "next/head";
import { useEffect, useLayoutEffect } from "react";
import TagManager from "react-gtm-module";
import dynamic from "next/dynamic";
import Modal from "../components/global/Modal";
import ToastProvider from "../components/global/ToastProvider";
import Web3MainProvider from "../store/context/Web3Context";
// import { Web3ContextProvider } from "../store/context/Web3Context";
function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();

  // useLayoutEffect(() => {
  //   if (router.pathname !== "underconstruction") {
  //     router.push("/underconstruction");
  //   }
  // }, []);

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-KQ3KRW6" });
  }, []);
  useLayoutEffect(() => {
    const htmlTag: HTMLHtmlElement = document.querySelector("html")!;
    const fontSize: number = parseFloat(
      window.getComputedStyle(htmlTag).fontSize
    );
    const resizeHandlerFont = () => {
      if (window.innerWidth > 1535) {
        const windowWidth = window.innerWidth;
        const scaleFont = windowWidth / 1536;
        htmlTag!.style.fontSize = scaleFont * fontSize + "px";
      } else {
        const htmlTag = document.querySelector("html");
        htmlTag!.style.fontSize = fontSize + "px";
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
      <Web3GlobalProvider>
        <Web3MainProvider>
          <Layout>
            <Component {...pageProps} />
            <ToastProvider />
          </Layout>
        </Web3MainProvider>
      </Web3GlobalProvider>
    </>
  );
}

export default MyApp;
