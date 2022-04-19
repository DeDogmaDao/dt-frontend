import Head from "next/head";
import { Fragment } from "react";
import HowItWorks from "../components/howItWorksPage/HowItWorks";
import { homePageMetaData } from "../store/allData";

export default function home(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* {homePageMetaData.preload.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))} */}
        <title>{homePageMetaData.title}</title>
        <meta name="description" content={homePageMetaData.description} />
        <meta name="keywords" content={homePageMetaData.keywords} />
        <meta name="author" content={homePageMetaData.author} />
      </Head>
      <HowItWorks />
    </Fragment>
  );
}
