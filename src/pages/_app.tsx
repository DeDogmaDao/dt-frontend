// types
import type { AppProps } from "next/app";
// libs
import { useRouter } from "next/router";
// components
import Layout from "../components/layout/Layout";

// hooks
// store
const Web3GlobalProvider = dynamic(
  () => import("../store/providers/Web3GlobalProvider")
);
// utils & animation
import "../../styles/tailwind.css";
import Head from "next/head";
import { useEffect, useLayoutEffect } from "react";
import TagManager from "react-gtm-module";
import dynamic from "next/dynamic";
import Modal from "../components/global/Modal";
import ToastProvider from "../components/global/ToastProvider";
import Web3ConnectProvider from "../store/providers/Web3ConnectProvider";
import { useFontScale } from "../hooks/useFontScale";
import ErrorBoundary from "../hoc/ErrorBoundary";
// import { Web3ContextProvider } from "../store/context/Web3Context";
function MyApp({ Component, pageProps }: AppProps) {
  useFontScale();
  // const router = useRouter();

  // useLayoutEffect(() => {
  //   if (router.pathname !== "underconstruction") {
  //     router.push("/underconstruction");
  //   }
  // }, []);
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-KQ3KRW6" });
  }, []);

  return (
    <>
      <ErrorBoundary>
        <Web3GlobalProvider>
          <Web3ConnectProvider>
            <Layout>
              <Component {...pageProps} />
              <ToastProvider />
            </Layout>
          </Web3ConnectProvider>
        </Web3GlobalProvider>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
