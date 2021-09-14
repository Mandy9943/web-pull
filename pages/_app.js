import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import '../styles.css';

import GeneralChat from '../components/generalChat/index.js';
import SocketChat from '../components/Services/socket';
import SocketUser from '../components/Services/socketuser';
import KieroSocketChat from '../components/Services/kierochat-socket';
export default function MyApp({ Component, pageProps}) {
	// const router = useRouter()
	// useEffect(() => {
	// 	import('react-facebook-pixel')
	// 	.then((x) => x.default)
	// 	.then((ReactPixel) => {
	// 		ReactPixel.init('217430273456334') // facebookPixelId
	// 		ReactPixel.pageView()
	// 		router.events.on('routeChangeComplete', () => {
	// 			ReactPixel.pageView()
	// 			ReactPixel.track("ViewContent")
	// 		})
	// 	})
	// }, [router.events])

	return (
		<>
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
               
		 	<script async src="https://www.googletagmanager.com/gtag/js?id=GTM-TXNXPM7"></script>
			<script
				dangerouslySetInnerHTML={{
				__html: `
									window.dataLayer = window.dataLayer || [];
									function gtag(){window.dataLayer.push(arguments);}
									gtag('js', new Date());
						
									gtag('config', 'GTM-TXNXPM7', { page_path: window.location.pathname });
								
							`
				}}
			/>
			<script
				dangerouslySetInnerHTML={{
				__html: `

					function createCookie(name,value,days) {
						if (days) {
							var date = new Date();
							date.setTime(date.getTime()+(days*24*60*60*1000));
							var expires = "; expires="+date.toGMTString();
						}
						else var expires = "";
						document.cookie = name+"="+value+expires+"; path=/";
					}
					
					function readCookie(name) {
						var nameEQ = name + "=";
						var ca = document.cookie.split(';');
						for(var i=0;i < ca.length;i++) {
							var c = ca[i];
							while (c.charAt(0)==' ') c = c.substring(1,c.length);
							if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
						}
						return null;
					}

					function getGLCID() {
							var match = /gclid=([^&#]*)/.exec(window.location.search);
							return match[1];
					}

					//window.onload = () => {
						var gclid = getGLCID();

						if(gclid){
							alert(gclid);
							createCookie('gclid', gclid, 90);
						}
					//};
									
					`
				}}
			/>
			<SocketChat />
			<SocketUser />
			<KieroSocketChat />
			<Component {...pageProps} />
			<GeneralChat />
		</>
	);
}
