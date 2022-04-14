// types
import type { AppProps } from "next/app";
// libs
import { config as fontawesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
// components
import Layout from "../components/layout/Layout";

// hooks
// store
// utils & animation
import "../../styles/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { useEffect, useLayoutEffect } from "react";

fontawesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();

  // useLayoutEffect(() => {
  //   if (router.pathname !== "underconstruction") {
  //     router.push("/underconstruction");
  //   }
  // }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
