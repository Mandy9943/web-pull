import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import "../styles.css";
// import GeneralChat from '../components/generalChat/index.js';
// import SocketChat from "../components/Services/socket";
// import SocketUser from "../components/Services/socketuser";
// import KieroSocketChat from "../components/Services/kierochat-socket";
import Cookies from "js-cookie";

import store from "../redux/store";

export default function MyApp({ Component, pageProps }) {
  const routeChange = () => {
    // Temporary fix to avoid flash of unstyled content
    // during route transitions. Keep an eye on this
    // issue and remove this code when resolved:
    // https://github.com/vercel/next.js/issues/17464

    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

  Router.events.on("routeChangeComplete", routeChange);
  Router.events.on("routeChangeStart", routeChange);
  const site = "https://kiero.co";
  const canonicalURL = site + useRouter().asPath;
  useEffect(() => {
    function getGLCID() {
      var match = /gclid=([^&#]*)/.exec(window.location.search);
      return match ? match[1] : "";
    }
    var gclid = getGLCID();
    if (gclid) {
      Cookies.set("gclid", gclid, { expires: 90 });
    }
  }, []);

  return (
    <Provider store={store}>
      <>
        <Head>
          <link rel="canonical" href={canonicalURL} />
        </Head>
        {
          /* Google Tag Manager */
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=false;j.src=
                        'https://kiero.co/gtm.js';f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-TXNXPM7');`,
              }}
            />
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://kiero.co/gtm.js" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
            />
          </>
        }

        {/* Ref: https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/quickstart/ */}
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://kiero.co/segment.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="EJTw0k2D4p4adMxwngG0r2wjOmGUDfMN";;analytics.SNIPPET_VERSION="4.15.3";
						analytics.load("EJTw0k2D4p4adMxwngG0r2wjOmGUDfMN");
						analytics.page();
						}}();`,
          }}
        />

        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
					!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
					n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
					n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
					t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
					document,'script','https://connect.facebook.net/en_US/fbevents.js');
					fbq('init', '217430273456334');
					fbq('track', 'PageView');
				`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=217430273456334&ev=PageView&noscript=1"
          />
        </noscript>

        {/* <!--  Clickcease.com tracking--> */}
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `var script = document.createElement('script');
					script.async = true; script.type = 'text/javascript';
					var target = 'https://www.clickcease.com/monitor/stat.js';
					script.src = target;var elem = document.head;elem.appendChild(script);`,
          }}
        ></script>
        {/* <!--  Clickcease.com tracking--> */}
        {/* <!--  Clickcease.com tracking--> */}
        <noscript>
          <a href="https://www.clickcease.com" rel="nofollow">
            <img
              src="https://monitor.clickcease.com/stats/stats.aspx"
              alt="ClickCease"
            />
          </a>
        </noscript>
        {/* Clickcease.com tracking */}

        {/* <SocketChat />
        <SocketUser />
        <KieroSocketChat /> */}
        <Component {...pageProps} />
        {/* <GeneralChat /> */}
      </>
    </Provider>
  );
}
