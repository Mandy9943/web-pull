import React, { useState, useEffect, createElement } from 'react';
import { useRouter } from 'next/router'
import Head from "next/head";
import '../styles.css';
// import GeneralChat from '../components/generalChat/index.js';
import SocketChat from '../components/Services/socket';
import SocketUser from '../components/Services/socketuser';
import KieroSocketChat from '../components/Services/kierochat-socket';
import Cookies from 'js-cookie';

export default function MyApp({ Component, pageProps}) {
	const site = "kiero.co";
	const canonicalURL = site + useRouter().asPath;
	useEffect(() => {
		function getGLCID() {
				var match = /gclid=([^&#]*)/.exec(window.location.search);
				return match ? match[1] : "";
		}
		var gclid = getGLCID();
		if(gclid){
				Cookies.set('gclid', gclid, { expires: 90 });
		}
	}, [])

	return (
		<>
		
		<Head>
			<link rel="canonical" href={canonicalURL} />
		</Head>
		{/* Google Tag Manager */}
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

		<script
			dangerouslySetInnerHTML={{ __html: `
					!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
					n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
					n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
					t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
					document,'script','https://connect.facebook.net/en_US/fbevents.js');
					fbq('init', '217430273456334');
					fbq('track', 'PageView');
				`}}
			/>
		<noscript>
			<img height="1" width="1" style={{display:"none"}} src="https://www.facebook.com/tr?id=217430273456334&ev=PageView&noscript=1"
		/>
		</noscript>

		{/* <!--  Clickcease.com tracking--> */}
			<script 
				dangerouslySetInnerHTML={{
					__html: `var script = document.createElement('script');
					script.async = true; script.type = 'text/javascript';
					var target = 'https://www.clickcease.com/monitor/stat.js';
					script.src = target;var elem = document.head;elem.appendChild(script);`,
				}}>
			</script>
		{/* <!--  Clickcease.com tracking--> */}
		{/* <!--  Clickcease.com tracking--> */}
			<noscript>
					<a href='https://www.clickcease.com' rel='nofollow'><img src='https://monitor.clickcease.com/stats/stats.aspx' alt='ClickCease'/></a>
			</noscript>
		{/* Clickcease.com tracking */}

			<SocketChat />
			<SocketUser />
			<KieroSocketChat />
			<Component {...pageProps} />
			{/* <GeneralChat /> */}
		</>
	);
}
