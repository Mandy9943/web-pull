import React from 'react';
import Link from "next/link";
import ProductCard from '../../ProductCard/ProductCard';
import "./ProductCardFinding.css";

export default function ProductCardFinding() {
    return (
        <div className="product-card-finding">
            <h2 className="home-section-title">Encuentra los mejores productos de Electrónica <Link href="#"><a>Ver todos</a></Link></h2>
            <div className="content-product-card-finding">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}
