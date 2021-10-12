import React, { Component } from 'react';
import './DetailProductInfo.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class DetailProductInfo extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const handleBrand = (dataBrand) => {
			if (dataBrand === null) {
				return <></>;
			} else {
				return (
					<div className="item">
						<span className="title">Marca: {dataBrand}</span>
					</div>
				);
			}
		};
		const handleType = (dataType) => {
			if (dataType === null) {
				return <></>;
			} else {
				return (
					<div className="item">
						<span className="title">Tipo: {dataType}</span>
					</div>
				);
			}
		};
		const handleColor = (dataColor) => {
			if (dataColor === null || dataColor === '' || dataColor === 'Ninguno') {
				return <></>;
			} else {
				return (
					<div className="item">
						<span className="title">Color: {dataColor}</span>
					</div>
				);
			}
		};
		const handleModel = (dataModel) => {
			if (dataModel === null || dataModel === 'NULL' || dataModel === '') {
				return <></>;
			} else {
				return (
					<div className="item">
						<span className="title">Modelo: {dataModel}</span>
					</div>
				);
			}
		};
		const handleLength = (dataLength) => {
			if (dataLength === null || dataLength <= 0) {
				return <></>;
			} else {
				return (
					<div className="item">
						<span className="title">
							Largo: {parseFloat(dataLength).toFixed(2)}" - (
							{parseFloat(dataLength * 2.54).toFixed(1)}cm)
						</span>
					</div>
				);
			}
		};
		const handleWidth = (dataWidth) => {
			if (dataWidth === null || dataWidth <= 0) {
				return <></>;
			} else {
				return (
					<div className="item">
						<span className="title">
							Ancho: {parseFloat(dataWidth).toFixed(2)}" - (
							{parseFloat(dataWidth * 2.54).toFixed(1)}cm)
						</span>
					</div>
				);
			}
		};
		const handleWeight = (dataWeight) => {
			if (dataWeight === null || dataWeight <= 0) {
				return <></>;
			} else {
				return (
					<div className="item">
						<span className="title">
							Peso: {parseFloat(dataWeight).toFixed(2)} Lb - (
							{parseFloat(dataWeight / 2.205).toFixed(1)}kg)
						</span>
					</div>
				);
			}
		};
		const handleDesciption = (dataDesciption) => {
			if (dataDesciption === null) {
				return <></>;
			} else {
				return (
					<div>
						<h3 className="title-section accent" >Descripción:</h3>
						<br />
						<div className="justifyText">{this.props.desciption}</div>
					</div>
				);
			}
		};
		const handleInformation = (dataInformation) => {
			if (dataInformation === null) {
				return <></>;
			} else {
				return (
					<div>
						<h3 className="title-section accent">Información:</h3>
						<br />
						<div className="justifyText">{this.props.information}</div>
					</div>
				);
			}
		};

		let u_data = this.props.user_data;
		return (
			<>
				<section className="characteristics no-web">
					<div className="info-shops">
						<a>
							<p className="characteristics-title">Características</p>
						</a>
					</div>
					<div className="info">
						{handleBrand(this.props.brand)}
						{handleType(this.props.type)}
						{handleColor(this.props.color)}
						{handleModel(this.props.model)}
						{handleLength(this.props.length)}
						{handleWidth(this.props.width)}
						{handleWeight(this.props.weight)}
					</div>
				</section>

				<Accordion className="showGuide">
								<AccordionSummary
									expandIcon={<ExpandMoreIcon style={{color:'#CF0A2C !important'}}/>}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<h4 className="title-section">Detalle del producto</h4>
								</AccordionSummary>
								<AccordionDetails>
									{/* {dataTest(this.state.dataguide)} */}

									<div style={{ width: '100%' }}>

<div className="wrap-detail-info-movil">

	<div className="item-detail-info">
		<p>{this.props.product_name}</p>
		<br />
		<br />
		{handleDesciption(this.props.desciption)}
		<br />
		<br />
		{handleInformation(this.props.desciption)}
	</div>
	<section className="characteristics-web no-movil">
		<div className="info-shops edit" style={{marginLeft:'0px !important'}}>
			<a>
				<p style={{ fontSize: '16px' }}>Características</p>
			</a>
		</div>
		<div className="info">
			{handleBrand(this.props.brand)}
			{handleType(this.props.type)}
			{handleColor(this.props.color)}
			{handleModel(this.props.model)}
			{handleLength(this.props.length)}
			{handleWidth(this.props.width)}
			{handleWeight(this.props.weight)}
		</div>
		<br />
		<p style={{ fontSize: '16px' }} className="accent">
			SPICESTOCK
		</p>{' '}
		<br />
		*Este producto viene desde Estados Unidos
		<br />
		*(Entrega de 3 a 9 días hábiles) *Envío gratis
		<br />
		<br />
		{/* <p className="accent">ME RETRACTÉ DE MI COMPRA!</p>
<br />
En caso de ya que no quieras el producto que recibiste puedes realizar la devolución de esté, en un periodo no mayor a 5 días calendario desde su fecha de entrega, por ende el cliente deberá
asumir el valor del retorno a una de las direcciones que se le indicará, el valor del envío varía según el peso y el tamaño del producto. */}
	</section>
</div>
</div>

									{/* <div dangerouslySetInnerHTML={ {__html: this.state.dataguide} } style={{margin:"auto"}}/> */}
								</AccordionDetails>
							</Accordion>



				<div className="wrap-detail-info">
					<h3>Detalle del producto</h3>
					<div className="item-detail-info">
						<p>{this.props.product_name}</p>
						<br />
						<br />
						{handleDesciption(this.props.desciption)}
						<br />
						<br />
						{handleInformation(this.props.desciption)}
					</div>
					<section className="characteristics-web no-movil">
						<div className="info-shops edit" style={{marginLeft:'0px !important'}}>
							<a>
								<p className="title-section accent">Características</p>
							</a>
						</div>
						<div className="info">
							{handleBrand(this.props.brand)}
							{handleType(this.props.type)}
							{handleColor(this.props.color)}
							{handleModel(this.props.model)}
							{handleLength(this.props.length)}
							{handleWidth(this.props.width)}
							{handleWeight(this.props.weight)}
						</div>
						<br />
						<p style={{ fontSize: '18.72px' }} className="title-section accent">
							SPICESTOCK
						</p>{' '}
						<br />
						*Este producto viene desde Estados Unidos
						<br />
						*(Entrega de 3 a 9 días hábiles) *Envío gratis
						<br />
						<br />
						{/* <p className="accent">ME RETRACTÉ DE MI COMPRA!</p>
            <br />
              En caso de ya que no quieras el producto que recibiste puedes realizar la devolución de esté, en un periodo no mayor a 5 días calendario desde su fecha de entrega, por ende el cliente deberá
              asumir el valor del retorno a una de las direcciones que se le indicará, el valor del envío varía según el peso y el tamaño del producto. */}
					</section>
				</div>
				<section className="guarantee no-web">
					<h5 style={{ fontSize: '15px', fontWeight: 500}}>Garantía</h5>
					<span className="title">Compra protegida</span>
					<span className="sub-title">
						En caso de que surja algún problema o no recibas el producto tal como lo
						compraste, te devolveremos el dinero que pagaste.
					</span>
					<br/>
					<span className="title">Garantía del vendedor</span>
					<span className="sub-title">
						Garantía por defecto de fabrica de (1) un mes.
					</span>
				</section>


			</>
		);
	}
}

export default DetailProductInfo;
