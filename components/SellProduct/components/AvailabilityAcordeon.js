import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
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

export default function AvailabilityAcordeon({
	availability,
	setAvailability,
	availabilityError,
}) {
	const classes = useStyles();
	const [expandedAvailability, setExpandedAvailability] = useState(false);
	const [availabilityInfo, setAvailabilityInfo] = useState(false);

	function handleAvailability(e) {
		const pattern = new RegExp('^[0-9]*$');
		setAvailability(
			pattern.test(e.target.value) ? e.target.value : e.target.value.slice(0, -1)
		);
	}
	return (
		<div className="productAcordeonContainer">
			<div className="productAcordeon">
				Disponibilidad de stock
				{expandedAvailability || availabilityError ? (
					<HtmlTooltip
						open={availabilityInfo}
						placement="top-start"
						title={
							<div>
								<div className="availabilityInfoTitle">
									Mantén tu stock de producto actualizado
								</div>
								<div className="availabilityInfoParagraph">
									Dar a conocer a tus compradores la cantidad de unidades disponibles es
									importante, asegúrate de tener tu stock actualizado.
								</div>
							</div>
						}
					>
						<ErrorIcon
							onClick={() => setAvailabilityInfo(!availabilityInfo)}
							onMouseOver={() => setAvailabilityInfo(true)}
							onMouseOut={() => setAvailabilityInfo(false)}
							id="picturesCodeInfo"
						/>
					</HtmlTooltip>
				) : (
					''
				)}
				<ExpandMoreIcon
					style={{
						color: expandedAvailability || availabilityError ? '#CF0A2C' : '',
						marginBottom: expandedAvailability || availabilityError ? '40px' : '',
						cursor: 'pointer',
					}}
					className={clsx(classes.expand, {
						[classes.expandOpen]: expandedAvailability || availabilityError,
					})}
					onClick={() => setExpandedAvailability(!expandedAvailability)}
					aria-expanded={expandedAvailability || availabilityError}
				/>
			</div>
			<Collapse
				in={expandedAvailability || availabilityError}
				timeout="auto"
				unmountOnExit
			>
				<div className="typeOfAddP">
					Indícale a tus compradores la cantidad disponible de tu producto
				</div>
				<div className="availabilityInput">
					<TextField
						onChange={handleAvailability}
						value={availability}
						variant="outlined"
						fullWidth
						placeholder="Ejemplo: 3"
					/>
					{availabilityError && !availability ? (
						<div className="productQuantityError">Debes completar este campo</div>
					) : (
						''
					)}
				</div>
			</Collapse>
		</div>
	);
}
