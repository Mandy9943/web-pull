import React from 'react';
import Head from 'next/head';
import AddAddress from '../components/UserAccount/AddAddress/AddAddress';
import PropTypes from 'prop-types';
import { getJwt, redirectIfNotAuthenticated } from '../lib/auth';
import { completeData } from '../services/userApi';
import favicon from '../assets/img/favicon.svg';

export default class agregar_direccion extends React.Component {
	static propTypes = {
		user: PropTypes.string,
		authenticated: PropTypes.bool,
	};

	static async getInitialProps(ctx) {
		if (redirectIfNotAuthenticated(ctx)) {
			return {};
		}

		return {
			jwt: getJwt(ctx),
		};
	}

	render() {
		return (
			<div>
				<Head>
					<title>Kiero | Agregar dirección</title>
					<meta name="robots" content="noindex" />
					<meta name="googlebot" content="noindex" />
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
				<AddAddress jwt={this.props.jwt} />
			</div>
		);
	}
}
