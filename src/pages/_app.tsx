import type { AppProps } from "next/app";
import { Fragment } from "react";
// libs
import { config as fontawesomeConfig } from "@fortawesome/fontawesome-svg-core";
// components
import Main from "../components/layout/Main";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
// hooks
// store
// utils & animation
import "../../styles/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";

fontawesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
}

export default MyApp;
