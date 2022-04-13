import Head from "next/head";
import { Fragment } from "react";
import RoadMapPage from "../components/roadMapPage/RoadMapPage";

export default function roadmap(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* {careerMeta.preload.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))} */}
        {/* <title></title> */}
        {/* <meta name="description" content={} /> */}
        {/* <meta name="keywords" content={careerMeta.keywords} />
        <meta name="author" content={careerMeta.author} /> */}
      </Head>
      <RoadMapPage />
    </Fragment>
  );
}
