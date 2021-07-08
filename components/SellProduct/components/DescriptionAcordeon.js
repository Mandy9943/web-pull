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

export default function DescriptionAcordeon({
	expandedDescription,
	setExpandedDescription,
	descriptionInfo,
	setDescriptionInfo,
}) {
	const classes = useStyles();

	return (
		<div className="productAcordeonContainer">
			<div className="productAcordeon">
				Descripción
				{expandedDescription ? (
					<ErrorIcon
						onClick={() => setDescriptionInfo(!descriptionInfo)}
						onMouseOver={() => setDescriptionInfo(true)}
						onMouseOut={() => setDescriptionInfo(false)}
						id="picturesCodeInfo"
					/>
				) : (
					''
				)}
				{expandedDescription && descriptionInfo ? (
					<div className="descriptionInfo">
						<div className="descriptionInfoContainer">
							<div className="descriptionInfoTitle">Describe mejor tu producto</div>
							<div className="descriptionInfoParagraph">
								<div>
									En esta sección deberás complementar otras características que no
									conseguiste colocar en la ficha técnica, siendo organizado y breve.
								</div>
							</div>
						</div>
					</div>
				) : (
					''
				)}
				<ExpandMoreIcon
					style={{
						color: expandedDescription ? '#CF0A2C' : '',
						marginBottom: expandedDescription ? '40px' : '',
						cursor: 'pointer',
					}}
					className={clsx(classes.expand, {
						[classes.expandOpen]: expandedDescription,
					})}
					onClick={() => setExpandedDescription(!expandedDescription)}
					aria-expanded={expandedDescription}
				/>
			</div>
			<Collapse in={expandedDescription} timeout="auto" unmountOnExit>
				<div className="typeOfAddP">
					Agrega una descripción sobre tu producto así los usuarios tendrán información
					más detallada de él
				</div>
				<TextField
					id="outlined-multiline-static"
					fullWidth
					multiline
					rows={8}
					variant="outlined"
					placeholder="Escribe aquí información para compartir con tus clientes."
				/>
				<div className="descriptionCharCount">50/150</div>
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
