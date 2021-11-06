import React, { Component } from 'react';
import Link from 'next/link';
import CardImg from '../../assets/img/cards-img/kohgsdfRecurso28.png';
import './ProductItem.css';
import { getImgUrl } from '../../lib/config';
import {handleFormatUrl} from '../../lib/functions'

export default class ProductItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const product = this.props.order.product;
		const detail_link = handleFormatUrl(product.product_id, product.title);
		let image_url =
			product.images[0] && product.images[0].url !== ''
				? getImgUrl(product.images[0].url,1000)
				: 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png';

		let status = '';
		let status_text = '';
		switch (this.props.order.status) {
			case 1:
				status = 'En proceso';
				status_text = 'Estamos verificando el pago del producto.';
				break;
			case 2:
				status = 'Pagado';
				if (this.props.mode === 'sell') {
					status_text = '¡Este pedido esta pendiente por enviar!.';
				} else {
					status_text = 'Esperando que el vendedor procese tu pedido.';
				}
				break;
			case 3:
				status = 'Enviado';
				if (this.props.mode === 'sell') {
					status_text = 'El producto va en camino.';
				} else {
					status_text = 'Tu pedido va en camino!';
				}

				break;
			case 4:
				status = 'Entregado';
				if (this.props.mode === 'sell') {
					status_text = 'El producto se entregó';
				} else {
					status_text = 'Tu pedido fue entregado!';
				}
				break;
			case 5:
				status = 'Retrasado';
				if (this.props.mode === 'sell') {
					status_text = 'El pedido esta retrasado, gestionalo!';
				} else {
					status_text =
						'El vendedor tiene algun problema con el envío, estamos trabajando en ello';
				}
				break;
			case 6:
				status = 'Cancelado';
				status_text = 'El pedido fue cancelado.';
				break;
		}

		console.log(this.props);

		return (
			<div className="product-item">
				<h5 className="status">{status}</h5>
				<p className="detail-status">{status_text}</p>
				<p className="detail-date">{product.created_since.split('.')[0]}</p>
				{/*NEED FIX*/}
				<div className="content">
					<a href={detail_link}>
						
							<section className="product">
								<div className="product-card-img">
									<img loading="lazy" alt={product.title} src={getImgUrlMinMin(image_url)} />
								</div>
								<section className="description">
									<h3>{product.title ? product.title : ' - '}</h3>
									<h3>
										{this.props.order.total ? '$ ' + this.props.order.total : '$ 0'}
									</h3>
									<h3 className="product-stock">
										{product.stock
											? 'Disponibles ' + product.stock
											: 'No hay disponibles'}
									</h3>
								</section>
							</section>
						
					</a>

					{this.props.mode == 'sell' ? (
						<section className="info">
							<p>Cliente</p>
							<p>
								{this.props.order.user.name
									? this.props.order.user.name + ' ' + this.props.order.user.last_name
									: ' - '}
							</p>
							<p className="phone-client"> {this.props.order.user.phone}</p>
							<a href={'/chat/' + this.props.order.order_id}>
								 Enviar mensaje 
							</a>
						</section>
					) : (
						<section className="info">
							<a href={detail_link}>
								Detalle de compra
							</a>
							<p>Vendedor:</p>
							<p>
								{product.user.name
									? product.user.name + ' ' + product.user.last_name
									: ' - '}
							</p>
							<p className="phone-client"> {product.user.phone}</p>
							<a href={'/chat/' + this.props.order.order_id}>
								 Enviar mensaje
							</a>
						</section>
					)}
				</div>
			</div>
		);
	}
}
