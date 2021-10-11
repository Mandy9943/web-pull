import React, { Component } from 'react';
import Head from 'next/head';
import '../sass/activate.css';
import favicon from '../../assets/img/favicon.svg';
import { getData } from '../../services/userApi';
import Link from 'next/link';

var result = false;

function Activate({ result }) {
	return (
		<div className="activate-page">
			<Head>
				{/* Google Tag Manager */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TXNXPM7');`,
					}}
				/>
				{/* End Google Tag Manager */}
				<title>Kiero | Activar mi cuenta</title>
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

			{result ? (
				<div className="msg">
					<Link href="/">
						<a>ir al Marketplace</a>
					</Link>
				</div>
			) : (
				<div className="msg">
					<span>Se produjo un error al activar su cuenta.</span>
				</div>
			)}
		</div>
	);
}

function setS(state) {
	result = state;
}

export async function getServerSideProps(context) {
	const data = {
		token: String(context.params.token),
	};
	await getData('/activate/' + context.params.token).then(() => setS(true));

	return { props: { result } };
}

export default Activate;
