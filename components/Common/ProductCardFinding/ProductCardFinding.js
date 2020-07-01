import React from 'react';
import Link from "next/link";
import ProductCard from '../../ProductCard/ProductCard';
import "./ProductCardFinding.css";
import {getProductsBasic} from "../../../services/productsApi";
import { getImgUrl } from "../../../lib/config"

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
                this.setState({ data });
            });
    }

    render(){

        let productList = this.state.data.map(function(product, i) {
            let url = "";
            if(product.image){
                url = getImgUrl(product.image);
            }else{
                url = "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
            }
            return <ProductCard key={i} price={product.price} product_id={product.product_id} url={url} title={product.title}/>;
        });

        return (
            <div className="product-card-finding">

                {!this.props.notitle && <h3 className="home-section-title">Encuentra los mejores productos en {this.props.category && this.props.category}<Link href={this.props.category && "/categoria/"+this.props.category}><a>Ver todos</a></Link></h3>}

                <div className="slider-movil">
                    <div className="content-product-card-finding">
                        { productList }
                    </div>
                </div>
            </div>
        )
    }
}