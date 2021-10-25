import React from 'react';
import Head from 'next/head';
import Home from '../components/Home';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { isAuthenticated, getUser, getJwt, getRole } from '../lib/auth';
import favicon from '../assets/img/favicon.svg';
// import 'bootstrap/dist/css/bootstrap.css'

export default class Index extends Component {
	static propTypes = {
		user: PropTypes.string,
		authenticated: PropTypes.bool,
	};

	static async getInitialProps(ctx) {
		return {
			user: getUser(ctx),
			role: getRole(ctx),
			jwt: getJwt(ctx),
			authenticated: isAuthenticated(ctx),
		};
	}

	render() {
		return (
			<div className="home">
				<Head>
					<title>Kiero | Compra Online</title>

					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

					<meta
						name="description"
						content="Descubre miles de productos al mejor precio. Envios
                    gratis a todo el pais, encuentra lo que buscas en Kiero.co"
					/>
					<meta name="Keywords" content="Tienda en Línea" />
					<meta name="Title" content="Compra en Kiero.co - Marketplace" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="black-translucent"
					/>
					<meta
						name="twitter: card"
						content="https://kiero.co/_next/static/images/logo-kiero-
                    8bcc295b260198657f0395231376ca1a.png"
					/>
					<meta name="twitter: site" content="@kierogroup1" />
					<meta
						name="twitter: title"
						content=" Compra en Kiero todo lo encuentras en nuestra
                    Tienda Online"
					/>
					<meta
						name="twitter: description"
						contenido=" Envíos gratis en Colombia, productos para
                    Bebés, Belleza, Cámaras y accesorios, Electrodomésticos, Electrónica, Hogar y muebles y mucho más."
					/>
					<meta
						name="twitter: image"
						content="https://kiero.co/_next/static/images/banners-
                    apk-911388a7cee05467bbd92b4b573820ab.jpg"
					/>
					<meta property="og:type" content="sitio web" />
					<meta
						property="og:title"
						content="Compra en kiero.co todo lo encuentras en nuestra
                    tienda online "
					/>
					<meta
						property="og:description"
						content="Envíos gratis en Colombia, productos para
                    Bebés, Belleza, Cámaras y accesorios, Electrodomésticos, Electrónica, Hogar y muebles y mucho más.
                    "
					/>
					<meta property="og:url" content="https://www.kiero.co/" />
					<meta
						property="og:image"
						content="https://kiero.co/_next/static/images/banners-apk-
                    911388a7cee05467bbd92b4b573820ab.jpg"
					/>
					<link rel="icon" href={favicon} type="image/png" />
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Kiero Marketplace",
                        "url": "https://kiero.co/",
                        "alternateName": "Kiero.co",
                        "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://kiero.co/busqueda/{search_term_string}",
                        "query-input": "required name=search_term_string"
                        },
                        "sameAs": [
                        "https://www.facebook.com/KieroGroup/",
                        "https://www.instagram.com/kierogroup/",
                        "https://www.linkedin.com/in/kiero-group-15a6a7190/",
                        "https://twitter.com/KIEROGROUP1",
                        "https://www.youtube.com/user/KieroGroup",
                        "https://co.pinterest.com/novedadeskiero/pins/"
                        ]
                        }`,
						}}
					></script>
				</Head>
				<Home user_data={this.props} />
			</div>
		);
	}
}
