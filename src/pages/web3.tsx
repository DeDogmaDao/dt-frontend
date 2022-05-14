import Head from "next/head";
import { Fragment } from "react";
import Team from "../components/teamPage/Team";
import { teamPageMetaData } from "../store/allData";

export default function web3(): JSX.Element {
  return (
    <Fragment>
        <Team />
    </Fragment>
  );
}
