import React, { Component } from 'react';
import Link from 'next/link';
import './NotificationItem.css';
import { getData } from '../../../services/userApi';

export default class NotificationItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let title = this.props.data.title;
		let button;
		let producto = this.props.data.text;

		switch (this.props.data.type) {
			case 0:
				button = <a className="last-bottom">Comprar</a>;
				break;
			case 1:
				button = (
					<Link href={'/cuenta'}>
						<a>Responder</a>
					</Link>
				);
				break;
			case 2:
				button = (
					<Link href={'/cuenta'}>
						<a>Ver respuesta</a>
					</Link>
				);
				break;
			case 3:
				button = <a>Enviar mensaje al vendedor</a>;
				break;
			case 4:
				button = <a>Enviar mensaje al comprador</a>;
				break;
		}

		return (
			<Link href={this.props.data.link}>
				<a>
					<div className="notification-item">
						<div className="notification-item-img">
							<img loading="lazy" alt='notificaciones kiero.co' src={this.props.data.image} />
						</div>
						<section className="description">
							<span className="small-text">{title}</span>
							<h3 className="product-title">{producto}</h3>
							<section className="actions">{button}</section>
						</section>
					</div>
				</a>
			</Link>
		);
	}
}
