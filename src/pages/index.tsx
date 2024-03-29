import { ethers } from "ethers";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { deDogmaDaoABI } from "../components/global/ConnectWalletModal/abi";
import HowItWorksPage from "../components/HowItWorksPage";
import { useWeb3Contract } from "../hooks/useWeb3Contract";
import { homePageMetaData } from "../store/allData";
export default function home(): JSX.Element {

  return (
    <Fragment>
      <Head>
        <title>{"DDD" + " | " + homePageMetaData.pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={homePageMetaData.desc} />
        <meta name="keywords" content={homePageMetaData.keywords} />
        <link rel="canonical" href={homePageMetaData.pageUrl} />
        <meta property="og:url" content={homePageMetaData.pageUrl} />
        <meta property="og:image" content={homePageMetaData.imageUrl} />
        <meta property="og:description" content={homePageMetaData.desc} />
        <meta
          property="og:title"
          content={
            homePageMetaData.siteTitle + " | " + homePageMetaData.pageTitle
          }
        />
        <meta property="og:site_name" content={homePageMetaData.siteTitle} />
        <meta property="og:see_also" content={homePageMetaData.homePageUrl} />
        <meta name="twitter:card" content={"summary_large_image"} />
        <meta name="twitter:url" content={homePageMetaData.pageUrl} />
        <meta name="twitter:title" content={homePageMetaData.pageTitle} />
        <meta name="twitter:description" content={homePageMetaData.desc} />
        <meta name="twitter:image" content={homePageMetaData.imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="480" />
        <meta property="og:image:type" content="image/jpg" />
        <meta
          property="og:image:secure_url"
          content={homePageMetaData.imageUrl}
        />
        <meta name="twitter:creator" content="@DeDogmaDao" />
        <meta name="twitter:site" content="@DeDogmaDao" />
      </Head>
      <HowItWorksPage />
    </Fragment>
  );
}
