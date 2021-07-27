import React, { Component } from 'react';
import Link from 'next/link';
import CardImg from '../../assets/img/cards-img/kohgsdfRecurso28.png';
import './ProductCard.css';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

export default class ProductCard extends Component {
	handleDataInfo(data){
		
		gtag('event', 'select_content', {
			"content_type": "product",
			"items": [
						{
							"id": data.product_id,
							"name": data.title,
							"list_name": "Search Results",
							"brand": data.brand,
							"category": data.category,
							"list_position":data.index,
							"quantity": 5,
							'price':data.price,
							'url':'https://kiero.co/detalle/' + data.product_id + '_' + data.title
																							.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
																							.replace('//', '%2F')
																							.replace('%', '')
																							.split(' ')
																							.join('-'),
						}
					]
		});
		dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
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
		// 			'index':data.index,
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
		// })
		dataLayer.push({
			'event': 'productClick',
			'ecommerce': {
				"click": {
					"actionField": {
									"list": "Search Results"
									},
					'products': 
							[{
								'name':data.title,
								'id':data.product_id,
								'brand':data.brand,
								'category':data.category,
								'position':data.index,
								"quantity": 5,
								'price':data.price,
								'url':'https://kiero.co/detalle/' + data.product_id + '_' + data.title
																								.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
																								.replace('//', '%2F')
																								.replace('%', '')
																								.split(' ')
																								.join('-'),
								
						}]
				}
			},
			'eventCallback': function(){
				document.location = 'detalle/' + data.product_id + '_' + data.title
				.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
				.replace('//', '%2F')
				.replace('%', '')
				.split(' ')
				.join('-')
			} 
		})
		// window.location.href = '/detalle/' +
		// data.product_id +
		// '_' +
		// data.title
		// 	.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
		// 	.replace('//', '%2F')
		// 	.replace('%', '')
		// 	.split(' ')
		// 	.join('-')
		
	}
	render() {
		return (
			<div className="producto-card" onClick={() => this.handleDataInfo(this.props)}>
				{/* <div className="productFavIcon3">
					<Checkbox
						style={{ color: '#CF0A2C' }}
						icon={<FavoriteBorder />} 
						checkedIcon={<Favorite />}
					/>
				</div> */}
				{/* <Link
					href={'/detalle/[product]'}
					as={
						'/detalle/' +
						this.props.product_id +
						'_' +
						this.props.title
							.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
							.replace('//', '%2F')
							.replace('%', '')
							.split(' ')
							.join('-')
					}
				> */}
					<a >
						<div className="product-card-img">
							<img
								alt={this.props.title}
								src={
									this.props.url
										? this.props.url
										: 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png'
								}
							/>
						</div>
						<button>Envío gratis</button>
						<h3>
							${' '}
							{this.props.price
								? String(this.props.price)
										.split('.')[0]
										.replace(/(.)(?=(\d{3})+$)/g, '$1.')
								: '$ ... '}
						</h3>
						<h4 className="title">{this.props.title}</h4>
					</a>
				{/* </Link> */}
			</div>
		);
	}
}
