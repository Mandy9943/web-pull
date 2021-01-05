import React, { Component } from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./CommentsProduct.css";



export default class CommentsProduct extends Component {

    render() {
        return (
            <div className="comments-product">

                <h3>Comentarios del producto</h3>

                <section className="valoration">
                    3.9
                    <p className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </p>
                </section>

                <section className="item">
                    <p className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </p>
                    <section className="comment">
                        Comentario generico de prueba excelente producto es muy bueno
                    </section>
                </section>
                <section className="item">
                    <p className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </p>
                    <section className="comment">
                        Comentario generico de prueba excelente producto es muy bueno
                </section>
                </section>

            </div>
        )
    }
}
