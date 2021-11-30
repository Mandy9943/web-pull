import React from 'react';
import Link from "next/link";
import ProductCard from '../../ProductCard/ProductCard';
import "./ProductCardFinding.css";
import {getProductsBasic} from "../../../services/productsApi";
import {getImgProduct, getImgUrl} from "../../../lib/config"

export default class ProductCardFinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        getProductsBasic(this.props.category, 6)
            .then((response) => {
                let data = [];
                let product;
                for (product in response.data.products) {
                    data.push(response.data.products[product]);
                }
                this.setState({data});
            });
    }

    render() {

        let productList = this.state.data.map(function (product, i) {
            return <ProductCard key={i} price={product.price.split(",")[0]} product_id={product.product_id}
                                url={getImgProduct(product)} title={product.title}/>;
        });

        return (
            <div className="product-card-finding">

                {!this.props.notitle && <h3 className="home-section-title">Encuentra los mejores productos
                    en {this.props.category && this.props.category}<a
                        href={this.props.category && "/categoria/" + this.props.category} className="accent">Ver
                        todos</a></h3>}

                <div className="slider">
                    <div className="content-product-card-finding">
                        {productList}
                    </div>
                </div>
            </div>
        )
    }
}