import React, {useState, useEffect } from "react";
import Link from "next/link";
import "./SellerInfo.css";
import "./SellerMovil.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logo-kiero.png";
import ubication from "../../assets/img/iconos/UBICACIÓN-01.svg";
import {getSellerByProduct} from '../../services/productsApi';


function SellerInfo({productId}){

  const [seller, setSeller] = useState();

  useEffect(() => {
    getSeller();
    return () => {
      setSeller();
    };
  }, []);

  const getSeller = () => {
    if(productId){
      getSellerByProduct(productId).then(rs=>setSeller(rs.data)); 
    } 
  };


  // console.log(seller);

    return (
      <>
        <div className="title-seller-bar">
          <p>Vendedor</p>
        </div>
          <div className="profile-seller">
            <div className="wrap-img-profile-seller">
              <img alt={seller?.name} src={!seller?.photo ? "https://recap-project.eu/wp-content/uploads/2017/02/default-user.jpg" : seller.photo  } />
            </div>
            <div className="info-profile-seller">
              <p>{seller?.name} {seller?.last_name}</p>
              <p>{seller?.phone}</p>
            </div>
           {
             seller?.leader && 
             <div className="seller-leader">
               <div></div>
               <p>{'Vendedor Lider'}</p>
            </div> 
           } 
          </div>
         {
           seller?.products.map((item,index)=>
                <div className="seller-products" key={index}>
                <img src={item.images.length>0?item.images[0].url:"https://recap-project.eu/wp-content/uploads/2017/02/default-user.jpg"} />
                <div className="seller-products-content">
                    <p><span>${item.price}</span></p>
                    <p title={item.title}>{item.title}</p>
                </div>
                <div className="seller-delivery">
                <span>
                  <FontAwesomeIcon icon={faTruck} />
                </span>
                <p>
                  Envíos gratis
                </p>
              </div>
            </div>
          )}
         

         

          <Link href={'/'}><a className="link-more-products">{'Mira más productos de este vendedor'}</a></Link>
      </>
    );
  }


export default SellerInfo;