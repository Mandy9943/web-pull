import React, { Component } from 'react';
import Link from "next/link";
import ProductCard from '../ProductCard/ProductCard';
import "./ProductsSlider.css";
import { getProductsBasic } from "../../services/productsApi"
import Success from "../Login/Success";
import { getImgUrl } from "../../lib/config"

export default class ProductsSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        getProductsBasic(this.props.category, 7)
            .then((response) => {
                let data = [];
                let product;
                let i=1;
                
                for (product in response.data.products) {
                    data.push(response.data.products[product]);
                }
                this.setState({ data });
            });
    }

    render() {
        let productList = this.state.data.map(function(product, i) {
            let url = "";
            if(product.image){
                url = getImgUrl(product.image);
            }else{
                url = "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
            }
            return <ProductCard key={i} price={product.price} url={url} product_id={product.product_id} title={product.title} />;
        });

        return (

            <div className="products-slider">
                {!this.props.notitle && <h2 className="home-section-title">Encuentra los mejores productos en {this.props.category && this.props.category}<Link href={this.props.category && "/categoria/"+this.props.category}><a>Ver todos</a></Link></h2>}
                <div className="slider-movil">
                    <div className="content-products-slider">
                        {productList}
                    </div>
                </div>

            </div>
        )
    }
}