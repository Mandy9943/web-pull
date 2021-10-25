import React from 'react';
import Head from 'next/head';
import UserChange from '../components/Help/UserChange/UserChange';
import favicon from '../assets/img/favicon.svg';
import {
	getUser,
	isAuthenticated,
	getJwt,
	redirectIfNotAuthenticated,
} from '../lib/auth';

function cambio_usuario({ u_data }) {
	return (
		<div>
			<Head>
				<title>Kiero | Cambio de usuario</title>

				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

				<meta name="robots" content="noodp" />
				<meta name="robots" content="noydir" />
				<meta
					name="description"
					content="Descubre miles de productos al mejor precio. Envios gratis a todo el pais, encuentra lo que buscas en Kiero.co"
				/>
				<meta name="Keywords" content="Tienda en Línea" />
				<link rel="icon" href={favicon} type="image/png" />
			</Head>
			<UserChange u_data={u_data} />
		</div>
	);
}

export async function getServerSideProps(context) {
	let usr = getUser(context);
	let jwt = getJwt(context);

	const u_data = {
		user: usr !== undefined ? usr : null,
		authenticated: isAuthenticated(context),
		jwt: jwt ? jwt : '',
	};

	redirectIfNotAuthenticated(context);

	return { props: { u_data } };
}

export default cambio_usuario;
