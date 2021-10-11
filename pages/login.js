import React from 'react';
import { Component } from 'react';
import Head from 'next/head';
import Login from '../components/Login';
import { redirectIfAuthenticated } from '../lib/auth';
import { getCookie, removeCookie } from '../lib/session';
import favicon from '../assets/img/favicon.svg';

export default class login extends Component {
	static getInitialProps(ctx) {
		if (redirectIfAuthenticated(ctx)) {
			return {};
		}

		const success = getCookie('success', ctx.req);
		if (success) {
			removeCookie('success');
		}
		return {
			success,
		};
	}

	render() {
		const { url, success } = this.props;
		return (
			<div className="login-page">
				<Head>
					<title>Kiero | Login</title>
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
				<Login success={success} />
			</div>
		);
	}
}
