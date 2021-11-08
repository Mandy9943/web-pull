import React, { Component } from 'react';
import Link from 'next/link';
import Phone from '../../../assets/img/phone.png';
import './Footer.css';

export default class Footer extends Component {
	getYear() {
		return new Date().getFullYear();
	}
	render() {
		let url = 'https://www.sic.gov.co/';
		return (
			<div className="footer">
				<div className="footer-content">
					<div className="footer-tex">
						<p>{this.getYear()} Kiero. Todos los derechos reservados.</p>
						<ul>
							<a href={url} rel="noopener noreferrer">
								www.sic.gov.co
							</a>
							<Link href="/terminos">
								<a>Términos y condiciones</a>
							</Link>
							<Link href="/privacidad">
								<a>Políticas de privacidad</a>
							</Link>
							<Link href="/contactanos_email">
								<a>Contáctanos</a>
							</Link>
							<Link href="/ayuda">
								<a>Ayuda / PQR</a>
							</Link>
						</ul>
					</div>
					{/*
                    <div className="footer-download">
                        <Link href="#">
                            <a className="download-app">
                                <img className="phone-img" src={Phone} />
                                <p>¡Descarga gratis la app!</p>
                            </a>
                        </Link>
                    </div>*/}
				</div>

				<div className="footer-content footer-movil">
					{/*
                    <div className="footer-download">
                        <Link href="#">
                            <a className="download-app">
                                <img className="phone-img" src={Phone} />
                                <p>¡Descarga gratis la app!</p>
                            </a>
                        </Link>
                    </div>*/}
					<div className="footer-tex">
						<ul>
							<Link href="/ayuda">
								<a>Ayuda / PQR</a>
							</Link>
							<Link href="/privacidad">
								<a>Políticas de privacidad</a>
							</Link>
							<Link href="/terminos">
								<a>Términos y condiciones</a>
							</Link>
							<Link href="/contactanos_email">
								<a>Contáctanos</a>
							</Link>
							<a href={url} rel="noopener noreferrer">
								www.sic.gov.co
							</a>
						</ul>
						<p>{this.getYear()} Kiero. Todos los derechos reservados.</p>
					</div>
				</div>
			</div>
		);
	}
}
