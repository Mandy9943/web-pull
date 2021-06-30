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
		});
	}

	render() {
		let productList = [];
		let productListMobile = [];
		let tmpList = [];
		let kid = 0;
		let skid = 0;
		for (let i = 0; i < this.state.data.length; i++) {
			let url = '';
			if (this.state.data[i].image) {
				url = getImgUrl(this.state.data[i].image);
			} else {
				url =
					'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png';
			}
			tmpList.push(
				<ProductCard
					key={skid++}
					price={this.state.data[i].price}
					url={url}
					product_id={this.state.data[i].product_id}
					title={this.state.data[i].title}
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
			console.log(tmpList);
			productList.push(
				<section key={kid++} className="test">
					{tmpList}
				</section>
			);
		}

		for (let i = 0; i < this.state.data.length; i++) {
			let url = '';
			if (this.state.data[i].image) {
				url = getImgUrl(this.state.data[i].image);
			} else {
				url =
					'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png';
			}
			productListMobile.push(
				<ProductCard
					style={{ padding: '30px' }}
					key={skid++}
					price={this.state.data[i].price}
					url={url}
					product_id={this.state.data[i].product_id}
					title={this.state.data[i].title}
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
				<Slider infinite={false} autoplay={4000}>
					{productList}
				</Slider>
			</div>
		);
	}
}
