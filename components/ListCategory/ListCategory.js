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
import {handleFormatUrl} from '../../lib/functions'
import Image from 'next/image';

class ListCategory extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount(){

		//console.log('Mounted')

		var awaitProducts = setInterval(function(){
					var dataProducts = document.getElementsByClassName('temp-card');
					if(dataProducts.length){
							// layerGoogle()
							startObserving()
							clearInterval(awaitProducts)
					}
        },
			300)

			const startObserving = () => {

				function sendToSegment(prod, index) {
		
					let product = {
							name: prod.title,
							product_id: prod.product_id,
							price: prod.price,
							brand: prod.brand,
							category: prod.category,
							position: index,
							url:'https://kiero.co' + handleFormatUrl(prod.product_id, prod.title),
							image_url: prod.image
						};
			
					const productListViewed = {
						// nonInteraction: 1,
						list_id: 'listCategory', // + ' RODOLFO_TESTING_FRONT',
						category: props.category,
						products: product
					};
			
					// console.log(productListViewed)
			
					analytics.track('Product List Viewed', productListViewed);
			
				}
		
				// console.log('startObserving')

				let props = this.props
		
				const boxElList = document.querySelectorAll('.d-flex.formatCard')
				if (boxElList.length) {
					
					let options = {
						// root: document.querySelector('#scrollArea'),
						rootMargin: '0px',
						threshold: 1.0
					}
		
					let callback = function(entries, observer) {
						entries.forEach(entry => {
							// Cada entry describe un cambio en la intersección para
							// un elemento observado
							//   entry.boundingClientRect
							//   entry.intersectionRatio
							//   entry.intersectionRect
							//   entry.isIntersecting
							//   entry.rootBounds
							if (entry.isIntersecting) {
								// console.log('Observer')
								// console.log(entry.target.dataset.index)
								//console.log(props.products[entry.target.dataset.index])
								sendToSegment(props.products[entry.target.dataset.index], entry.target.dataset.index)
								observer.unobserve(entry.target)					
							}
						});
		
					};
					
					let observer = new IntersectionObserver(callback, options);
		
					// Declares what to observe, and observes its properties
					boxElList.forEach((el) => {
							observer.observe(el);
					})
					
				}
			}

      //   const layerGoogle = () => {
      //       // dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
      //       // const dataLayerGoogleSearchResultsG4 = this.props.products?.map((prod, index) => {
      //       //     return {
      //       //         item_name: prod.title,
      //       //         item_id: prod.product_id,
      //       //         price: prod.price,
      //       //         item_brand: prod.brand,
      //       //         item_category: prod.category,
      //       //         item_list_name: 'Search Results',
      //       //         url:'https://kiero.co/detalle/' + prod.product_id + '_' + prod.title
      //       //                                                                 .replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
      //       //                                                                 .replace('//', '%2F')
      //       //                                                                 .replace('%', '')
      //       //                                                                 .split(' ')
      //       //                                                                 .join('-'),
      //       //         index: index, 
      //       //     };
      //       // });
      //       // dataLayer.push({
      //       //     'event': 'view_item_list',
      //       //     'ecommerce': {
      //       //     'items': 
      //       //         dataLayerGoogleSearchResultsG4
      //       //     }
      //       // })dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
			// // const dataLayerGoogleSearchUniversal = this.props.products?.map((prod, index) => {
			// // 	return {
			// // 		name: prod.title,
			// // 		id: prod.product_id,
			// // 		price: prod.price,
			// // 		brand: prod.brand,
			// // 		category: prod.category,
			// // 		list: 'Search Result',
			// // 		// url:
			// // 		// 	'https://kiero.co/detalle/' +
			// // 		// 	prod.product_id +
			// // 		// 	'_' +
			// // 		// 	prod.title
			// // 		// 		.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
			// // 		// 		.replaceAll('//', '%2F')
			// // 		// 		.replace('%', '')
			// // 		// 		.split(' ')
			// // 		// 		.join('-'),
			// // 		position: index + 1,
			// // 	};
			// // });

			// // dataLayer.push({
			// // 	event:'gtm.dom',
			// // 	ecommerce: {
			// // 		currencyCode: 'COP',
			// // 		impressions: dataLayerGoogleSearchUniversal,
			// // 	},
			// // });

			// const product_list = this.props.products?.map((prod, index) => {
			// 	return {
			// 		name: prod.title,
			// 		product_id: prod.product_id,
			// 		price: prod.price,
			// 		brand: prod.brand,
			// 		category: prod.category,
			// 		position: index + 1,
			// 		url:'https://kiero.co/detalle/' + prod.product_id + '_' + prod.title
			// 																									.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
			// 																									.replace('//', '%2F')
			// 																									.replace('%', '')
			// 																									.split(' ')
			// 																									.join('-'),
			// 		image_url: prod.image
			// 	};
			// });

			// let temporary, chunk = 4;
			// for (let i = 0, j = product_list.length; i < j; i += chunk) {
			// 		temporary = product_list.slice(i, i + chunk);

			// 		const productListViewed = {
			// 			nonInteraction: 1,
			// 			list_id: 'listCategory', // ' + i/chunk, // + ' - ' + (i+chunk),
			// 			category: this.props.category,
			// 			products: temporary
			// 		};

			// 		//console.log(productListViewed)
		
			// 		analytics.track('Product List Viewed', productListViewed);

			// }

			// // const gtagSearchResultsUniversal = this.props.products?.map((prod, index) => {
      //       //     return {
      //       //         name: prod.title,
      //       //         id: prod.product_id,
      //       //         price: prod.price,
      //       //         brand: prod.brand,
      //       //         category: prod.category,
      //       //         list_name: 'Search Results',
      //       //         url:'https://kiero.co/detalle/' + prod.product_id + '_' + prod.title
      //       //                                                                 .replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
      //       //                                                                 .replace('//', '%2F')
      //       //                                                                 .replace('%', '')
      //       //                                                                 .split(' ')
      //       //                                                                 .join('-'),
			// // 		list_position: index, 
			// // 		quantity: 5
      //       //     };
      //       // });

			// // gtag('event', 'view_item_list', {'items': gtagSearchResultsUniversal})
      //   }
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

		// dataLayer.push({
		// 	event: 'productClick',
		// 	ecommerce: {
		// 		click: {
		// 			actionField: {
		// 				list: 'Search Results',
		// 			},
		// 			products: [
		// 				{
		// 					name: data.title,
		// 					id: data.product_id,
		// 					brand: data.brand,
		// 					category: data.category,
		// 					position: data.index,
		// 					quantity: 5,
		// 					price: data.price,
		// 					url:
		// 						'https://kiero.co/detalle/' +
		// 						data.product_id +
		// 						'_' +
		// 						data.title
		// 							.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
		// 							.replaceAll('//', '%2F')
		// 							.replace('%', '')
		// 							.split(' ')
		// 							.join('-'),
		// 				},
		// 			],
		// 		},
		// 	},

		// 	// eventCallback: function () {
		// 	// 	document.location =
		// 	// 		'https://kiero.co/detalle/' +
		// 	// 		data.product_id +
		// 	// 		'_' +
		// 	// 		data.title
		// 	// 			.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
		// 	// 			.replaceAll('//', '%2F')
		// 	// 			.replace('%', '')
		// 	// 			.split(' ')
		// 	// 			.join('-');
		// 	// },
		// });

		var productClickedData = {
			product_id: data.product_id,
			category: data.category,
			name: data.title,
			brand: data.brand,
			price: data.price,
			quantity: 1,
			position: data.index,
			url: 'https://kiero.co' + handleFormatUrl(data.product_id, data.title),
			image_url: data.image
		}

		analytics.track('Product Clicked', productClickedData);

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
									<a
									 	// href={'/detalle/[product]'}
										href={handleFormatUrl(product.product_id, product.title)}
										// as={
										// 	'/detalle/' +
										// 	product.product_id +
										// 	'_' +
										// 	product.title
										// 		.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
										// 		.replaceAll('//', '%2F')
										// 		.replace('%', '')
										// 		.split(' ')
										// 		.join('-')
										// }
										key={i + 1}
									>
											{/* <div className="productFavIcon">
											<Checkbox
												style={{ color: '#CF0A2C' }}
												icon={<FavoriteBorder />}
												checkedIcon={<Favorite />}
											/>
										</div> */}
											<div
												className="d-flex formatCard"
												data-index={i}
												key={i}
												onClick={() => this.handleDataInfoSearch(product, i)}
												style={{height:'100% !important'}}
											>
												<div className="temp-card">
													<div className="product-card-img">
														<Spinner/>
														<Image
															layout="fill"
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
							  ))
							: this.props.products.map((product, i) => (
									<a
										// href={'/detalle/[product]'}
										href={handleFormatUrl(product.product_id, product.title)}
										// as={
										// 	'/detalle/' +
										// 	product.product_id +
										// 	'_' +
										// 	product.title
										// 		.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
										// 		.replaceAll('//', '%2F')
										// 		.replace('%', '')
										// 		.split(' ')
										// 		.join('-')
										// }
										key={i + 1} 
										onClick={() => this.handleDataInfoSearch(product, i)}
									>
											<div className="temp-list">
												<div className="product-list-img">
													<Spinner/>
													<Image
														layout="fill"
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
