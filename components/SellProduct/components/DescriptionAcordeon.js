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

export default function DescriptionAcordeon({ description, setDescription }) {
	const classes = useStyles();
	const [expandedDescription, setExpandedDescription] = useState(false);
	const [descriptionInfo, setDescriptionInfo] = useState(false);

	function handleDescription(e) {
		if (e.target.value.length < 151) {
			setDescription(e.target.value);
		}
	}

	return (
		<div className="productAcordeonContainer">
			<div className="productAcordeon">
				Descripción
				{expandedDescription ? (
					<HtmlTooltip
						open={descriptionInfo}
						placement="top-start"
						title={
							<div>
								<div className="descriptionInfoTitle">Describe mejor tu producto</div>
								<div className="descriptionInfoParagraph">
									En esta sección deberás complementar otras características que no
									conseguiste colocar en la ficha técnica, siendo organizado y breve.
								</div>
							</div>
						}
					>
						<ErrorIcon
							onClick={() => setDescriptionInfo(!descriptionInfo)}
							onMouseOver={() => setDescriptionInfo(true)}
							onMouseOut={() => setDescriptionInfo(false)}
							id="picturesCodeInfo"
						/>
					</HtmlTooltip>
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
					onChange={handleDescription}
					value={description}
					id="outlined-multiline-static"
					fullWidth
					multiline
					rows={8}
					variant="outlined"
					placeholder="Escribe aquí información para compartir con tus clientes."
				/>
				<div className="descriptionCharCount">{description.length + ' / 150'} </div>
			</Collapse>
		</div>
	);
}
