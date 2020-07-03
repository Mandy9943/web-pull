import React, { Component } from 'react';
import Link from "next/link";
import ProductCard from '../ProductCard/ProductCard';
import "./ProductsSlider.css";
import { getProductsBasic } from "../../services/productsApi"
import Success from "../Login/Success";
import { getImgUrl } from "../../lib/config"
import Slider from 'react-animated-slider';


export default class ProductsSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        getProductsBasic(this.props.category, 25)
            .then((response) => {
                let data = [];
                let product;
                let i = 1;

                for (product in response.data.products) {
                    data.push(response.data.products[product]);
                }
                this.setState({ data });
            });
        }

    render() {


        let productList = [];
        let productLista = [];
        let tmpList = [];
        for (let i = 0; i < this.state.data.length; i++) {
            let url = "";
            if (this.state.data[i].image) {
                url = getImgUrl(this.state.data[i].image);
            } else {
                url = "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
            }
            tmpList.push(<><ProductCard
                key={tmpList.length+1}
                price={this.state.data[i].price}
                url={url}
                product_id={this.state.data[i].product_id}
                title={this.state.data[i].title} /></>)
            if(i%5===0 && i>0){
                productList.push(<section key={i} className="test">{tmpList}</section>);
                tmpList = []
            }
        }
        if(tmpList.length>0){
            productList.push(<section key={productList.length+1} className="test">{tmpList}</section>)
        }



        for (let i = 0; i < this.state.data.length; i++) {
            let url = "";
            if (this.state.data[i].image) {
                url = getImgUrl(this.state.data[i].image);
            } else {
                url = "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
            }
            productLista.push(<ProductCard
                key={tmpList.length + 1}
                price={this.state.data[i].price}
                url={url}
                product_id={this.state.data[i].product_id}
                title={this.state.data[i].title} />)
        }
        console.log(productList);

        return (

            <div className="products-slider">
                {!this.props.notitle && <h3 className="home-section-title">Encuentra los mejores productos en {this.props.category && this.props.category}<Link href={this.props.category && "/categoria/" + this.props.category}><a>Ver todos</a></Link></h3>}
                <div className="slider-movil">
                    <section className="content-products-slider">
                        {productLista}
                    </section>
                </div>
                <Slider autoplay={13000}>
                    {productList}
                </Slider>

            </div>
        )
    }
}