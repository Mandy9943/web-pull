import React from 'react';
import Head from 'next/head';
import SellProduct from '../components/SellProduct/SellProduct';
import favicon from '../assets/img/favicon.svg';
import { getUser, isAuthenticated, getJwt } from '../lib/auth';

export default function vender_producto({ sesion }) {
	return (
		<div>
			<Head>
				<title>Kiero | Productos</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
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
			<SellProduct data={sesion} />
		</div>
	);
}

// export async function getServerSideProps(context) {
// 	let usr = await getUser(context);
// 	let jwt = await getJwt(context);
// 	const session = {
// 		user: usr !== undefined ? usr : null,
// 		authenticated: isAuthenticated(context),
// 		jwt: jwt ? jwt : '',
// 	};

// 	return  session ;
// }

// export async function getServerSideProps(ctx) {
// 	let jwt = getJwt(ctx);

// 	return {
// 		props: {
// 			user_d: {
// 				jwt: jwt,
// 				user: getUser(ctx),
// 				authenticated: isAuthenticated(ctx),
// 			},
// 		},
// 	};
// }
