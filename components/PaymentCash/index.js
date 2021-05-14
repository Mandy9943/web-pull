import React from 'react';
import './PaymentCash.css';

function PaymentCash({ onSubmit }) {
	
	return (
		<div className="payment-cash">
			<h2>Ingresa los siguientes datos</h2>
			<br />
			<form onSubmit={onSubmit}>
				<input required name={'cash_form_name'} placeholder="Nombre y apellido *" />
				<br />
				<input required type='email' name={'cash_form_email'} placeholder="Email *" />
				<br />
				<input required name={'cash_form_number'} placeholder="Número de contacto *" />
				<br />
				<button type="submit" className="button-continue main-button">
					<p>Continuar</p>
				</button>
			</form>
		</div>
	);
}

export default PaymentCash;
