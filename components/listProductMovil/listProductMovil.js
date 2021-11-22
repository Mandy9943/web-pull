import React, { Component } from "react";
import Link from "next/link";
import "./listProductMovil.css";
import { updateProduct, getProductsBasic } from "../../services/productsApi";
import { getImgUrl } from "../../lib/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { parse } from "@fortawesome/fontawesome-svg-core";
import { handleFormatUrl } from "../../lib/functions";
import Image from "next/image";

export default class listProductMovil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      products: [],
    };
  }

  componentDidMount() {
    getProductsBasic("Computación", 5).then((response) => {
      this.setState({ products: response.data.results });
    });
  }

  render() {
    const productList = this.state.products.map((product, i) => {
      let image_url = product.image
        ? //? getImgUrl(product.image)
          "https://api.kieroapi.net/img/v1/" +
          product.product_id +
          "?img=" +
          encodeURIComponent(product.image)
        : "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";

      // const detail_link =
      // 	'/detalle/' +
      // 	product.product_id +
      // 	'_' +
      // 	product.title
      // 		.replace(/[^\w\s]/gi, '')
      // 		.split(' ')
      // 		.join('-');

      return (
        <div key={i} className="product-item-edit">
          <div className="content">
            <a href={handleFormatUrl(product.product_id, product.title)}>
                <section className="product">
                  <div className="product-card-img">
                    <div className="anullProperties">
                      <Image
                        src={image_url}
                        layout="fill"
                        alt={product.title}
                      />
                    </div>
                  </div>
                  <section className="description">
                    <h3>{product.title}</h3>
                    <h3 className="price">
                      ${" "}
                      {product.price
                        ? String(product.price)
                            .split(".")[0]
                            .replace(/(.)(?=(\d{3})+$)/g, "$1.")
                        : "$ ... "}
                    </h3>
                    <span>
                      <FontAwesomeIcon icon={faTruck} />
                      Envío gratis
                    </span>
                  </section>
                </section>
            </a>
          </div>
        </div>
      );
    });

    return (
      <div>
        {/* 
                
                <div className="listProductMovil">
                <h3>Descrube productos de Electrónica</h3>
                {productList}
                <Link href={"/categoria/Computación"}><a className="send">Ver todos</a></Link> */}
      </div>
    );
  }
}
