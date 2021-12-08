import React, {useEffect, useState} from 'react';
import "./RecommendedProducts.module.css"
import {getProductsBasic} from "../../../../services/productsApi";
import background from "../../../../assets/img/productDetail/trazado-12@2x.svg"
import RecommendedProductsCard from "./RecommendedProductsCard";

const RecommendedProducts = ({category}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            await getProductsBasic(category.name, 10).then(r => {
                    setProducts(r.data.results)
                }
            )
        }
        getProducts();

    }, [])
    return (
        <div id="RecommendedProducts">
            <img src={background} alt="Red background"/>
            <div className="cabecera">
                <h3>Otros Productos Relacionados</h3>
            </div>
            <div className="slider">
                {/* TODO: Colocar el slider acá*/}
                <RecommendedProductsCard product={products[0]}/>
                <RecommendedProductsCard product={products[1]}/>
            </div>
        </div>
    );
}

export default RecommendedProducts;