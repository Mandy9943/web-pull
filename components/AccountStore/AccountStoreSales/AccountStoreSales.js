import React, { useEffect, useState } from 'react';
import './AccountStoreSales.css';
import { getData } from '../../../services/userApi';

export default function AccountStoreSales({ user }) {
	const [started, setStarted] = useState(0);
	const [verified, setVerified] = useState(0);
	const [delivered, setDelivered] = useState(0);
	const [qualified, setQualified] = useState(0);

	useEffect(() => {
		let endp = '/shop/orders/status';
		getData(endp, user.jwt).then((response) => {
			let calification = response.data.data[0];
			setStarted(calification['Venta iniciada']);
			setVerified(calification['Venta verificada']);
			setDelivered(calification['Producto entregado']);
			setQualified(calification['Venta calificada']);
		});
	}, []);

	const typeInfo = (title, data) => (
		<div className="account-store-sales-item-task-bar">
			<section>
				<p>{title}</p>
				<p>{data || 0} Ventas</p>
			</section>
		</div>
	);

	return (
		<div className="account-store-sales-wrap-task-bar">
			{typeInfo('Venta iniciada', started)}
			{typeInfo('Venta verificada', verified)}
			{typeInfo('Producto entregado', delivered)}
			{typeInfo('Venta calificada', qualified)}
		</div>
	);
}
