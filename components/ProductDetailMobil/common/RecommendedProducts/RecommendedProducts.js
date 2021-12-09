import React, { useEffect, useState } from "react";
import { getProductsBasic } from "../../../../services/productsApi";
import background from "../../../../assets/img/productDetail/trazado-12@2x.svg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

import "./RecommendedProducts.module.css";
import RecommendedProductsCard from "./RecommendedProductsCard";

const RecommendedProducts = ({ category }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            await getProductsBasic(category.name, 10).then((r) => {
                setProducts(r.data.results);
            });
        };
        getProducts();
    }, []);
    return (
        <div id="RecommendedProducts">
            <img src={background} alt="Red background" />
            <div className="cabecera">
                <h3>Otros Productos Relacionados</h3>
            </div>
            <div className="slider">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={16}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {products.map(product => {
                        return (
                            <SwiperSlide>
                                <RecommendedProductsCard product={product} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default RecommendedProducts;
