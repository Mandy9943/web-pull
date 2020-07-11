import React, { Component } from 'react';
import Link from 'next/link';
import CardImg from "../../assets/img/cards-img/kohgsdfRecurso28.png";
import "./MyProducts.css";
import ProductItem from "../ProductItem"
import { getData } from "../../services/userApi";
import { updateProduct } from "../../services/productsApi"
import { getImgUrl } from "../../lib/config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThList, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../Common/Pagination/Pagination";
import Spinner from "../Common/Spinner";



export default class MyProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            products: [],
            page: 1,
            totalPages: 1,
            closeAccount: true,
        }
    }

    getYear() {
        return new Date().getFullYear();
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

    accordionAccount = () => {
        this.setState({
            closeAccount: !this.state.closeAccount,
        });
    }
        
    render() {

        let productList = this.state.products.map((product, i) => {

            let statusI = product.status == "1" ? "cancel-btn delete" : "main-button"

            let clsItem = product.status == "1" ? "product-item-edit" : "product-item-edit off"

            let image_url = product.images ?
                getImgUrl(product.images[0].url) :
                "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png"

            const detail_link = "/detalle/" + product.product_id + "_" + product.title.split(" ").join("-");

            

            return (
                <div key={i} className="option-list">
                    <h5>Producto</h5> <h5>Categoria</h5> <h5>Fecha</h5> <h5>Id product</h5>
                    <div className="option product">
                        <div className="product-card-img">
                            <img src={image_url} /> </div>
                        <h3>{product.title}</h3>
                    </div>
                    <div className="option category">
                        categoria del producto
                </div>
                    <div className="option date">
                        {this.getYear()}
                    </div>
                    <div className="option id">{product.product_id} 
                        <a className="icon-action" onClick={() => this.accordionAccount()}>
                            <FontAwesomeIcon icon={faEllipsisV} />
                        </a>
                        <section className={this.state.closeAccount ? "actions" : "actions active"}>
                            <Link href={"publicacion/[product]"} as={"publicacion/" + product.product_id}>
                                <a>Modificar</a>
                            </Link>
                            <Link href={"/detalle/[product]"} as={detail_link}>
                                <a>Ver publicación</a>
                            </Link>
                            <a
                                style={{ cursor: 'pointer' }}
                                onClick={(e) => this.changePState(product.product_id,
                                    (product.status == "1" ? 0 : 1)
                                    , e)}>
                                {product.status == "1" ? "Pausar" : "Activar"}
                            </a>
                            <Link href={"/detalle/[product]"} as={detail_link}>
                                <a>Ayuda</a>
                            </Link>
                        </section>
                    </div>
                </div>
                )
            });

        return (
            <div className="purchase-list">
                <h1 className="status-title" style={{ margin: '0 0 15px 0' }}>Publicaciones</h1>
                <h5 className="accent">Gestion</h5>
                {productList.length == 0 ?
                    <section className="empty-text">
                        {productList.length == 0 ? <span>No tienes Publicaciones</span> :  <Spinner /> }
                        {/*NEED SPIINER*/}
                    </section>
                    :
                    <>
                        <div className="account-store-sales-wrap-search">
                            <div className="account-store-sales-wrap-filter">
                                <div className="account-store-sales-wrap-input-search">
                                    <span>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                    <input className="account-store-sales-input-search" placeholder='buscar por # o titulo' />
                                </div>
                            </div>
                        </div>
                        <section className="list-publications">
                            {productList}
                        </section>
                        <Pagination actual={this.state.page} totalPages={this.state.totalPages} cb={this.changePage} />
                    </>
                }
            </div>
        )
    }
}
