import { Html, Head, Main, NextScript } from "next/document";
const scriptTagManager: string = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KQ3KRW6');`;
const noScriptTagManager: string = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQ3KRW6" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: scriptTagManager,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: noScriptTagManager,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
