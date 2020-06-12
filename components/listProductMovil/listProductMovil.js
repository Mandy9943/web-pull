import React, { Component } from 'react';
import Link from 'next/link';
import CardImg from "../../assets/img/cards-img/kohgsdfRecurso28.png";
import "./listProductMovil.css";
import ProductItem from "../ProductItem"
import { getData } from "../../services/userApi";
import { updateProduct, getProductsBasic } from "../../services/productsApi"
import { getImgUrl } from "../../lib/config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTruck,
} from "@fortawesome/free-solid-svg-icons";

export default class listProductMovil extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            products: []
        }
    }

    componentDidMount() {
        getProductsBasic("Computación", 5)
            .then((response) => {
                this.setState(
                    { products: response.data.products }
                );
            });
    }

    changePState = async (id, newState, e) => {

        let formData = new FormData();
        formData.append('product_id', id);
        formData.append('status', newState);
        let request;

        request = await updateProduct(formData, this.props.jwt);
        console.log(request);
        if (request && request.status === 200) {
            getProductsBasic("Computación", 5)
                .then((response) => {
                    console.log(response.data)
                    this.setState(
                        { products: response.data.products }
                    );
                });
        } else {
            alert("ERROR.")
        }

    }


    render() {

        let productList = this.state.products.map((product, i) => {

            let clsItem = product.status == "1" ? "product-item-edit" : "product-item-edit off"

            let image_url = product.images ?
                getImgUrl(product.images[0].url) :
                "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png"

            const detail_link = "/detalle/" + product.product_id + "_" + product.title.split(" ").join("-");

            return (<div key={i} className={clsItem}>
                <div className="content">
                    <Link href={detail_link}>
                        <a>
                            <section className="product">
                                <div className="product-card-img">
                                    <img src={image_url} />
                                </div>
                                <section className='description'>
                                    <h3>{product.title}</h3>
                                    <h3 className="price">{product.price}</h3>
                                    <span><FontAwesomeIcon icon={faTruck} />Envio gratis</span>
                                </section>
                            </section>
                        </a>
                    </Link>
                </div>
            </div>)
        });

        return (
            <div className="listProductMovil">
                <h3>Descrube productos de electronica</h3>
                {productList}
                <Link href={"#"}><a className="send">ver todos</a></Link>
            </div>
        )
    }
}
