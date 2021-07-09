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

export default function AvailabilityAcordeon({}) {
	const classes = useStyles();
	const [expandedAvailability, setExpandedAvailability] = useState(false);
	const [availabilityInfo, setAvailabilityInfo] = useState(false);

	return (
		<div className="productAcordeonContainer">
			<div className="productAcordeon">
				Disponibilidad de stock
				{expandedAvailability ? (
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
				<div className="typeOfAddP">
					Indícale a tus compradores la cantidad disponible de tu producto
				</div>
				<div className="availabilityInput">
					<TextField
						variant="outlined"
						fullWidth
						placeholder="Ejemplo: 3"
						type="number"
					/>
				</div>
			</Collapse>
		</div>
	);
}
