import React, {Component} from 'react';
import Link from 'next/link';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsSlider.css';
import {getProductsBasic} from '../../services/productsApi';
import Success from '../Login/Success';
import Slider from 'react-animated-slider';
import {handleFormatUrl} from '../../lib/functions'
import Imagen from "../Common/Imagen/Imagen";
import kiero_logo from "../../assets/img/kiero.png";
import Skeleton from "react-loading-skeleton"
import ProductCardVoid from "../ProductCardVoid/ProductCardVoid";


export default class ProductsSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            className: 'producto-card'
        };


    }

    componentDidMount() {
        const sliderContentProductDetail = document.querySelector('.containerProductDetail');
        sliderContentProductDetail
            ? this.setState({className: 'CardInPerfil producto-card'})
            : this.setState({className: 'producto-card'});

        getProductsBasic(this.props.category, 25).then((response) => {
            let data = [];
            let product;
            let i = 1;
            for (product in response.data.results) {
                data.push(response.data.results[product]);
            }
            this.setState({data});
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
            // const dataLayerGoogleSlidersUniversal = response.data.results?.map((prod, index) => {
            // 	return {
            // 		name: prod.title,
            // 		id: prod.product_id,
            // 		price: prod.price,
            // 		brand: prod.brand,
            // 		category: prod.category,
            // 		list: 'Products Slider',
            // 		// url:'https://kiero.co/detalle/' + prod.product_id + '_' + prod.title
            // 		// 														.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
            // 		// 														.replace('//', '%2F')
            // 		// 														.replace('%', '')
            // 		// 														.split(' ')
            // 		// 														.join('-'),
            // 		position: index + 1
            // 	};
            // });
            // dataLayer.push({
            // 	event:'gtm.dom',
            // 	ecommerce: {
            // 		currencyCode: "COP",
            // 		impressions:
            // 			dataLayerGoogleSlidersUniversal
            // 	}
            // })

            // const product_list = response.data.results?.map((prod, index) => {
            // 	return {
            // 		name: prod.title,
            // 		product_id: prod.product_id,
            // 		price: prod.price,
            // 		brand: prod.brand,
            // 		category: prod.category,
            // 		position: index + 1,
            // 		url: 'https://kiero.co/detalle/' + prod.product_id + '_' + prod.title
            // 																.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
            // 																.replace('//', '%2F')
            // 																.replace('%', '')
            // 																.split(' ')
            // 																.join('-'),
            // 		image_url: prod.image
            // 	};
            // });

            // // Send the event in smaller chunks
            // // TODO: Are all the products seen by the user? If not we should send only those viewed.
            // // and send the others when the user push the slider.
            // let temporary, chunk = 5;
            // for (let i = 0, j = product_list.length; i < j; i += chunk) {
            // 		temporary = product_list.slice(i, i + chunk);

            // 		let productsSliderViewed = {
            // 			nonInteraction: 1,
            // 			list_id: 'productsSlider ' + i + ' - ' + (i+chunk),
            // 			category: this.props.category,
            // 			products: temporary
            // 		}

            // 		console.log(productsSliderViewed)

            // 		//analytics.track('Product List Viewed', productsSliderViewed);

            // }

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

        // LLenar un arreglo de productos vacios
        let productListVacio = []
        for (let i = 0; i < 10; i++) {
            productListVacio.push(<ProductCardVoid/>)
        }

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

            let newUrl =
                'https://api.kieroapi.net/img/v1/' +
                this.state.data[i].product_id +
                '?img=' +
                encodeURIComponent(this.state.data[i].image);
            tmpList.push(
                <ProductCard
                    statusProduct={1}
                    key={skid++}
                    index={skid++}
                    price={this.state.data[i].price}
                    url={newUrl}
                    product_id={this.state.data[i].product_id}
                    title={this.state.data[i].title}
                    category={this.state.data[i].category}
                    brand={this.state.data[i].brand}
                    className={this.state.className}
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

        // // All products (We maybe use this array in mobile version slide change)
        // this.state.product_list = this.state.data?.map((prod, index) => {
        // 	return {
        // 		name: prod.title,
        // 		product_id: prod.product_id,
        // 		price: prod.price,
        // 		brand: prod.brand,
        // 		category: prod.category,
        // 		position: index + 1,
        // 		url: 'https://kiero.co' + handleFormatUrl(prod.product_id, prod.title) ,
        // 		image_url: prod.image
        // 	};
        // });

        // // Slide products (Prepare an array of 5 products for each slide)
        // this.state.products_slide = [];
        // let chunk = 5;
        // for (let i = 0, j = this.state.product_list.length; i < j; i += chunk) {
        // 	this.state.products_slide[i/5] = this.state.product_list.slice(i, i + chunk);
        // }

        // // Send first five products shown
        // if (this.state.products_slide.length) {

        // 	let productsSliderViewed = {
        // 		nonInteraction: 1,
        // 		list_id: 'productsSlider ' + 0,
        // 		category: this.props.category,
        // 		products: this.state.products_slide[0]
        // 	}

        // 	// console.log(productsSliderViewed)

        // 	analytics.track('Product List Viewed', productsSliderViewed);
        // }

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
            let newUrl =
                'https://api.kieroapi.net/img/v1/' +
                this.state.data[i].product_id +
                '?img=' +
                encodeURIComponent(this.state.data[i].image);
            productListMobile.push(
                <ProductCard
                    statusProduct={1}
                    style={{padding: '30px'}}
                    key={skid++}
                    index={skid++}
                    price={this.state.data[i].price}
                    url={newUrl}
                    product_id={this.state.data[i].product_id}
                    title={this.state.data[i].title}
                    category={this.state.data[i].category}
                    brand={this.state.data[i].brand}
                    className={this.state.className}
                />
            );
        }

        return (
            <div className="products-slider">
                {!this.props.notitle && (
                    <h3 className="home-section-title">
                        Descubre productos de {this.props.category && this.props.category}
                        {/* <Link
							href={'/categoria/[category]'}
							as={this.props.category && '/categoria/' + this.props.category}
						> */}
                        <a
                            className="accent"
                            href={this.props.category && '/categoria/' + this.props.category}
                        >
                            Ver todos
                        </a>
                    </h3>
                )}
                <div className="slider-movil">
                    <section className="content-products-slider">{productListMobile}</section>
                </div>
                {!productList.length ? (
                    <Slider autoplay={false}>
                        <section className="test">
                            {productListVacio}
                        </section>
                    </Slider>
                ) : (
                    <Slider autoplay={false}>{productList}</Slider>
                )}
            </div>
        );
    }
}
