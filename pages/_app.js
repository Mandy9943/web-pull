import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import '../styles.css';

import GeneralChat from '../components/generalChat/index.js';
import SocketChat from '../components/Services/socket';
import SocketUser from '../components/Services/socketuser';
import KieroSocketChat from '../components/Services/kierochat-socket';
export default function MyApp({ Component, pageProps}) {
	const router = useRouter()
	useEffect(() => {
		import('react-facebook-pixel')
		.then((x) => x.default)
		.then((ReactPixel) => {
			ReactPixel.init('217430273456334') // facebookPixelId
			ReactPixel.pageView()
			router.events.on('routeChangeComplete', () => {
				ReactPixel.pageView()
				ReactPixel.track("ViewContent")
			})
		})
	}, [router.events])

	return (
		<>
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
			<SocketChat />
			<SocketUser />
			<KieroSocketChat />
			<Component {...pageProps} />
			<GeneralChat />
		</>
	);
}
