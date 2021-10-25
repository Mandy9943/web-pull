import React from 'react';
import Head from 'next/head';
import ConfirmAccount from '../components/Help/ConfirmAccount/ConfirmAccount';
import favicon from '../assets/img/favicon.svg';

export default function confirmar_cuenta() {
	return (
		<div>
			<Head>
				<title>Kiero | Confirmar cuenta</title>

				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

				<meta name="robots" content="noodp" />
				<meta name="robots" content="noydir" />
				<meta
					name="description"
					content="Descubre miles de productos al mejor precio. Envios gratis
                    a todo el pais, encuentra lo que buscas en Kiero.co"
				/>
				<link rel="icon" href={favicon} type="image/png" />
			</Head>
			<ConfirmAccount />
		</div>
	);
}
