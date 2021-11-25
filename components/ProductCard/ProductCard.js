import React, { Component } from "react";
import Link from "next/link";
import CardImg from "../../assets/img/banners/news/1.jpg";
import "./ProductCard.css";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { handleFormatUrl } from "../../lib/functions";
import Image from "next/image";
import Spinner from "./../Common/Spinner";

export default class ProductCard extends Component {

	constructor(props) {
		super(props)
		this.rootRef = React.createRef()
	}

	sendToSegment = () => {
		
		let product = {
				name: this.props.title,
				product_id: this.props.product_id,
				price: this.props.price,
				brand: this.props.brand,
				category: this.props.category,
				position: this.props.index,
				url: 'https://kiero.co'+ handleFormatUrl(this.props.product_id, this.props.title),
				image_url: this.props.url
			};

		const productListViewed = {
			// nonInteraction: 1,
			list_id: 'productsSlider', // + ' RODOLFO_TESTING_FRONT',
			category: this.props.category,
			products: product
		};

		// console.log(productListViewed)

		analytics.track('Product List Viewed', productListViewed);

	}

	callbackFunction = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				// console.log(entry.target.parentElement.classList.contains('hidden'))
				if (!entry.target.parentElement.classList.contains('hidden')) {
					// console.log(this.props.price)
					// console.log(entry.target.parentElement)
					// console.log(this.rootRef.current.parentElement)
					this.sendToSegment()
					this.observer.unobserve(this.rootRef.current)
				}				
			}
		});
	};

	componentDidUpdate() {

		// console.log('Updated');

	}

	componentDidMount() {

		// console.log('Mounted')
		// console.log(this.props.className)
		// console.log(this.rootRef.current.parentElement)

		let options = {
			// root: document.getElementsByClassName('slider')[0], // this.rootRef.current.parentElement,
			rootMargin: '0px',
			threshold: 0.80
		}

		this.observer = new IntersectionObserver(
			this.callbackFunction,
			options
		);
		if (this.rootRef.current) this.observer.observe(this.rootRef.current);
	}

	handleDataInfo(data){
		
		// gtag('event', 'select_content', {
		// 	"content_type": "product",
		// 	"items": [
		// 				{
		// 					"id": data.product_id,
		// 					"name": data.title,
		// 					"list_name": "Search Results",
		// 					"brand": data.brand,
		// 					"category": data.category,
		// 					"list_position":data.index,
		// 					"quantity": 5,
		// 					'price':data.price,
		// 					'url':'https://kiero.co/detalle/' + data.product_id + '_' + data.title
		// 																					.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
		// 																					.replace('//', '%2F')
		// 																					.replace('%', '')
		// 																					.split(' ')
		// 																					.join('-'),
		// 				}
		// 			]
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

    // Segment Product Clicked event
    // Fire this event when a visitor clicks a product.
    // Reference: https://segment.com/docs/connections/spec/ecommerce/v2/
    analytics.track("Product Clicked", {
      product_id: data.product_id,
      category: data.category,
      name: data.title,
      brand: data.brand,
      price: data.price,
      currency: "COP",
      quantity: 1,
      url: "https://kiero.co" + handleFormatUrl(data.product_id, data.title),
      image_url: data.url,
    });

    // console.log(data);

		// dataLayer.push({
		// 	'event': 'productClick',
		// 	'ecommerce': {
		// 		"click": {
		// 			"actionField": {
		// 							"list": "Search Results"
		// 							},
		// 			'products':
		// 					[{
		// 						'name':data.title,
		// 						'id':data.product_id,
		// 						'brand':data.brand,
		// 						'category':data.category,
		// 						'position':data.index,
		// 						"quantity": 5,
		// 						'price':data.price,
		// 						'url':'https://kiero.co/detalle/' + data.product_id + '_' + data.title
		// 																						.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
		// 																						.replace('//', '%2F')
		// 																						.replace('%', '')
		// 																						.split(' ')
		// 																						.join('-'),

		// 				}]
		// 		}
		// 	},
		// 	// 'eventCallback': function(){
		// 	// 	document.location = 'https://kiero.co/detalle/' + data.product_id + '_' + data.title
		// 	// 	.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
		// 	// 	.replace('//', '%2F')
		// 	// 	.replace('%', '')
		// 	// 	.split(' ')
		// 	// 	.join('-')
		// 	// }
		// })

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
			<div ref={this.rootRef} className={this.props.className} onClick={() => this.handleDataInfo(this.props)}>
				{/* <div className="productFavIcon3">
					<Checkbox
						style={{ color: '#CF0A2C' }}
						icon={<FavoriteBorder />} 
						checkedIcon={<Favorite />}
					/>
				</div> */}
        {/*<Link
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
				>  */}
				<a  href={handleFormatUrl(this.props.product_id, this.props.title)}>
					{this.props.statusProduct === 1 ?
						<div className="product-card-img">
							{/* <Spinner/> */}
							<Image
								src={this.props.url}
								alt={this.props.title}
								layout='fill'
								placeholder="blur"
							/>
								{/* <picture>
									<source
										srcSet={require('https://kiero.co/_next/static/images/kieroweb-db5d710263ceb06f6eb6c4ed06b64782.png?webp')}
										type="image/webp"
									/>
									<img loading="lazy" src='https://kiero.co/_next/static/images/kieroweb-db5d710263ceb06f6eb6c4ed06b64782.png'
										/>
								</picture> */}
					{/* <img
									
										loading="lazy"
										alt={this.props.title}
										src={
											this.props.url
												? this.props.url
												: 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png'
										}
									/> */}
						</div> 	:  
									<div className="product-card-img spentProduct">
										<div className='product-spent-home'>Agotado</div>
											<Image
												src={this.props.url}
												alt={this.props.title}
												layout='fill'
												placeholder="blur"
											/>		
									</div>}
						
          <button>Envío gratis</button>
          <h3 className={this.props.statusProduct === 1 ? "" : 'product-no-stock'}>
            ${" "}
            {this.props.price
              ? String(this.props.price)
                  .split(".")[0]
                  .replace(/(.)(?=(\d{3})+$)/g, "$1.")
              : "$ ... "}
          </h3>
          <h4 className="title">{this.props.title}</h4>
        </a>
      </div>
    );
  }
}
