import React from 'react';
import './PurchaseItem.css';
import Link from 'next/link';
import { getProductImgs } from '../../../lib/functions';
import { getImgUrl } from '../../../lib/config';

function PurchaseItem({ item, onSelect }) {
	function moneyFormater(price) {
		var num = price;
		num = num
			.toString()
			.split('')
			.reverse()
			.join('')
			.replace(/(?=\d*\.?)(\d{3})/g, '$1.');
		num = num.split('').reverse().join('').replace(/^[\.]/, '');
		return num;
	}
	//console.log(item.data.product?.title.length)
	return (
		<div className="product-item">
			<h5 className="status">{item.purchase_status_name}</h5>
			{item.purchase_status_name === 'ENTREGADO' && (
				<p className="detail-status">{item.data.days_msg}</p>
			)}
			{/*NEED FIX*/}
			<div className="content">
				<a>
					<section className="product">
						<div className="product-card-img">
							<img
								alt={
									item.data.product?.title.length < 10
										? item.data.product?.title
										: item.data.product?.title.slice(0, 10)
								}
								src={getImgUrlMinMin(getProductImgs(item.data.product?.images))}
							/>
						</div>
						<section className="description">
							<h3>{item.data.product?.title}</h3>
							<h3>$ {moneyFormater(item.data.total).replace('.00', '')}</h3>
							<h3 className="product-stock">
								{item.data.quantity}{' '}
								{Number(item.data.quantity) > 1 ? 'unidades' : 'unidad'}
							</h3>
						</section>
					</section>
				</a>

				<section className="info">
					<a onClick={() => onSelect(item)}> Detalle de compra</a>
					<p className="vendedor">Vendedor:</p>
					<p>{item.data.seller.name}</p>
					<p className="phone-client"> {item.data.seller.phone}</p>
					<Link
						href={`/chat/${item.data.order_id}?order=${item.data.order_id}&store=${item.data.seller_id}`}
					>
						<a> Enviar mensaje</a>
					</Link>
				</section>
			</div>
		</div>
	);
}

export default PurchaseItem;
