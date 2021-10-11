import React from 'react';
import Head from 'next/head';
import CategoriesMovil from '../components/Common/CategoriesMovil/CategoriesMovil';
import { Component } from 'react';
import { getData } from '../services/userApi';
import favicon from '../assets/img/favicon.svg';

export default class lista_categorias extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal2: false,
			showCategories: false,
			categories: [],
			showMenu: false,
		};
	}

	changeSearcherValue = (event) => {
		this.setState({ query: event.target.value });
	};

	handleChange = (e) => {
		this.setState({ query: e.target.value });
	};

	toggleModal = (modal) => {
		const newState = { ...this.state };
		newState[`modal${modal}`] = !newState[`modal${modal}`] ? true : false;
		this.setState(newState);
	};

	showHideMenu = () => {
		this.setState({ showMenu: !this.state.showMenu });
	};

	menuBlur = () => {
		setTimeout(() => this.setState({ showMenu: false }), 200);
	};

	componentDidMount() {
		// getData("/getMenuCategories")
		getData('/getCategoriesForMenu').then((response) => {
			this.setState({ categories: response.data });
		});
	}

	mouseEnter = () => {
		this.setState({ showCategories: true });
	};

	mouseLeave = () => {
		this.setState({ showCategories: false });
	};

	render() {
		console.log(this.state.categories);

		return (
			<div>
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
					<title>Kiero | Categorias</title>
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
				<CategoriesMovil
					toggle={this.mouseLeave}
					num="2"
					categories={this.state.categories}
				/>
			</div>
		);
	}
}
