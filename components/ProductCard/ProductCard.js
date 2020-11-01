import React, { Component } from 'react';
import Link from 'next/link';
import CardImg from "../../assets/img/cards-img/kohgsdfRecurso28.png";
import "./ProductCard.css";

export default class ProductCard extends Component {
    render() {
        return (
            <div className="producto-card">
                <Link href={"/detalle/[product]"} as={"/detalle/" + this.props.product_id + "_" + this.props.title.replace(/[^\w\s]/gi, '').split(" ").join("-")}>
                    <a>
                        <div className="product-card-img">
                            <img alt={this.props.title} src={this.props.url ? this.props.url : "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png"} />
                        </div>
                        <button>Envío gratis</button>
                        <h3>$ {this.props.price ? this.props.price.split(".")[0].replace(/(.)(?=(\d{3})+$)/g,'$1,') : "$ ... "}</h3>
                        <h4 className="title">
                            {this.props.title}
                        </h4>
                    </a>
                </Link>
            </div>
        )
    }
}