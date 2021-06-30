import React, { Component } from 'react';
import Link from 'next/link';
import CardImg from "../../assets/img/cards-img/kohgsdfRecurso28.png";
import "./MyProducts.sass";
import ProductItem from "../ProductItem"
import { getData } from "../../services/userApi";
import { updateProduct } from "../../services/productsApi"
import { getImgUrl } from "../../lib/config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThList, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../Common/Pagination/Pagination";
import Spinner from "../Common/Spinner";
import Modal from "../Common/Modal/Modal";



export default class MyProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            products: [],
            page: 1,
            totalPages: 1,
            optionPanel: [],
            keepOpen : false,
            modalNewProduct : false
        }
        this.toggleModalNewProduct = this.toggleModalNewProduct.bind(this);
    }
    toggleModalNewProduct() {
        this.setState({modalNewProduct: !this.state.modalNewProduct});
    }

    getYear() {
        return new Date().getFullYear();
    }

    loadData = (page) => {
        this.setState({page:page});
        getData("/getMyProducts/"+(page-1), this.props.jwt)
            .then((response) => {
                let tmp = [];
                for (let i=0; i < response.data.length; i++){
                    tmp.push(false);
                }
                this.setState(
                    { products: response.data,  optionPanel:tmp}
                );
            });
    }

    componentDidMount() {
        this.loadData(1);

        getData("/countMyProducts", this.props.jwt)
            .then((response) => {
                this.setState(
                    { totalProducts: response.data.total, totalPages: Math.ceil(response.data.total/50)  }
                );
            });

    }


    changePState = async (id, newState, e) => {

        let formData = new FormData();
        formData.append('product_id', id);
        formData.append('status', newState);
        let error;

        error = await updateProduct(formData, this.props.jwt);
        if (error && error.status === 200) {
            getData("/getMyProducts", this.props.jwt)
                .then((response) => {
                    let tmp = [];
                    for (let i=0; i < response.data.length; i++){
                        tmp.push(false);
                    }
                    this.setState(
                        { products: response.data,  optionPanel:tmp}
                    );
                });
        } else {
            alert("ERROR.")
        }

    }

    clsall = () => {
        if(!this.state.keepOpen){
            let tmp = []
            for (let i=0; i < this.state.optionPanel.length; i++){
                tmp.push(false);
            }
            this.setState({optionPanel: tmp});
        }
        this.setState({keepOpen: false});
    }

    closeOptions = () => {
        setTimeout(this.clsall,100);
    }

    mEnter = () => {
        clearTimeout(this.state.timeClose);
    }

    mLeave = () => {
        this.state.timeClose = setTimeout(this.closeOptions, 1000);
    }


    openOption = (item) => {
        this.setState({keepOpen: true});
        let tmp = []
        for (let i=0; i < this.state.optionPanel.length; i++){
            tmp.push(item === i);
        }
        this.setState({optionPanel: tmp});
    }
        
    render() {
        const contentModalNewProduct = (
            <div className="modal-logout">
                <p>{'Selecciona el tipo de publicación que quieres hacer'}</p> 
                 <button className="logout-button">Individual</button>
                 <button onClick={this.toggleModalNewProduct} className="cancelar-button">Masivamente(en desarrollo)</button>
            </div>
        );
        let tmp = []
        // TODO Implement this in a different component
        let productList = this.state.products.map((product, i) => {

            console.log('informacion del producto',product)
            let statusI = product.status === 1 ? "cancel-btn delete" : "main-button"

            let clsItem = product.status === 1 ? "product-item-edit" : "product-item-edit off"

            let image_url = product.images ?
                getImgUrl(product.images[0].url) :
                "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png"

            const detail_link = "/detalle/" + product.product_id + "_" + product.title.replace(/[^\w\s]/gi, '').split(" ").join("-");

            return (
                <div key={i} className="option-list">
                    <h5>Producto</h5> <h5>Categoria</h5> <h5>Fecha</h5> <h5>Id product</h5>
                    <div className="option product">
                        <div className="product-card-img">
                            <img alt={product.title} src={image_url} /> </div>
                        <h3>{product.title}</h3>
                    </div>
                    <div className="option category">
                        {product.category ? product.category.name : 'sin categoria'}
                </div>
                    <div className="option date">
                        {product.created_since ? product.created_since.split(" ")[0] : 'sin fecha'}
                    </div>
                    <div className="option id">{product.product_id} 
                        <a style={{ padding: "10px", cursor: "pointer"}} className="icon-action" onClick={() => this.openOption(i)}>
                            <FontAwesomeIcon icon={faEllipsisV} />
                        </a>
                        <section onMouseEnter={() => this.mEnter(i)} onMouseLeave={() => this.mLeave(i)} className={this.state.optionPanel[i] === true ? "actions active" : "actions"}>
                            <Link href={"publicacion/[product]"} as={"publicacion/" + product.product_id}>
                                <a>Modificar</a>
                            </Link>
                            <Link href={"/detalle/[product]"} as={detail_link}>
                                <a>Ver publicación</a>
                            </Link>
                            <a
                                style={{ cursor: 'pointer' }}
                                onClick={(e) => this.changePState(product.product_id,
                                    (product.status === 1 ? 0 : 1)
                                    , e)}>
                                {product.status === 1 ? "Pausar" : "Activar"}
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
            <div className="purchase-list" onClick={this.closeOptions}>
                <h1 className="status-title">Publicaciones</h1>
                <h5 className="accent">Gestión</h5>
                <div className="account-store-sales-wrap-search">
                    <div className="account-store-sales-wrap-filter">
                        <div className="account-store-sales-wrap-input-search">
                            <span>
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <input className="account-store-sales-input-search" placeholder='buscar por # o titulo' />
                        </div>
                        <span className={"sub-title"}>{0} publicaciones</span>
                    </div>
                </div>
                {true ?
                    productList.length == 0 &&
                        <section className="empty-text">
                            <h5>Aún no tienes publicaciones</h5>
                            <p>Empieza ahora...</p>
                            <Link href="#" >
                                <h5 className={"accent"} onClick={this.toggleModalNewProduct}><a>Crear publicacion</a></h5>
                            </Link>
                        </section>
                    :
                    <>
                        <section className="list-publications">
                            {productList}
                        </section>
                        <Pagination actual={this.state.page} totalPages={this.state.totalPages} cb={this.loadData} />
                    </>
                }
                 {this.state.modalNewProduct ? (
                 <Modal toggle={this.toggleModalNewProduct} content={contentModalNewProduct} button />
                    ) : null}
            </div>
            
        )
    }
}
