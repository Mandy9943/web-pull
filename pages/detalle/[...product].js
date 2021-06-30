import React from 'react';
import Head from 'next/head';
import Detail from '../../components/ProductDetail';
import { getProductDetail } from '../../services/productsApi';
import { getUser, isAuthenticated, getJwt } from '../../lib/auth';
import favicon from '../../assets/img/favicon.svg';

function Product({ data, u_data }) {
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
				<title>Kiero.co | {data.title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="Description"
					content={`KIERO.CO MARKETPLACE | Compralo en Kiero ${data.title} a ${
						data.price
					} - Envío
      gratis - Encuentra más productos de ${data.category ? data.category.name : ''}`}
				/>
				<meta name="Keywords" content={`${data.title}`} />
				<meta name="Title" content={`Kiero.co -${data.title} a ${data.price}`} />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
				<meta name="google" content="notranslate" />
				<meta
					name="twitter: card"
					content="Envíos gratis en Colombia, productos para Bebés, Belleza, Cámaras y accesorios,
      Electrodomésticos, Electrónica, Hogar y muebles y mucho más."
				/>
				<meta name="twitter: site" content="@kierogroup1" />
				<meta
					name="twitter: title"
					content=" Compra en Kiero todo lo encuentras en nuestra Tienda
      Online"
				/>
				<meta
					name="twitter: description"
					contenido=" Envíos gratis en Colombia, productos para Bebés, Belleza, Cámaras y accesorios,
      Electrodomésticos, Electrónica, Hogar y muebles y mucho más."
				/>
				<meta name="twitter: image" content={`${data.images[0].url}`} />
				<meta
					property="og:title"
					content={`Compra en Kiero.co - Encuentra ${
						data.category ? data.category.name : ''
					} en Kiero.co`}
				/>
				<meta
					property="og:description"
					content={`Encuentra ${
						data.title
					} en Kiero.co - Descubre millones de productos online.
      Encuentra ${data.category ? data.category.name : ''} en Kiero.co`}
				/>
				<meta
					property="og:url"
					content={`https://kiero.co/detalle/${data.product_id}_${data.title
						.replace(/[^\w\s\/]/gi, '')
						.split(' ')
						.join('-')}`}
				/>
				<meta property="og:locale" content="es_ES" />
				<meta property="og:type" content="WebSite" />
				<meta property="og:site_name" content="Kiero.co" />
				<meta property="og:image" content={`${data.images[0].url}`} />
				<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
				<meta name="robots" content="index,follow" />
				<link rel="icon" href={favicon} type="image/png" />
				<link
					rel="canonical"
					href={`https://kiero.co/detalle/${data.product_id}_${data.title
						.replace(/[^\w\s\/]/gi, '')
						.replace('//', '%2F')
						.replace('%', '')
						.split(' ')
						.join('-')}`}
				/>

				<script
					type="application/json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org/',
							'@type': 'Product',
							name: `${data.title}`,
							image: `${data.images[0].url}`,
							description: `${data.description}`,
							brand: `${data.brand}`,
							sku: `${data.product_id}`,
							offers: {
								// "@type": "Offer","url": "{product.product_url}",
								priceCurrency: 'COP',
								price: '3',
								// "priceValidUntil": "{product.created_since}",
								availability: 'https://schema.org/InStock',
								itemCondition: 'https://schema.org/NewCondition',
							},
							aggregateRating: {
								'@type': 'AggregateRating',
								// "ratingValue": "{product.rating}",
								bestRating: '5',
								worstRating: '0',
								// "ratingCount": "{product.rating.count}"
							},
						}),
					}}
				></script>
			</Head>
			{/* Google Tag Manager (noscript) */}
			<noscript
				dangerouslySetInnerHTML={{
					__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXNXPM7" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
				}}
			/>
			{/* End Google Tag Manager (noscript) */}

			<Detail user_data={u_data} data={data} />
		</div>
	);
}

// This gets called on every request
export async function getServerSideProps(context) {
	// Fetch data from external API
	let temp_p = String(context.params.product).split('_');
	const id_product = temp_p[0];

	const res = await getProductDetail(id_product, {
		params: { is_variant: false, product_global_id: id_product },
	});

	const data = await res.data;

	let usr = getUser(context);
	let jwt = getJwt(context);

	const u_data = {
		user: usr !== undefined ? usr : null,
		authenticated: isAuthenticated(context),
		jwt: jwt ? jwt : '',
	};

	return { props: { data: data.data, u_data } };
}

export default Product;
