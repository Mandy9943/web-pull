import React from 'react';
import PayCredit from "../../../../assets/img/pay-credit.png";
import PayOnline from "../../../../assets/img/pay-online.png";
import PayTransfer from "../../../../assets/img/pay-transfer.jpg";
import "./PayMethod.css"
const PayMethod = () => {
	return (
		<div id="PayMethod">
			<div className="titulo">
				<h3>Métodos de pago</h3>
			</div>
			<div className="link">
				<div className="PayCredit">
					<img
						className="img"
						src={PayCredit}
						alt="Tarjetas de crédito" />
				</div>
				<div className="PayOnline">
					<img
						className="payonline"
						src={PayOnline}
						alt="Efectivo en puntos de pago" />
					<img className="pse"
						src={PayTransfer}
						alt="Transferencia desde tu banco"
					/>
				</div>
			</div>
		</div>
	);
}

export default PayMethod;