import Head from "next/head";
import { Fragment } from "react";
import TeamPage from "../components/TeamPage";
import { teamPageMetaData } from "../store/allData";

export default function team(): JSX.Element {
  return (
    <Fragment>
      <Head>
      <title>{"DDD" + " | " + teamPageMetaData.pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={teamPageMetaData.desc} />
        <meta name="keywords" content={teamPageMetaData.keywords} />
        <link rel="canonical" href={teamPageMetaData.pageUrl} />
        <meta property="og:url" content={teamPageMetaData.pageUrl} />
        <meta property="og:image" content={teamPageMetaData.imageUrl} />
        <meta property="og:description" content={teamPageMetaData.desc} />
        <meta
          property="og:title"
          content={
            teamPageMetaData.siteTitle + " | " + teamPageMetaData.pageTitle
          }
        />
        <meta property="og:site_name" content={teamPageMetaData.siteTitle} />
        <meta property="og:see_also" content={teamPageMetaData.homePageUrl} />
        <meta name="twitter:card" content={"summary_large_image"} />
        <meta name="twitter:url" content={teamPageMetaData.pageUrl} />
        <meta name="twitter:title" content={teamPageMetaData.pageTitle} />
        <meta name="twitter:description" content={teamPageMetaData.desc} />
        <meta name="twitter:image" content={teamPageMetaData.imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="480" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:secure_url" content={teamPageMetaData.imageUrl} />
        <meta name="twitter:creator" content="@DeDogmaDao" />
        <meta name="twitter:site" content="@DeDogmaDao" />
      </Head>
        <TeamPage />
    </Fragment>
  );
}
