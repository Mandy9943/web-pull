import React from 'react';
import Head from 'next/head';
import SecurityAccount from '../components/Help/SecurityAccount/SecurityAccount';
import favicon from '../assets/img/favicon.svg';

export default function seguridad() {
	return (
		<div>
			<Head>
				<title>Kiero | Resguardar seguridad</title>
				<meta name="robots" content="noindex" />
				<meta name="googlebot" content="noindex" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
				<meta name="robots" content="index,follow" />
				<meta name="robots" content="noodp" />
				<meta name="robots" content="noydir" />
				<meta
					name="description"
					content="Descubre miles de productos al mejor precio. Envios gratis
                    a todo el pais, encuentra lo que buscas en Kiero.co"
				/>
				<link rel="icon" href={favicon} type="image/png" />
			</Head>
			{/* Google Tag Manager (noscript) */}
			<noscript
				dangerouslySetInnerHTML={{
					__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXNXPM7" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
				}}
			/>
			{/* End Google Tag Manager (noscript) */}
			<SecurityAccount />
		</div>
	);
}
