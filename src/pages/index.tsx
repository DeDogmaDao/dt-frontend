import Head from "next/head";
import { Fragment } from "react";
import HowItWorks from "../components/howItWorksPage/HowItWorks";

export default function home(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <title>{"pageTitle"}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="{{description}}" />
        <meta name="keywords" content="{{keywords}}" />
        <link rel="author" href="https://plus.google.com/{{googlePlusId}}" />
        <link rel="canonical" href="{{pageUrl}}" />
        <meta property="og:url" content="{{pageUrl}}" />
        <meta property="og:image" content="{{imageUrl}}" />
        <meta property="og:description" content="{{description}}" />
        <meta property="og:title" content="{{pageTitle}}" />
        <meta property="og:site_name" content="{{siteTitle}}" />
        <meta property="og:see_also" content="{{homepageUrl}}" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="{{pageUrl}}" />
        <meta name="twitter:title" content="{{pageTitle}}" />
        <meta name="twitter:description" content="{{description}}" />
        <meta name="twitter:image" content="{{imageUrl}}" />
      </Head>
      <HowItWorks />
    </Fragment>
  );
}
