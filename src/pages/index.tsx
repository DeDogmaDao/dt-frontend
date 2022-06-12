import { ethers } from "ethers";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { deDogmaDaoABI } from "../components/global/ConnectWalletModal/abi";
import HowItWorksPage from "../components/HowItWorksPage";
import { useWeb3Contract } from "../hooks/useWeb3Contract";
import { homePageMetaData } from "../store/allData";
export default function home(): JSX.Element {
  const [d, setD] = useState<any>({});
  const {data} = useContractRead(
    {
      addressOrName: "0x663f3ad617193148711d28f5334ee4ed07016602",
      contractInterface: deDogmaDaoABI,
    },
    "auctions",
    { args: [5] }
  );
  useEffect(() => {
if(data){
  setD({
    tokenId: data[0],
    startTime: ethers.BigNumber.from(data[1]).toNumber(),
    endTime: ethers.BigNumber.from(data[2]).toNumber(),
    startPrice: ethers.utils.formatUnits(ethers.BigNumber.from(data[3]), 18),
    endPrice: ethers.utils.formatUnits(ethers.BigNumber.from(data[4]), 18),
    auctionDropPerStep: ethers.utils.formatUnits(
      ethers.BigNumber.from(data[5]),
      18
    ),
    isSold: data[6],
  });
}
}, [data]);
console.log(data);
  return (
    <Fragment>
      <Head>
        <title>{"DDD" + " | " + homePageMetaData.pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={homePageMetaData.desc} />
        <meta name="keywords" content={homePageMetaData.keywords} />
        <link rel="canonical" href={homePageMetaData.pageUrl} />
        <meta property="og:url" content={homePageMetaData.pageUrl} />
        <meta property="og:image" content={homePageMetaData.imageUrl} />
        <meta property="og:description" content={homePageMetaData.desc} />
        <meta
          property="og:title"
          content={
            homePageMetaData.siteTitle + " | " + homePageMetaData.pageTitle
          }
        />
        <meta property="og:site_name" content={homePageMetaData.siteTitle} />
        <meta property="og:see_also" content={homePageMetaData.homePageUrl} />
        <meta name="twitter:card" content={"summary_large_image"} />
        <meta name="twitter:url" content={homePageMetaData.pageUrl} />
        <meta name="twitter:title" content={homePageMetaData.pageTitle} />
        <meta name="twitter:description" content={homePageMetaData.desc} />
        <meta name="twitter:image" content={homePageMetaData.imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="480" />
        <meta property="og:image:type" content="image/jpg" />
        <meta
          property="og:image:secure_url"
          content={homePageMetaData.imageUrl}
        />
        <meta name="twitter:creator" content="@DeDogmaDao" />
        <meta name="twitter:site" content="@DeDogmaDao" />
      </Head>
      <HowItWorksPage />
    </Fragment>
  );
}
