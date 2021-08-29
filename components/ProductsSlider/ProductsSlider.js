import React, { Component } from 'react';
import Link from 'next/link';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsSlider.css';
import { getProductsBasic } from '../../services/productsApi';
import Success from '../Login/Success';
import { getImgUrl } from '../../lib/config';
import Slider from 'react-animated-slider';

export default class ProductsSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}
	componentDidMount() {
		getProductsBasic(this.props.category, 25).then((response) => {
			let data = [];
			let product;
			let i = 1;
			for (product in response.data.results) {
				data.push(response.data.results[product]);
			}
			this.setState({ data });
			// dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
			// const dataLayerGoogleSlidersG4 = response.data.results?.map((prod, index) => {
			// 	return {
			// 		item_name: prod.title,
			// 		item_id: prod.product_id,
			// 		price: prod.price,
			// 		item_brand: prod.brand,
			// 		item_category: prod.category,
			// 		item_list_name: 'Sliders Home',
			// 		url:'https://kiero.co/detalle/' + prod.product_id + '_' + prod.title
			// 																.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
			// 																.replace('//', '%2F')
			// 																.replace('%', '')
			// 																.split(' ')
			// 																.join('-'),
			// 		index: index
			// 	};
			// });
			// dataLayer.push({
			// 	'event': 'view_item_list',
			// 	'ecommerce': {
			// 	'items': 
			// 		dataLayerGoogleSlidersG4
			// 	}
			// })
			// dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
			const dataLayerGoogleSlidersUniversal = response.data.results?.map((prod, index) => {
				return {
					name: prod.title,
					id: prod.product_id,
					price: prod.price,
					brand: prod.brand,
					category: prod.category,
					// url:'https://kiero.co/detalle/' + prod.product_id + '_' + prod.title
					// 														.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
					// 														.replace('//', '%2F')
					// 														.replace('%', '')
					// 														.split(' ')
					// 														.join('-'),
					position: index + 1
				};
			});
			dataLayer.push({
				event:'gtm.dom',
				ecommerce: {
					currencyCode: "COP",
					impressions:
						dataLayerGoogleSlidersUniversal
				}
			})
			// const gtagSlidersUniversal = response.data.results?.map((prod, index) => {
			// 	return {
			// 		name: prod.title,
			// 		id: prod.product_id,
			// 		price: prod.price,
			// 		brand: prod.brand,
			// 		category: prod.category,
			// 		list_name: 'Sliders Home',
			// 		url:'https://kiero.co/detalle/' + prod.product_id + '_' + prod.title
			// 																.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
			// 																.replace('//', '%2F')
			// 																.replace('%', '')
			// 																.split(' ')
			// 																.join('-'),
			// 		list_position: index,
			// 		quantity: 5,
			// 	};
			// });
			// gtag('event', 'view_item_list', {
			// 	"items": gtagSlidersUniversal
			// })
		});
	}

	render() {
		// console.log(this.state)
		let productList = [];
		let productListMobile = [];
		let tmpList = [];
		let kid = 0;
		let skid = 0;
		for (let i = 0; i < this.state.data.length; i++) {
			// let url = '';
			// if (this.state.data[i].image) {
			// 	url = getImgUrl(this.state.data[i].image);
			// } else {
			// 	url =
			// 		'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png';
			// }
			// console.log( encodeURIComponent(this.state.data[i].image), "imagen:", '?img=' + this.state.data[i].image)

			let newUrl = 'https://api.kieroapi.net/img/v1/'+ this.state.data[i].product_id + '?img=' + encodeURIComponent(this.state.data[i].image)
			// console.log(this.state.data[i].image)
			tmpList.push(
				<ProductCard
					key={skid++}
					index={skid++}
					price={this.state.data[i].price}
					url={newUrl}
					product_id={this.state.data[i].product_id}
					title={this.state.data[i].title}
					category={this.state.data[i].category}
					brand={this.state.data[i].brand}
				/>
			);

			if ((i + 1) % 5 === 0 && i > 0) {
				productList.push(
					<section key={kid++} className="test">
						{tmpList}
					</section>
				);
				tmpList = [];
			}
		}

		if (tmpList.length > 0) {
			// console.log(tmpList);
			productList.push(
				<section key={kid++} className="test">
					{tmpList}
				</section>
			);
		}

		for (let i = 0; i < this.state.data.length; i++) {
			// let url = '';
			// if (this.state.data[i].image) {
			// 	url = getImgUrl(this.state.data[i].image);
			// } else {
			// 	url =
			// 		'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png';
			// }
			let newUrl = 'https://api.kieroapi.net/img/v1/'+ this.state.data[i].product_id + '?img=' + encodeURIComponent(this.state.data[i].image)
			productListMobile.push(
				<ProductCard
					style={{ padding: '30px' }}
					key={skid++}
					index={skid++}
					price={this.state.data[i].price}
					url={newUrl}
					product_id={this.state.data[i].product_id}
					title={this.state.data[i].title}
					category={this.state.data[i].category}
					brand={this.state.data[i].brand}
				/>
			);
		}

		return (
			<div className="products-slider">
				{!this.props.notitle && (
					<h3 className="home-section-title">
						Descubre productos de {this.props.category && this.props.category}
						<Link
							href={'/categoria/[category]'}
							as={this.props.category && '/categoria/' + this.props.category}
						>
							<a className="accent">Ver todos</a>
						</Link>
					</h3>
				)}
				<div className="slider-movil">
					<section className="content-products-slider">{productListMobile}</section>
				</div>
				<Slider autoplay={5000}>{productList}</Slider>
			</div>
		);
	}
}
