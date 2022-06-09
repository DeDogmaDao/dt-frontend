import Head from "next/head";
import { Fragment } from "react";
import FAQ from "../components/faq/FAQ";
import { faqPageMetaData } from "../store/allData";

export default function faq(): JSX.Element {
  return (
    <Fragment>
      <FAQ />
    </Fragment>
  );
}
