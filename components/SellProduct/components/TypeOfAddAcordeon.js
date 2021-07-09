import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import medalla1 from '../img/medalla1.svg';
import medalla2 from '../img/medalla2.svg';
import medalla3 from '../img/medalla3.svg';
import clsx from 'clsx';
import HtmlTooltip from './Tooltip';

const useStyles = makeStyles((theme) => ({
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},

	toggle: {
		'& .Mui-checked': {
			color: '#CF0A2C',
		},
	},
}));

export default function TypeOfAddAcordeon({
	expandedTypeOfAdd,
	setExpandedTypeOfAdd,
	typeOfAddInfo,
	setTypeOfAddInfo,
	selectedTypeOfAdd,
	setSelectedTypeOfAdd,
}) {
	const classes = useStyles();

	return (
		<div className="productAcordeonContainer">
			<div className="productAcordeon">
				Tipo de publicación
				{expandedTypeOfAdd ? (
					<HtmlTooltip
						open={typeOfAddInfo}
						placement="top-start"
						title={
							<div>
								<div className="typeOfAddInfoTitle">
									Ten mayor visibilidad en tus publicaciones
								</div>
								<div className="typeOfAddInfoParagraph">
									Para que tus publicaciones puedan tener una visibilidad mayor, es
									necesario que selecciones un tipo de publicación con una exposición
									alta. En nuestra plataforma puedes contar con{' '}
									<b>Plan Platinium, Plan Oro y Plan Plata.</b>
								</div>
							</div>
						}
					>
						<ErrorIcon
							onClick={() => setTypeOfAddInfo(!typeOfAddInfo)}
							onMouseOver={() => setTypeOfAddInfo(true)}
							onMouseOut={() => setTypeOfAddInfo(false)}
							id="picturesCodeInfo"
						/>
					</HtmlTooltip>
				) : (
					''
				)}
				<ExpandMoreIcon
					style={{
						color: expandedTypeOfAdd ? '#CF0A2C' : '',
						marginBottom: expandedTypeOfAdd ? '40px' : '',
						cursor: 'pointer',
					}}
					className={clsx(classes.expand, {
						[classes.expandOpen]: expandedTypeOfAdd,
					})}
					onClick={() => setExpandedTypeOfAdd(!expandedTypeOfAdd)}
					aria-expanded={expandedTypeOfAdd}
				/>
			</div>
			<Collapse in={expandedTypeOfAdd} timeout="auto" unmountOnExit>
				<div className="typeOfAddP">
					Selecciona en que posición quieres que este tu publicación
				</div>
				<div className="typeOfAddOptions">
					<div className="typeOfAddOpt" onClick={() => setSelectedTypeOfAdd(3)}>
						<div
							style={{ backgroundColor: selectedTypeOfAdd === 3 ? '#CF0A2C' : '' }}
							className="typeOfAddOptTitle"
						>
							Plan Plata
						</div>
						<div className="typeOfAddOptImg">
							Posición baja
							<div>
								<img
									style={{ marginTop: '-22px', marginBottom: '-30px' }}
									src={medalla3}
									alt=""
								/>
							</div>
						</div>
						<div className="typeOfAddText">
							Este plan tiene un valor del 12% del costo de la venta, ofrece exposición
							media en la página de categoría.
						</div>
					</div>
					<div className="typeOfAddOpt" onClick={() => setSelectedTypeOfAdd(2)}>
						<div
							className="typeOfAddOptTitle"
							style={{ backgroundColor: selectedTypeOfAdd === 2 ? '#CF0A2C' : '' }}
						>
							Plan Oro
						</div>
						<div className="typeOfAddOptImg">
							Posición media
							<div>
								<img
									style={{ marginTop: '-14px', marginBottom: '-35px' }}
									src={medalla2}
									alt=""
								/>
							</div>
						</div>
						<div className="typeOfAddText">
							Este plan tiene un valor del 16% del costo de la venta, ofrece exposición
							alta en la página de la categoría.
						</div>
					</div>
					<div className="typeOfAddOpt" onClick={() => setSelectedTypeOfAdd(1)}>
						<div
							className="typeOfAddOptTitle"
							style={{ backgroundColor: selectedTypeOfAdd === 1 ? '#CF0A2C' : '' }}
						>
							Plan Platinum
						</div>
						<div className="typeOfAddOptImg">
							Posición alta
							<div>
								<img
									style={{ marginTop: '-1px', marginBottom: '-10px' }}
									src={medalla1}
									alt=""
								/>
							</div>
						</div>
						<div className="typeOfAddText">
							Este plan tiene un valor del 18% del costo de la venta, ofrece exposición
							máxima en la página principal y en la de categoría.
						</div>
					</div>
				</div>
			
			</Collapse>
		</div>
	);
}
