import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './SellerInfo.css';
import './SellerMovil.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faTruck } from "@fortawesome/free-solid-svg-icons";
//Importa el logo Spice
import spice from "../../assets/img/seller/spice.jpeg";
import { getSellerByProduct } from '../../services/productsApi';
import UserProfile from '../../assets/img/default-user.jpg'

function SellerInfo({ productId }) {
	const [seller, setSeller] = useState();

	useEffect(() => {
		getSeller();
		return () => {
			setSeller();
		};
	}, []);

	const getSeller = () => {
		if (productId) {
			getSellerByProduct(productId).then((rs) => setSeller(rs.data));
		}
	};

	// console.log(seller);

	return (
		<>
			<div className="title-seller-bar">
				<p>Vendedor</p>
				<p><FontAwesomeIcon icon={faAngleRight} /></p>
			</div>
			<div className="profile-seller">
				<div className="wrap-img-profile-seller">
					<img
						alt={seller?.name}
						src={spice}
					/>
				</div>
				<div className="info-profile-seller">
					<p>
						Spice Stock LLC.
					</p>
				</div>
				{seller?.leader && (
					<div className="seller-leader">
						<div></div>
						<p>{'Vendedor Lider'}</p>
					</div>
				)}
			</div>
{/* 			{seller?.products.map((item, index) => (
				<div className="seller-products" key={index}>
					<img
						alt={'foto de vendedor ' + seller?.name + seller?.last_name}
						src={
							item.images.length > 0
								? item.images[0].url
								: 'https://recap-project.eu/wp-content/uploads/2017/02/default-user.jpg'
						}
					/>
					<div className="seller-products-content">
						<p>
							<span>${item.price}</span>
						</p>
						<p title={item.title}>{item.title}</p>
					</div>
					<div className="seller-delivery">
						<span>
							<FontAwesomeIcon icon={faTruck} />
						</span>
						<p>Envíos gratis</p>
					</div>
				</div>
			))} */}

			<div className='seller-info'>
				<p>Vendedor Internacional</p>
				<p>Ubicación Estados Unidos</p>
			</div>
			<Link href={'/'}><a className="link-more">Mira más productos de este vendedor</a></Link>
		</>
	);
}

export default SellerInfo;
