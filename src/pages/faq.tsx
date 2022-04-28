import Head from "next/head";
import { Fragment } from "react";
import FAQ from "../components/faq/FAQ";
import { faqPageMetaData } from "../store/allData";

export default function faq(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{"DDD" + " | " + faqPageMetaData.pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={faqPageMetaData.desc} />
        <meta name="keywords" content={faqPageMetaData.keywords} />
        <link rel="canonical" href={faqPageMetaData.pageUrl} />
        <meta property="og:url" content={faqPageMetaData.pageUrl} />
        <meta property="og:image" content={faqPageMetaData.imageUrl} />
        <meta property="og:description" content={faqPageMetaData.desc} />
        <meta
          property="og:title"
          content={
            faqPageMetaData.siteTitle + " | " + faqPageMetaData.pageTitle
          }
        />
        <meta property="og:site_name" content={faqPageMetaData.siteTitle} />
        <meta property="og:see_also" content={faqPageMetaData.homePageUrl} />
        <meta name="twitter:card" content={"summary_large_image"} />
        <meta name="twitter:url" content={faqPageMetaData.pageUrl} />
        <meta name="twitter:title" content={faqPageMetaData.pageTitle} />
        <meta name="twitter:description" content={faqPageMetaData.desc} />
        <meta name="twitter:image" content={faqPageMetaData.imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="480" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:secure_url" content={faqPageMetaData.imageUrl} />
        <meta name="twitter:creator" content="@DeDogmaDao" />
        <meta name="twitter:site" content="@DeDogmaDao" />
      </Head>
      <FAQ />
    </Fragment>
  );
}
