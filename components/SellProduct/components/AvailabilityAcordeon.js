import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';

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

export default function AvailabilityAcordeon({
	expandedAvailability,
	setExpandedAvailability,
	availabilityInfo,
	setAvailabilityInfo,
}) {
	const classes = useStyles();

	return (
		<div className="productAcordeonContainer">
			<div className="productAcordeon">
				Disponibilidad de stock
				{expandedAvailability ? (
					<ErrorIcon
						onClick={() => setAvailabilityInfo(!availabilityInfo)}
						onMouseOver={() => setAvailabilityInfo(true)}
						onMouseOut={() => setAvailabilityInfo(false)}
						id="picturesCodeInfo"
					/>
				) : (
					''
				)}
				{expandedAvailability && availabilityInfo ? (
					<div className="availabilityInfo">
						<div className="availabilityInfoContainer">
							<div className="availabilityInfoTitle">
								Mantén tu stock de producto actualizado
							</div>
							<div className="availabilityInfoParagraph">
								<div>
									Dar a conocer a tus compradores la cantidad de unidades disponibles es
									importante, asegúrate de tener tu stock actualizado.
								</div>
							</div>
						</div>
					</div>
				) : (
					''
				)}
				<ExpandMoreIcon
					style={{
						color: expandedAvailability ? '#CF0A2C' : '',
						marginBottom: expandedAvailability ? '40px' : '',
						cursor: 'pointer',
					}}
					className={clsx(classes.expand, {
						[classes.expandOpen]: expandedAvailability,
					})}
					onClick={() => setExpandedAvailability(!expandedAvailability)}
					aria-expanded={expandedAvailability}
				/>
			</div>
			<Collapse in={expandedAvailability} timeout="auto" unmountOnExit>
				<div className="typeOfAddP">Agrega el link de algún video de Youtube</div>
				<div className="availabilityInput">
					<TextField
						variant="outlined"
						fullWidth
						placeholder="Ejemplo: 3"
						type="number"
					/>
				</div>
				<div className="withdrawButtonsContainer">
					<div className="withdrawConfirmAndCancelButtons">
						<Button id="dataSheetConfirmButton" variant="outlined">
							Confirmar
						</Button>
						<Button id="dataSheetCancelButton">Cancelar</Button>
					</div>
				</div>
			</Collapse>
		</div>
	);
}
