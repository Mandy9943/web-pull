import React, { Component } from 'react';
import Link from 'next/link';
import CardImg from "../../assets/img/cards-img/kohgsdfRecurso28.png";
import "./ProductCard.css";

export default class ProductCard extends Component {
    render() {
        return (
            <div className="producto-card">
                <div className="product-card-img">
                    <img src={CardImg} />
                </div>
                <Link href="detalle_producto">
                    <a>
                        <button>envío gratis</button>
                    </a>
                </Link>
                <h3>$ 245.000</h3>
            </div>
        )
    }
}
