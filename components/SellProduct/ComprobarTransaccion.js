import React, { useState, useEffect } from 'react';
import './SellProduct.css';

//Components
import Nav from '../Common/Nav/Nav';
import Spinner from '../Common/Spinner/Spinner';
import Footer from '../Common/Footer';

//Funcion usada para enviar la informacion que se quiere publicar al backend

import Form from './Form';

export default function ComprobarTransaccion({ user_data }) {
	const [data, setData] = useState();

	useEffect(() => {
		fetch('https://sandbox.wompi.co/v1/transactions/18900-1628445173-19309')
			.then((response) => response.json())
			.then((info) => setData(info.data));
	}, []);

	console.log(data);
	return (
		<>
			<Nav
				jwt={user_data.jwt}
				user_data={user_data}
				authenticated={user_data.authenticated}
				user={user_data.user}
				home={false}
			/>
			<div style={{ textAlign: 'center' }}>
				{data ? (
					<div>
						<div> ID transaccion: {data.id}</div>
						<div>Precio: {data.amount_in_cents}</div>
						<div>Fecha: {data.created_at}</div>
						<div>Nombre: {data.merchant.contact_name}</div>
						<div>Email: {data.merchant.email}</div>
						<div>ID comprador: {data.merchant.legal_id}</div>
						<div>Tipo ID comprador: {data.merchant.legal_id_type}</div>
						<div>Telefono comprador: {data.merchant.phone_number}</div>
						<div>Estado transaccion: {data.status}</div>
						<div>Informacion transaccion: {data.status_message}</div>
					</div>
				) : (
					<Spinner />
				)}
				<Form />
			</div>
			<Footer />
		</>
	);
}
