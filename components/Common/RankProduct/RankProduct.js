import React, { Component } from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Rank-product.css";



export default class RankProduct extends Component {

    render() {
        return (
            <div className="rank-product">
                
                    <p className="stars">
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                </p>
                
                <section className="values">
                    3.6<FontAwesomeIcon icon={faChevronDown} className="down-icon" />
                    7.8 valoraciones <span className="sell">8 vendidos</span>

                </section>
               
            </div>
        )
    }
}
