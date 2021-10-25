import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getUser, isAuthenticated, getJwt } from '../lib/auth';
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';
import './sass/order.css';
import favicon from '../assets/img/favicon.svg';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { KlaviyoClient } from '../lib/functions';

function PayStatus({ data, u_data }) {
	const router = useRouter();

	const [params, setparams] = useState([]);

	React.useEffect(() => {
		// function whenWindowFbq() {
		//   return new Promise(function (resolve, reject) {
		//         (function waitForFbq(){
		//             if (typeof(window.fbq) == "function" ) return resolve();
		//             setTimeout(waitForFbq, 300);
		//         })();
		//     });
		// };

		const paramsUrl = router.query;
		setparams(paramsUrl);
		if (paramsUrl.extra4 !== undefined) {
			const extra3 = JSON.parse(paramsUrl.extra3.toString());
			const quantity = extra3.qty;

			var listValue = paramsUrl.extra4.split('~');
			if (localStorage.getItem('referenceCode') != paramsUrl.referenceCode) {
				if (paramsUrl.lapResponseCode == 'APPROVED') {
					fbq('track', 'Purchase', {
						id: paramsUrl.transactionId,
						content_ids: listValue[1],
						content_name: listValue[0],
						product_group: listValue[4],
						content_type: 'product',
						content_category: listValue[4],
						contents: [
							{
								id: listValue[1],
								quantity: quantity,
							},
						],
						currency: 'COP',
						value: listValue[2],
						payment_type: paramsUrl.lapPaymentMethodType.toString(),
						num_items: quantity,
					});
					// whenWindowFbq().then(() => {
					//   window.fbq('track','Purchase',{
					//                       'content_ids': listValue[1],
					//                       'content_name': listValue[0],
					//                       'product_group': listValue[4],
					//                       'content_type': 'product',
					//                       'content_category': listValue[4],
					//                       'contents': [{
					//                               'id': listValue[1],
					//                               'quantity': quantity,
					//                             }],
					//                       'currency': 'COP',
					//                       'value': listValue[2],
					//                       'payment_type':'pse',
					//                       'num_items': quantity
					//                     })
					// });

					dataLayer.push({
						event: 'purchase',
						ecommerce: {
							purchase: {
								actionField: {
									id: paramsUrl.transactionId, // Transaction ID. Required for purchases and refunds.
									affiliation: 'SpiceStock',
									revenue: paramsUrl.TX_VALUE.toString(), // Total transaction value (incl. tax and shipping)
									tax: paramsUrl.TX_TAX.toString(),
									shipping: '0',
									aw_merchant_id: '450067839',
									aw_feed_country: 'CO',
									aw_feed_language: 'ES',
									//'coupon': 'SUMMER_SALE'
									items: [
										{
											id: listValue[1],
											quantity: paramsUrl.extra3.toString(),
											price: listValue[2],
										},
									],
								},
								products: [
									{
										// List of productFieldObjects.
										name: listValue[0], // Name or ID is required.
										id: listValue[1],
										price: listValue[2],
										brand: listValue[3],
										category: listValue[4],
										quantity: quantity,
									},
								],
							},
						},
					});
				} else if (paramsUrl.lapResponseCode != 'DECLINED' || 'APPROVED') {
					fbq('trackCustom', 'Pending Purchase', {
						id: paramsUrl.transactionId,
						content_ids: listValue[1],
						content_name: listValue[0],
						content_type: 'product',
						content_category: listValue[4],
						contents: [
							{
								id: listValue[1],
								quantity: quantity,
							},
						],
						currency: 'COP',
						value: listValue[2],
						payment_type: paramsUrl.lapPaymentMethodType.toString(),
						num_items: quantity,
					});
					var item = {
						actionField: {
							id: paramsUrl.transactionId, // Transaction ID. Required for purchases and refunds.
							affiliation: 'SpiceStock',
							revenue: paramsUrl.TX_VALUE.toString(), // Total transaction value (incl. tax and shipping)
							tax: paramsUrl.TX_TAX.toString(),
							shipping: '0',
							aw_merchant_id: '450067839',
							aw_feed_country: 'CO',
							aw_feed_language: 'ES',
							items: [
								{
									id: listValue[1],
									quantity: quantity,
									price: listValue[2],
								},
							],
						},
						products: [
							{
								// List of productFieldObjects.
								name: listValue[0], // Name or ID is required.
								id: listValue[1],
								price: listValue[2],
								brand: listValue[3],
								category: listValue[4],
								quantity: quantity, // Optional fields may be omitted or set to empty string.
							},
						],
					};
					dataLayer.push({
						event: 'pending_transaction',
						ecommerce: {
							pending_transaction: item,
						},
					});

					KlaviyoClient.public.track({
						event: 'pending_transaction',
						email: Cookies.get('email'),
						properties: {
							items: [item],
						},
					});
				}
			}
			localStorage.setItem('referenceCode', paramsUrl.referenceCode);
		}
	}, [router.query]);

	console.log(params);
	return (
		<div className="order-page">
			<Head>
				<title>Kiero | Resultado de compra </title>

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
			<Header />

			{/* <div className="container-success">
        
      </div>  */}
			<section className="order-content">
				<section className="info">
					<h3 className="title">DATOS DE RESULTADO</h3>
					{/* <span className="user-id">USERID: <strong>{data.user_id}</strong></span> */}
					<span>
						Referencia de pago: <strong>{params.referenceCode}</strong>
					</span>
					<span>
						SELLERID: <strong>{params.extra2}</strong>
					</span>
					<span>
						Método de pago: <strong>{params.lapPaymentMethodType}</strong>
					</span>
					<span>
						Estado del pago:
						<strong>
							{params.lapResponseCode == 'APPROVED'
								? 'APROBADO'
								: params.lapResponseCode == 'DECLINED'
								? 'RECHAZADO'
								: 'PENDIENTE'}
						</strong>{' '}
					</span>
					{/* <span>Total a pagar: <strong>{params.cus} </strong></span> */}
					<span className="name-product">
						Nombre del producto: <strong>{params.description}</strong>
					</span>
				</section>
			</section>
			<div className="go-purchases-link">
				<Link href="/">
					<a>
						<p>Ir a compras</p>
					</a>
				</Link>
			</div>

			<Footer />
		</div>
	);
}

export default PayStatus;
