import React, { Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck
} from "@fortawesome/free-solid-svg-icons";
import "./ListCategory.css";
import { getImgUrl } from "../../lib/config"
import Spinner from "../Common/Spinner";
import CategoryBanners from "../Common/CategoryBanners/CategoryBanners";



class ListCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }



  render() {
    const Class = this.props.format == "grid" ? "grid" : "list";
    const page_first = (this.props.page - 1) * this.props.item_per_page;
    const page_last = ((this.props.page - 1) * this.props.item_per_page) + this.props.item_per_page;

    return (
      <div className="wrap-list-category">
        <CategoryBanners category={this.props.category}/>
        <div className={Class}>
          {this.props.products && this.props.products.products && this.props.products.products.length > 0 ? (
            this.props.format == "grid" ? (
              this.props.products.products.slice(page_first, page_last).map((product, i) => (

                <Link href={"/detalle/" + product.product_id + "_" + product.title.split(" ").join("-")} key={i}>
                  <a>
                    <div className="temp-card">
                      <div className="product-card-img">
                        <img alt={product.title} src={getImgUrl(product.image)} className="img" />
                      </div>
                      <div className="product-card-description-box">
                        <h3>{product.user} </h3>
                        <div className="kiero-envios-card">
                          <p className="kiero-envios-card-icon">
                            <FontAwesomeIcon icon={faTruck} />
                          </p>
                          <p>Envío gratis</p>
                        </div>
                        <div className="product-card-description">
                          <p title={product.title}>{product.title.substr(0, 60) + (product.title.length > 60 ? "..." : ".")}</p>
                          <p>Nuevo</p>
                          <p className="price">{product.price.split(",")[0]}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))
            ) : (
                this.props.products.products.slice(page_first, page_last).map((product, i) => (
                  <Link href={"/detalle/" + product.product_id + "_" + product.title.split(" ").join("-")} key={i}>
                    <a>
                      <div className="temp-list">
                        <div className="product-list-img">
                          <img alt={product.title} src={getImgUrl(product.image)} className="img" />
                        </div>
                        <div className="product-list-description-box">
                          <h3 className="product-list-title">{product.title.substr(0, 65) + (product.title.length > 65 ? "..." : ".")}</h3>
                          <h3 className="product-list-title">{product.user} </h3>
                          <h3>{product.price.split(",")[0]} </h3>
                          <div className="kiero-envios-card">
                            <p className="kiero-envios-card-icon">
                              <FontAwesomeIcon icon={faTruck} />
                            </p>
                            <p>Envío gratis</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))
              )
          ) : (
              <div className="fetching-empty">{this.props.products ? "Lo sentimos, no logramos encontrar lo que buscas." : <Spinner />}</div>
            )}
        </div>
      </div>
    );
  }
}
export default ListCategory;
