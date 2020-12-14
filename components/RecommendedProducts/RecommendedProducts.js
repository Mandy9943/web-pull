import React from 'react';
import Link from "next/link";
import "./RecommendedProducts.css";
import '../ProductsSlider/ProductsSlider.css'
import Slider from 'react-animated-slider';
import { getRecommendProducts } from '../../services/productsApi';

function RecommendedProducts({category}) {

    // console.log(getRecommendProducts(category));
    const productList = [];
    const productListMobile = [];

    return (
        <>
            <section className="recommended-section">
            <div className="products-slider">
                <h3 className="home-section-title">Productos recomendados
                <Link href=""><a className="accent"> <small>Ver todos</small></a></Link>
                </h3>
                
                <div className="slider-movil">
                    <section className="content-products-slider">
                        {productListMobile}
                    </section>
                </div>
                <Slider autoplay={13000}>
                    {productList}
                </Slider>

            </div>
            </section>
        </>
    );
}

export default RecommendedProducts;