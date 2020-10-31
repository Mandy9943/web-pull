import React, {Component} from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faTruck
} from "@fortawesome/free-solid-svg-icons";
import "./ListCategory.css";
import Spinner from "../Common/Spinner";
import CategoryBanners from "../Common/CategoryBanners/CategoryBanners";


class ListCategory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Class = this.props.format == "grid" ? "grid" : "list";

        return (
            <div className="wrap-list-category">
                <CategoryBanners category={this.props.category}/>
                <div className={Class}>
                    {this.props.products && this.props.products.length > 0 && (
                        this.props.format == "grid" ? (
                            this.props.products.map((product, i) => (

                                <Link href={"/detalle/" + product.product_id + "_" + product.title.split(" ").join("-")}
                                      key={i}>
                                    <a className="d-flex">
                                        <div className="temp-card">
                                            <div className="product-card-img">
                                                <img alt={product.title} src={product.image} className="img"/>
                                            </div>
                                            <div className="product-card-description-box">
                                                <h2>${(Math.round(parseFloat(product.price) * 100) / 100).toFixed(2)} </h2>
                                                <h4>{product.brand} </h4>
                                                <div className="product-card-description">
                                                    <p>{product.title}</p>
                                                    {parseInt(product.is_prime) ? (
                                                        <div className="kiero-envios-card">
                                                            <div className="kiero-envios-card-icon">
                                                                <FontAwesomeIcon icon={faTruck}/>
                                                            </div>
                                                            <div>Envío gratis</div>
                                                        </div>
                                                    ) : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            ))
                        ) : (
                            this.props.products.map((product, i) => (
                                <Link href={"/detalle/" + product.product_id + "_" + product.title.split(" ").join("-")}
                                      key={i}>
                                    <a>
                                        <div className="temp-list">
                                            <div className="product-list-img">
                                                <img alt={product.title} src={product.image} className="img"/>
                                            </div>
                                            <div className="product-list-description-box">
                                                <h2>${(Math.round(parseFloat(product.price) * 100) / 100).toFixed(2)} </h2>
                                                <h4>{product.brand}</h4>
                                                <p>{product.title}</p>
                                                {parseInt(product.is_prime) ? (
                                                    <div className="kiero-envios-card">
                                                        <div className="kiero-envios-card-icon">
                                                            <FontAwesomeIcon icon={faTruck}/>
                                                        </div>
                                                        <div>Envío gratis</div>
                                                    </div>
                                                ) : ''}
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            ))
                        ))}
                </div>

                {(!this.props.products || this.props.products.length === 0) &&
                <div className="fetching-empty">
                    {this.props.products ?
                        <div className="text">Lo sentimos, no logramos encontrar lo que buscas.</div> :
                        <div className="spinner" style={{marginTop: 200}}><Spinner/></div>
                    }
                </div>
                }
            </div>
        );
    }
}

export default ListCategory;
