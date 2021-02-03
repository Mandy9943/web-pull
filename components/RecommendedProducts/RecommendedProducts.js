import React, {useState, useEffect} from 'react';
import Link from "next/link";
import "./RecommendedProducts.css";
import '../ProductsSlider/ProductsSlider.css'
import Slider from 'react-animated-slider';
import {getRecommendProducts} from "../../services/productsApi"
import ProductCard from '../ProductCard/ProductCard';
import ProductsSlider from '../ProductsSlider/ProductsSlider';

function RecommendedProducts({category}) {

    const [productList, setProductList] = useState([]);
    const productListMobile = [];

    useEffect(() => {
        console.log(getProducts());
        return () => {
            setProductList([]);
        };
    }, [category]);

    const getProducts = () => {
        let products = getRecommendProducts(category.split('/')[0])
        products.then((response) => {
            setProductList(response.data.results);
        })
    };

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
                {/* {productList.length>0 &&
                } */}
                {/* <div className="home-content">
                <ProductsSlider category={category} />
                </div> */}
                
            </div>
            </section>
        </>
    );
}

export default RecommendedProducts;