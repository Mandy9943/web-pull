import React, { Component } from 'react';
import Link from 'next/link';
import CardImg from "../../assets/img/cards-img/kohgsdfRecurso28.png";
import "./MyProducts.css";
import ProductItem from "../ProductItem"
import { getData } from "../../services/userApi";
import { updateProduct } from "../../services/productsApi"
import { getImgUrl } from "../../lib/config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThList } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../Common/Pagination/Pagination";



export default class MyProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            products: [],
            page: 1,
            totalPages: 2,
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

            const detail_link = "/detalle/" + product.product_id + "_" + product.title.split(" ").join("-");

            return (<div key={i} className={clsItem}>
                <div className="content">

                    <Link href={"/detalle/[product]"} as={detail_link}>
                        <a>
                            <section className="product">
                                <div className="product-card-img">
                                    <img  alt={product.title} src={image_url} />
                                </div>
                                <section className='description'>
                                    <h3>{product.title}</h3>
                                    <h3>{product.price.split(",")[0]}</h3>
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
                <h1 className="status-title" style={{ margin: '0 0 15px 0' }}>Mis Productos</h1>
                {productList.length === 0 ?
                    <section className="empty-text">
                        <span>No tienes productos</span>
                    </section>
                    :
                    <>
                        <div className="account-store-sales-wrap-search">
                            <div className="account-store-sales-wrap-filter">
                                <p>
                                    <FontAwesomeIcon icon={faThList} /> Filtrar y ordenar
                                </p>
                                <div className="account-store-sales-wrap-input-search">
                                    <span>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                    <input className="account-store-sales-input-search" placeholder='buscar por # o titulo' />
                                </div>
                            </div>
                            <span className="sub-title"> {productList.length} Mis productos</span>
                        </div> 
                    {productList}
                    <Pagination actual={this.state.page} totalPages={this.state.totalPages} cb={this.changePage} />
                    </>
                }
            </div>
        )
    }
}
