import Head from "next/head";
import { Fragment } from "react";
import AuctionPage from "../components/AuctionPage";
import { faqPageMetaData } from "../store/allData";

export default function auction(): JSX.Element {
  return (
    <Fragment>
      <AuctionPage />
    </Fragment>
  );
}
