import React from 'react';
import Head from 'next/head';
import NotificationsMovil from '../components/NotificationsMovil';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { isAuthenticated, getUser, getJwt } from '../lib/auth';
import favicon from '../assets/img/favicon.svg';

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static propTypes = {
		user: PropTypes.string,
		authenticated: PropTypes.bool,
	};

	static async getInitialProps(ctx) {
		return {
			user: getUser(ctx),
			authenticated: isAuthenticated(ctx),
			jwt: getJwt(ctx),
		};
	}

	render() {
		return (
			<div>
				<Head>
					<title>Kiero | Notificaciones</title>

					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

					<meta name="robots" content="noodp" />
					<meta name="robots" content="noydir" />
					<meta
						name="description"
						content="Descubre miles de productos al mejor precio. Envios gratis a todo el pais, encuentra lo que buscas en Kiero.co"
					/>
					<meta name="Keywords" content="Tienda en Línea" />
					<meta name="Title" content="Compra en Kiero.co - Marketplace" />
					<link rel="icon" href={favicon} type="image/png" />
				</Head>
				<NotificationsMovil
					state={this.state}
					user_data={this.props}
					authenticated={this.props.authenticated}
					jwt={this.props.jwt}
				/>
			</div>
		);
	}
}
