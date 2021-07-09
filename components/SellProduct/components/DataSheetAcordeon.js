import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ErrorIcon from '@material-ui/icons/Error';
import clsx from 'clsx';
import HtmlTooltip from './Tooltip';

const BootstrapInput = withStyles((theme) => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 4,
		backgroundColor: theme.palette.background.paper,
		fontSize: 15,
		border: '0.01px solid #a8a8a8',
		borderRadius: '5px',
		width: '28px',
		height: '21px',
		padding: '10px 26px 8px 12px',
		margin: '-8px -8px 0 0',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			borderRadius: 4,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
		},
	},
}))(InputBase);

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
	margin: {
		margin: theme.spacing(1),
	},
}));

export default function DataSheetAcordeon({
	expandedDataSheet,
	setExpandedDataSheet,
	dataSheetInfo,
	setDataSheetInfo,
}) {
	const classes = useStyles();

	return (
		<div className="productAcordeonContainer">
			<div className="productAcordeon">
				Ficha técnica
				{expandedDataSheet ? (
					<HtmlTooltip
						open={dataSheetInfo}
						placement="top-start"
						title={
							<div style={{ width: '431px' }}>
								<div className="dataSheetInfoTitle">
									Agrega las características del producto que estás vendiendo
								</div>
								<div className="dataSheetInfoParagraph">
									Recuerda que entre más específico seas en tu descripción mayor confianza
									le vas a generar al comprador, además de que vas a evitar preguntas
									referentes a los detalles del producto que ofreces.
								</div>
							</div>
						}
					>
						<ErrorIcon
							onClick={() => setDataSheetInfo(!dataSheetInfo)}
							onMouseOver={() => setDataSheetInfo(true)}
							onMouseOut={() => setDataSheetInfo(false)}
							id="picturesCodeInfo"
						/>
					</HtmlTooltip>
				) : (
					''
				)}
				<ExpandMoreIcon
					style={{
						color: expandedDataSheet ? '#CF0A2C' : '',
						marginBottom: expandedDataSheet ? '40px' : '',
						cursor: 'pointer',
					}}
					className={clsx(classes.expand, {
						[classes.expandOpen]: expandedDataSheet,
					})}
					onClick={() => setExpandedDataSheet(!expandedDataSheet)}
					aria-expanded={setExpandedDataSheet}
				/>
			</div>
			<Collapse in={expandedDataSheet} timeout="auto" unmountOnExit>
				<div className="dataSheetContainer">
					<div className="dataSheetText">
						Completa estos datos con la ayuda de la caja de producto,
						<br /> su etiqueta, envase o usando las especificaciones del fabricante
					</div>
					<div className="dataSheetBrandAndModel">
						<div className="dataSheetInput">
							<InputBase
								margin="dense"
								fullWidth
								placeholder="Marca"
								className={classes.margin}
								inputProps={{ 'aria-label': 'naked' }}
							/>
						</div>
						<div className="dataSheetInput">
							<InputBase
								margin="dense"
								fullWidth
								placeholder="Modelo"
								className={classes.margin}
								inputProps={{ 'aria-label': 'naked' }}
							/>
						</div>
					</div>
					<div className="dataSheetBrandAndModel">
						<div className="dataSheetInput">
							<InputBase
								margin="dense"
								fullWidth
								placeholder="Material"
								className={classes.margin}
								inputProps={{ 'aria-label': 'naked' }}
							/>
						</div>
						<div className="dataSheetLongContainer">
							<div className="dataSheetLongInput">
								<InputBase
									margin="dense"
									fullWidth
									placeholder="Largo"
									className={classes.margin}
									inputProps={{ 'aria-label': 'naked' }}
								/>
							</div>
							<div>
								<FormControl className={classes.margin}>
									<NativeSelect
										style={{ color: '#A2A2A2' }}
										id="demo-customized-select-native"
										// value={age}
										// onChange={handleChange}
										input={<BootstrapInput />}
										IconComponent={ExpandMoreIcon}
									>
										<option value="cm">cm</option>
										<option value="mm">mm</option>
										<option value="mt">mt</option>
										<option value="pulgada">plg</option>
									</NativeSelect>
								</FormControl>
							</div>
						</div>
					</div>
					<div className="dataSheetShortContainer">
						<div className="dataSheetLongContainer">
							<div className="dataSheetLongInput">
								<InputBase
									margin="dense"
									fullWidth
									placeholder="Ancho"
									className={classes.margin}
									inputProps={{ 'aria-label': 'naked' }}
								/>
							</div>
							<div>
								<FormControl className={classes.margin}>
									<NativeSelect
										style={{ color: '#A2A2A2' }}
										id="demo-customized-select-native"
										// value={age}
										// onChange={handleChange}
										input={<BootstrapInput />}
										IconComponent={ExpandMoreIcon}
									>
										<option value="cm">cm</option>
										<option value="mm">mm</option>
										<option value="mt">mt</option>
										<option value="pulgada">plg</option>
									</NativeSelect>
								</FormControl>
							</div>
						</div>
					</div>
				</div>
			</Collapse>
		</div>
	);
}
