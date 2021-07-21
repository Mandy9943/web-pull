import React, { useState, useEffect } from 'react';
import PayEfecty from '../../assets/img/pay-cash-efecty.png';
import PayBaloto from '../../assets/img/pay-cash-baloto.png';
import PaySured from '../../assets/img/pay-cash-sured.png';
import Modal from '../Common/Modal';
import './PaymentCashResult.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function PaymentCashResult({ type, amount, document, props }) {
	const [pdfDownloaded, setPdfDownloaded] = useState(false);
	const downloadPDF = () => {
		setPdfDownloaded(true);
		window.open(document);
	};
	console.log(amount);
	console.log("efectivo", props);

	useEffect(() => {

	})


	const message = (
		<>
			<div className="container-success">
				<p>
					<div className={'icon-check'}>
						<FontAwesomeIcon icon={faCheck} />
					</div>
					<br />
					Tu voucher esta listo para imprimir! Puedes encontrar el documento en tus
					descargas
				</p>
			</div>
		</>
	);
	return (
		<div className="payment-cash-result">
			{pdfDownloaded ? (
				<Modal toggle={() => setPdfDownloaded(false)} content={message} button />
			) : null}
			<h3>
				Total a pagar con {type === 1 ? 'Efecty' : 'Baloto'} ${amount}
			</h3>
			<hr />
			<div className="payment-cash-result-container">
				<div className="payment-cash-result-logo">
					<img
						alt="logo"
						src={type === 1 ? PayEfecty : type === 2 ? PayBaloto : PaySured}
					/>
				</div>
				{/* <div className="payment-cash-result-info">
                    <span className="info-title">{'Nº de convenio'}</span>
                    <br />
                    <span>{agreement}</span>
                    <br />
                    <br />
                    <span className="info-title">{'Nº de pago'}</span>
                    <br />
                    <span>{pay}</span>
                </div> */}
			</div>
			<div style={{ width: '100%' }}>
				<div style={{ float: 'left', width: '100%' }}>
					<button className="main-button print" onClick={downloadPDF}>
						<p>Imprimir voucher de pago</p>
					</button>
					<br />
				</div>
				<div style={{ float: 'left', width: '100%', textAlign: 'center' }}>
					<div className="footer-info">
						<small>
							Imprime estos datos para cancelar tu compra en puntos cercanos de{' '}
							{type === 1 ? 'Efecty' : type === 2 ? 'Baloto' : 'Sured'}
						</small>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PaymentCashResult;
