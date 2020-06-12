import React, { Component } from 'react';
import Link from 'next/link';
import CardImg from "../../assets/img/cards-img/kohgsdfRecurso28.png";
import "./ProductCard.css";

export default class ProductCard extends Component {
    render() {
        return (
            <div className="producto-card">
                <Link href={"/detalle/"+this.props.product_id+"_"+this.props.title.split(" ").join("-")}>
                <a>

                <div className="product-card-img">
                    <img src={this.props.url ? this.props.url : "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png" } />
                </div>
                        <button>Envío gratis</button>
                        </a>
                </Link>
                <h3>{this.props.price ? this.props.price : "$ ... " }</h3>

            </div>
        )
    }
}
