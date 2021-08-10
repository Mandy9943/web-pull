import React from 'react';
import Head from 'next/head';
import ComprobarTransaccion from '../components/SellProduct/ComprobarTransaccion';
import favicon from '../assets/img/favicon.svg';
import {
	isAuthenticated,
	getUser,
	getJwt,
	getUserId,
	redirectIfNotAuthenticated,
} from '../lib/auth';

export default class extends React.Component {
	static async getInitialProps(ctx) {
		if (redirectIfNotAuthenticated(ctx)) {
			return {};
		}

		return {
			jwt: getJwt(ctx),
			user_id: getUserId(ctx),
			user: getUser(ctx),
			authenticated: isAuthenticated(ctx),
		};
	}
	render() {
		return (
			<div>
				<Head>
					<title>Kiero | Productos</title>
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
				<ComprobarTransaccion user_data={this.props} />
			</div>
		);
	}
}
