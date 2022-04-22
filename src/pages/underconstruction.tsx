
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";
import {  useLayoutEffect } from "react";

export default function underconstruction(): JSX.Element {
  const router = useRouter();

  useLayoutEffect(() => {
    if (router.pathname === "/underconstruction") {
      router.push("/");
    }
  }, []);
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

      <div className="w-screen h-screen relative bg-black">
        <Image
          src={"/img/junks/ddd.png"}
          layout="responsive"
          width={1920}
          height={2041}
          alt="ddd dedogmadao"
          
        />
        <div className="absolute left-0 top-[65vw] h-[55vw] w-full bg-gradient-to-b via-black from-transparent to-black"></div>
        <div className="absolute left-[6vw] top-[5vw] flex flex-col justify-center items-center font-serif ">
          <p className="text-[6vw]">DDD</p>
          <p className="text-[3vw]">Under Construction...</p>
        </div>
      </div>
    </Fragment>
  );
}
