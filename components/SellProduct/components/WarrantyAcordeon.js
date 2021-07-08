import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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
	radio: {
		'&$checked': {
			color: '#CF0A2C',
		},
	},
	checked: {},
}));

export default function WarrantyAcordeon({
	expandedWarranty,
	setExpandedWarranty,
	warrantyInfo,
	setWarrantyInfo,
	warrantyValue,
	setWarrantyValue,
}) {
	const classes = useStyles();

	const handleChange = (event) => {
		setWarrantyValue(event.target.value);
	};

	return (
		<div className="productAcordeonContainer">
			<div className="productAcordeon">
				Garantía
				{expandedWarranty ? (
					<ErrorIcon
						onClick={() => setWarrantyInfo(!warrantyInfo)}
						onMouseOver={() => setWarrantyInfo(true)}
						onMouseOut={() => setWarrantyInfo(false)}
						id="picturesCodeInfo"
					/>
				) : (
					''
				)}
				{expandedWarranty && warrantyInfo ? (
					<div className="warrantyInfo">
						<div className="warrantyInfoContainer">
							<div className="warrantyInfoTitle">
								Informales a tus comprados la garantía de tu producto
							</div>
							<div className="warrantyInfoParagraph">
								<div>
									Incluye la garantía de tus productos con la finalidad de brindarle una
									mayor confianza a tus compradores.
								</div>
							</div>
						</div>
					</div>
				) : (
					''
				)}
				<ExpandMoreIcon
					style={{
						color: expandedWarranty ? '#CF0A2C' : '',
						marginBottom: expandedWarranty ? '40px' : '',
						cursor: 'pointer',
					}}
					className={clsx(classes.expand, {
						[classes.expandOpen]: expandedWarranty,
					})}
					onClick={() => setExpandedWarranty(!expandedWarranty)}
					aria-expanded={expandedWarranty}
				/>
			</div>
			<Collapse in={expandedWarranty} timeout="auto" unmountOnExit>
				<div className="typeOfAddP">Indica que tipo de garantía ofreces</div>

				<RadioGroup value={warrantyValue} onChange={handleChange}>
					<div>
						<Radio
							value="Garantía del vendedor"
							classes={{ root: classes.radio, checked: classes.checked }}
						/>
						Garantía del vendedor
					</div>
					<div>
						<Radio
							value="Garantía de fábrica"
							classes={{ root: classes.radio, checked: classes.checked }}
						/>
						Garantía de fábrica
					</div>
					<div>
						<Radio
							value="Sin garantía"
							classes={{ root: classes.radio, checked: classes.checked }}
						/>
						Sin garantía
					</div>
				</RadioGroup>
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
