import React, { Component } from 'react';
import Link from 'next/link';
import CardImg from "../../assets/img/cards-img/kohgsdfRecurso28.png";
import "./MyProducts.css";
import ProductItem from "../ProductItem"
import { getData } from "../../services/userApi";
import { updateProduct } from "../../services/productsApi"
import { getImgUrl } from "../../lib/config"

export default class MyProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            products: []
        }
    }

    componentDidMount() {
        getData("/getMyProducts", this.props.jwt)
            .then((response) => {
                this.setState(
                    { products: response.data }
                );
            });
    }

    changePState = async (id, newState, e) => {

        let formData = new FormData();
        formData.append('product_id', id);
        formData.append('status', newState);
        let error;

        error = await updateProduct(formData, this.props.jwt);
        console.log(error);
        if (error && error.status === 200) {
            getData("/getMyProducts", this.props.jwt)
                .then((response) => {
                    this.setState(
                        { products: response.data }
                    );
                });
        } else {
            alert("ERROR.")
        }

    }


    render() {

        let productList = this.state.products.map((product, i) => {

            let statusI = product.status == "1" ? "cancel-btn delete" : "main-button"

            let clsItem = product.status == "1" ? "product-item-edit" : "product-item-edit off"

            let image_url = product.images ?
            getImgUrl(product.images[0].url) :
            "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png"

            const detail_link = "/detalle/"+product.product_id+"_"+product.title.split(" ").join("-");

            return ( <div key={i} className={clsItem}>
                    <div className="content">

                        <Link href={"/detalle/[product]"} as={detail_link}>
                            <a>
                                <section className="product">
                                    <div className="product-card-img">
                                        <img src={image_url} />
                                    </div>
                                    <section className='description'>
                                        <h3>{ product.title }</h3>
                                        <h3>{ product.price }</h3>
                                        <p>Estado: 
                                            <strong>
                                            {product.status == "1" ? "Activo" : "Inactivo"}
                                            </strong>
                                        </p>
                                        <p>
                                            Stock: <b>{product.stock}</b>
                                        </p>
                                    </section>
                                </section>
                            </a>
                        </Link>

                    <section className="actions">

                        <Link href={"publicacion/[product]"} as={"publicacion/" + product.product_id}>
                            <a className="cancel-btn edit">Editar</a>
                        </Link>


                        <a
                            style={{ cursor: 'pointer' }}
                            onClick={(e) => this.changePState(product.product_id,
                                (product.status == "1" ? 0 : 1)
                                , e)}
                            className={statusI}>
                            {product.status == "1" ? "Desactivar" : "Activar"}
                        </a>
                    </section>
                </div>
            </div>)
        });

        return (
            <div className="purchase-list">
                {productList}
            </div>
        )
    }
}
