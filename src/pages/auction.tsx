import Head from "next/head";
import { Fragment } from "react";
import FAQ from "../components/faqPage";
import { faqPageMetaData } from "../store/allData";

export default function auction(): JSX.Element {
  return (
    <Fragment>
      <FAQ />
    </Fragment>
  );
}
