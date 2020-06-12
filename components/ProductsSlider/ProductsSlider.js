import React, { Component } from 'react';
import Link from "next/link";
import ProductCard from '../ProductCard/ProductCard';
import "./ProductsSlider.css";

export default class ProductsSlider extends Component {
    render() {
        return (
            <div className="products-slider">
              <h2 className="home-section-title">Encuentra los mejores productos de Electrónica <Link href="#"><a>Ver todos</a></Link></h2>
              <div className="content-products-slider">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
        )
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> Jorge
