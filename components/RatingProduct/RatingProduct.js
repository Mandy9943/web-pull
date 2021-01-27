import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './RatingProduct.css';
import {getRatingByProduct} from '../../services/productsApi';


function RatingProduct({productId}) {

    const [rating, setRating] = useState();

    useEffect(() => {
      getRating();
      return () => {
        setRating();
      };
    }, [productId]);

    const getRating = () => {
        getRatingByProduct(productId).then(rs=>setRating(rs.data)); 
    };

    return (
        <div className="rating-product">
            <p>
              <FontAwesomeIcon icon={faStar} className={rating?.rating > 0 ? "star-active":"star-inactive"} />
              <FontAwesomeIcon icon={faStar} className={rating?.rating > 1 ? "star-active":"star-inactive"} />
              <FontAwesomeIcon icon={faStar} className={rating?.rating > 2 ? "star-active":"star-inactive"} />
              <FontAwesomeIcon icon={faStar} className={rating?.rating > 3 ? "star-active":"star-inactive"} />
              <FontAwesomeIcon icon={faStar} className={rating?.rating > 4 ? "star-active":"star-inactive"} />
              <span>{rating?.rating}</span>
            </p>
          </div>
    );
}

export default RatingProduct;