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
            dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
            const dataLayerGoogleSearchResults = this.props.products?.map((prod, index) => {
                return {
                    item_name: prod.title,
                    item_id: prod.product_id,
                    price: prod.price,
                    item_brand: prod.brand,
                    item_category: prod.category,
                    item_list_name: 'Search Results',
                    url:'https://kiero.co/detalle/' + prod.product_id + '_' + prod.title
                                                                            .replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
                                                                            .replace('//', '%2F')
                                                                            .replace('%', '')
                                                                            .split(' ')
                                                                            .join('-'),
                    index: index
                };
            });
            dataLayer.push({
                'event': 'view_item_list',
                'ecommerce': {
                'items': 
                    dataLayerGoogleSearchResults
                }
            })
        }

	}
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
									<div key={i}>
										{/* <div className="productFavIcon">
											<Checkbox
												style={{ color: '#CF0A2C' }}
												icon={<FavoriteBorder />}
												checkedIcon={<Favorite />}
											/>
										</div> */}
										<Link
											href={
												'/detalle/' +
												product.product_id +
												'_' +
												product.title
													.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
													.split(' ')
													.join('-')
											}
											key={i}
										>
											<a className="d-flex">
												<div className="temp-card">
													<div className="product-card-img">
														<img
															alt={product.title}
															src={getImgUrl(product.image)}
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
											</a>
										</Link>
									</div>
							  ))
							: this.props.products.map((product, i) => (
									<Link
										href={
											'/detalle/' +
											product.product_id +
											'_' +
											product.title.split(' ').join('-')
										}
										key={i}
									>
										<a>
											<div className="temp-list">
												<div className="product-list-img">
													<img
														alt={product.title}
														src={getImgUrl(product.image)}
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
