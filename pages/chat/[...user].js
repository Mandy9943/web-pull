import React from 'react';
import { Component } from 'react';
import Head from 'next/head';
import Chat from '../../components/Common/Chat';
import '../sass/chat.css';
import { getChat } from '../../services/chatApi';
import {
	getName,
	getLastName,
	getUserId,
	getJwt,
	redirectIfNotAuthenticated,
	isAuthenticated,
} from '../../lib/auth';
import favicon from '../../assets/img/favicon.svg';

function chat(precomp) {
	return (
		<div className="chat-page">
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
				<title>Kiero | Chat</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
				<meta name="robots" content="index,follow" />
				<meta name="robots" content="noodp" />
				<meta name="robots" content="noydir" />
				<meta
					name="description"
					content="Descubre miles de productos al mejor precio. Envios gratis a todo el pais, encuentra lo que buscas en Kiero.co"
				/>
				<meta name="Keywords" content="Tienda en Línea" />
				<link rel="icon" href={favicon} type="image/png" />
			</Head>
			{/* Google Tag Manager (noscript) */}
			<noscript
				dangerouslySetInnerHTML={{
					__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXNXPM7" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
				}}
			/>
			{/* End Google Tag Manager (noscript) */}
			<Chat data={precomp} />
		</div>
	);
}

export async function getServerSideProps(context) {
	if (redirectIfNotAuthenticated(context)) {
		return {};
	}
	let name = getName(context);
	let LastName = getLastName(context);
	let usr = getUserId(context);
	let user_id = context.params.user[0];
	let data = null;
	let chat_uid = null;
	let jwt = getJwt(context);
	let authenticated = isAuthenticated(context);
	console.log(usr);

	if (user_id !== '' && user_id) {
		// const res = await getChat(user_id,jwt )
		// data = await res.data
		// if(data.data){
		//     chat_uid = data.u;
		//     data = data.data;
		// }else{
		//     data = [];
		// }
	}
	return {
		props: {
			messages: data,
			jwt,
			name,
			LastName,
			chat_uid,
			myID: usr,
			user_id,
			authenticated,
		},
	};
}

export default chat;
