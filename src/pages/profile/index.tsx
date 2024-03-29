import Head from "next/head";
import { Fragment } from "react";
import ProfilePage from "../../components/ProfilePage";
import AuthProvider from "../../store/providers/AuthProvider";
import VerifyingProvider from "../../store/providers/VerifyingProvider";

export default function profile(): JSX.Element {
  return (
    <Fragment>
      {/* <Head>
      <title>{"DDD" + " | " + roadmapPageMetaData.pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={roadmapPageMetaData.desc} />
        <meta name="keywords" content={roadmapPageMetaData.keywords} />
        <link rel="canonical" href={roadmapPageMetaData.pageUrl} />
        <meta property="og:url" content={roadmapPageMetaData.pageUrl} />
        <meta property="og:image" content={roadmapPageMetaData.imageUrl} />
        <meta property="og:description" content={roadmapPageMetaData.desc} />
        <meta
          property="og:title"
          content={
            roadmapPageMetaData.siteTitle + " | " + roadmapPageMetaData.pageTitle
          }
        />
        <meta property="og:site_name" content={roadmapPageMetaData.siteTitle} />
        <meta property="og:see_also" content={roadmapPageMetaData.homePageUrl} />
        <meta name="twitter:card" content={"summary_large_image"} />
        <meta name="twitter:url" content={roadmapPageMetaData.pageUrl} />
        <meta name="twitter:title" content={roadmapPageMetaData.pageTitle} />
        <meta name="twitter:description" content={roadmapPageMetaData.desc} />
        <meta name="twitter:image" content={roadmapPageMetaData.imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="480" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:secure_url" content={roadmapPageMetaData.imageUrl} />
        <meta name="twitter:creator" content="@DeDogmaDao" />
        <meta name="twitter:site" content="@DeDogmaDao" />
      </Head> */}
      <AuthProvider>
          <ProfilePage />
      </AuthProvider>
    </Fragment>
  );
}
