import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import './ListCategory.css';
import { getImgUrl } from '../../lib/config';
import Spinner from '../Common/Spinner';
import CategoryBanners from '../Common/CategoryBanners/CategoryBanners';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

class ListCategory extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(){
	
		var awaitProducts = setInterval(function(){
            var dataProducts = document.getElementsByClassName('temp-card');
            if(dataProducts.length){
                layerGoogle()
                clearInterval(awaitProducts)
            }
        },300)
        const layerGoogle = () => {
            // dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
            // const dataLayerGoogleSearchResultsG4 = this.props.products?.map((prod, index) => {
            //     return {
            //         item_name: prod.title,
            //         item_id: prod.product_id,
            //         price: prod.price,
            //         item_brand: prod.brand,
            //         item_category: prod.category,
            //         item_list_name: 'Search Results',
            //         url:'https://kiero.co/detalle/' + prod.product_id + '_' + prod.title
            //                                                                 .replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
            //                                                                 .replace('//', '%2F')
            //                                                                 .replace('%', '')
            //                                                                 .split(' ')
            //                                                                 .join('-'),
            //         index: index, 
            //     };
            // });
            // dataLayer.push({
            //     'event': 'view_item_list',
            //     'ecommerce': {
            //     'items': 
            //         dataLayerGoogleSearchResultsG4
            //     }
            // })dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
			const dataLayerGoogleSearchUniversal = this.props.products?.map((prod, index) => {
				return {
					name: prod.title,
					id: prod.product_id,
					price: prod.price,
					brand: prod.brand,
					category: prod.category,
					list: 'Search Result',
					// url:
					// 	'https://kiero.co/detalle/' +
					// 	prod.product_id +
					// 	'_' +
					// 	prod.title
					// 		.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
					// 		.replaceAll('//', '%2F')
					// 		.replace('%', '')
					// 		.split(' ')
					// 		.join('-'),
					position: index + 1,
				};
			});
			dataLayer.push({
				event:'gtm.dom',
				ecommerce: {
					currencyCode: 'COP',
					impressions: dataLayerGoogleSearchUniversal,
				},
			});

			// const gtagSearchResultsUniversal = this.props.products?.map((prod, index) => {
            //     return {
            //         name: prod.title,
            //         id: prod.product_id,
            //         price: prod.price,
            //         brand: prod.brand,
            //         category: prod.category,
            //         list_name: 'Search Results',
            //         url:'https://kiero.co/detalle/' + prod.product_id + '_' + prod.title
            //                                                                 .replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
            //                                                                 .replace('//', '%2F')
            //                                                                 .replace('%', '')
            //                                                                 .split(' ')
            //                                                                 .join('-'),
			// 		list_position: index, 
			// 		quantity: 5
            //     };
            // });

			// gtag('event', 'view_item_list', {'items': gtagSearchResultsUniversal})
        }
	}
	handleDataInfoSearch = (data, index)=> {
		// gtag('event', 'select_content', {
		// 	content_type: 'product',
		// 	items: [
		// 		{
		// 			id: data.product_id,
		// 			name: data.title,
		// 			list_name: 'Search Results',
		// 			brand: data.brand,
		// 			category: data.category,
		// 			list_position: index,
		// 			quantity: 5,
		// 			price: data.price,
		// 			url:
		// 				'https://kiero.co/detalle/' +
		// 				data.product_id +
		// 				'_' +
		// 				data.title
		// 					.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
		// 					.replace('//', '%2F')
		// 					.replace('%', '')
		// 					.split(' ')
		// 					.join('-'),
		// 		},
		// 	],
		// });
		// dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
		// dataLayer.push({
		// 	'event': 'select_item',
		// 	'ecommerce': {
		// 	'items':
		// 		{
		// 			'item_name':data.title,
		// 			'item_id':data.product_id,
		// 			'item_brand':data.brand,
		// 			'item_category':data.category,
		// 			'item_list_name':'ListCategory',
		// 			'index':index,
		// 			"quantity": 5,
		// 			'price':data.price,
		// 			'url':'https://kiero.co/detalle/' + data.product_id + '_' + data.title
		// 																			.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
		// 																			.replace('//', '%2F')
		// 																			.replace('%', '')
		// 																			.split(' ')
		// 																			.join('-'),
		// 		}
		// 	}
		// });
		dataLayer.push({
			event: 'productClick',
			ecommerce: {
				click: {
					actionField: {
						list: 'Search Results',
					},
					products: [
						{
							name: data.title,
							id: data.product_id,
							brand: data.brand,
							category: data.category,
							position: data.index,
							quantity: 5,
							price: data.price,
							url:
								'https://kiero.co/detalle/' +
								data.product_id +
								'_' +
								data.title
									.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
									.replaceAll('//', '%2F')
									.replace('%', '')
									.split(' ')
									.join('-'),
						},
					],
				},
			},
			eventCallback: function () {
				document.location =
					'https://kiero.co/detalle/' +
					data.product_id +
					'_' +
					data.title
						.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
						.replaceAll('//', '%2F')
						.replace('%', '')
						.split(' ')
						.join('-');
			},
		});

		// window.location.href = '/detalle/' +
		// data.product_id +
		// '_' +
		// data.title
		// 	.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
		// 	.replace('//', '%2F')
		// 	.replace('%', '')
		// 	.split(' ')
		// 	.join('-')
	};
	render() {
		const Class = this.props.format == 'grid' ? 'grid' : 'list';
		return (
			<div className="wrap-list-category">
				<CategoryBanners category={this.props.category} />

				<div className={Class}>
					{this.props.products &&
						this.props.products.length > 0 &&
						(this.props.format == 'grid'
							? this.props.products.map((product, i) => (
									<Link
										href={'/detalle/[product]'}
										as={
											'/detalle/' +
											product.product_id +
											'_' +
											product.title
												.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
												.replaceAll('//', '%2F')
												.replace('%', '')
												.split(' ')
												.join('-')
										}
									>
										<a key={i}>
											{/* <div className="productFavIcon">
											<Checkbox
												style={{ color: '#CF0A2C' }}
												icon={<FavoriteBorder />}
												checkedIcon={<Favorite />}
											/>
										</div> */}
											<div
												className="d-flex"
												key={i}
												onClick={() => this.handleDataInfoSearch(product, i)}
											>
												<div className="temp-card">
													<div className="product-card-img">
														<img
															alt={product.title}
															src={'https://api.kieroapi.net/img/v1/'+ product.product_id + '?img=' + encodeURIComponent(product.image)}
															// src={getImgUrl(product.image)}
															className="img"
														/>
													</div>
													<div className="product-card-description-box">
														<h2>
															{' '}
															$
															{product.price
																? String(product.price)
																		.split('.')[0]
																		.replace(/(.)(?=(\d{3})+$)/g, '$1.')
																: '$ ... '}
														</h2>
														<h4>{product.brand} </h4>
														<div className="product-card-description">
															<p>
																{product.title.substr(0, 60) +
																	(product.title.length > 60 ? '...' : '.')}
															</p>
															{/* {parseInt(product.is_prime) ? ( */}
															<div className="kiero-envios-card">
																<div className="kiero-envios-card-icon">
																	<FontAwesomeIcon icon={faTruck} />
																</div>
																<div>Envío gratis</div>
															</div>
															{
																// ) : (
																// 	''
																// )}
															}
														</div>
													</div>
												</div>
											</div>
										</a>
									</Link>
							  ))
							: this.props.products.map((product, i) => (
									<Link
										href={'/detalle/[product]'}
										as={
											'/detalle/' +
											product.product_id +
											'_' +
											product.title
												.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
												.replaceAll('//', '%2F')
												.replace('%', '')
												.split(' ')
												.join('-')
										}
									>
										<a key={i + 1} onClick={() => this.handleDataInfoSearch(product, i)}>
											<div className="temp-list">
												<div className="product-list-img">
													<img
														alt={product.title}
														src={'https://api.kieroapi.net/img/v1/'+ product.product_id + '?img=' + encodeURIComponent(product.image)}
														// src={getImgUrl(product.image)}
														className="img"
													/>
												</div>
												<div className="product-list-description-box">
													<h2>
														${' '}
														{product.price
															? String(product.price)
																	.split('.')[0]
																	.replace(/(.)(?=(\d{3})+$)/g, '$1.')
															: '$ ... '}{' '}
													</h2>
													<h4>{product.brand}</h4>
													<p>{product.title}</p>
													{/* {parseInt(product.is_prime) ? ( */}
													<div className="kiero-envios-card">
														<div className="kiero-envios-card-icon">
															<FontAwesomeIcon icon={faTruck} />
														</div>
														<div>Envío gratis</div>
													</div>
													{
														// ) : (
														// 	''
														// )}
													}
												</div>
											</div>
										</a>
									</Link>
							  )))}
				</div>

				{(!this.props.products || this.props.products.length === 0) && (
					<div className="fetching-empty">
						{this.props.products ? (
							<div className="text">
								Lo sentimos, no logramos encontrar lo que buscas.
							</div>
						) : (
							<div className="spinner" style={{ marginTop: 200 }}>
								<Spinner />
							</div>
						)}
					</div>
				)}
			</div>
		);
	}
}

export default ListCategory;
