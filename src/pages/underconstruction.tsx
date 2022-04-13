import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

export default function underconstruction(): JSX.Element {
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
          src={"/img/junks/const.png"}
          layout="responsive"
          width={1920}
          height={2041}
        />
        <div className="absolute left-0 top-[65vw] h-[55vw] w-full bg-gradient-to-b via-black from-transparent to-black"></div>
        <div className="absolute left-[6vw] top-[5vw] flex flex-col justify-center items-center font-serif ">
          <span className="text-[10vw]  text-primary-500">
            <FontAwesomeIcon className="animate-spin" icon={faGear} />
          </span>
          <p className="text-[6vw]">DDD</p>
          <p className="text-[3vw]">Under Construction...</p>
        </div>
      </div>
    </Fragment>
  );
}
