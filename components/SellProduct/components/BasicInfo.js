import React, { useState } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CloseIcon from '@material-ui/icons/Close';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import barCode from '../img/barCode.png';
import HtmlTooltip from './Tooltip';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
}));

export default function BasicInfo({
	valid,
	title,
	setTitle,
	price,
	setPrice,
	images,
	setImages,
	color,
	setColor,
	quantity,
	setQuantity,
	code,
	setCode,
	noCode,
	setNoCode,
}) {
	const classes = useStyles();
	const [pictureInfo, setPictureInfo] = useState(false);
	const [codeInfo, setCodeInfo] = useState(false);
	// const [formatedPrice, setFormatedPrice] = useState(null);
	function goBack() {
		window.history.back();
	}

	// function moneyFormater(price) {
	// 	var num = price;
	// 	num = num
	// 		.toString()
	// 		.split('')
	// 		.reverse()
	// 		.join('')
	// 		.replace(/(?=\d*\.?)(\d{3})/g, '$1.');
	// 	num = num.split('').reverse().join('').replace(/^[\.]/, '');
	// 	return num;
	// }

	function handleTitle(e) {
		if (e.target.value.length < 151) {
			setTitle(e.target.value);
		}
	}

	function handlePrice(e) {
		const pattern = new RegExp('^[0-9]*$');
		setPrice(pattern.test(e.target.value) ? e.target.value : e.target.value.slice(0, -1));
		// setFormatedPrice(moneyFormater(pattern.test(e.target.value) ? e.target.value : e.target.value.slice(0, -1)));
	}

	function handleImgs(e) {
		const maxLength = 8;
		if (e.target.files) {
			const fileArray = Array.from(e.target.files).map((file) =>
				URL.createObjectURL(file)
			);
			if (images.length + Array.from(e.target.files).length <= maxLength) {
				setImages((prevImages) => prevImages.concat(fileArray));
				Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
			} else {
				e.preventDefault();
				alert(`Cannot upload files more than ${maxLength}`);
				return;
			}
		}
	}

	console.log(images);
	function deleteImg(im) {
		const newImgArr = [];
		images.forEach((img) => {
			if (im !== img) {
				newImgArr.push(img);
			}
		});
		setImages(newImgArr);
	}

	function handleColor(e) {
		const pattern = new RegExp('^[a-zA-Z\u0080-\uFFFF ]+$');
		setColor(pattern.test(e.target.value) ? e.target.value : e.target.value.slice(0, -1));
	}

	function handleQuantity(e) {
		const pattern = new RegExp('^[0-9]*$');
		setQuantity(
			pattern.test(e.target.value) ? e.target.value : e.target.value.slice(0, -1)
		);
	}

	function handleCode(e) {
		const pattern = new RegExp('^[0-9]*$');
		setCode(pattern.test(e.target.value) ? e.target.value : e.target.value.slice(0, -1));
	}

	noCode ? setCode('') : '';

	return (
		<>
			<div onClick={goBack} className="backOption">
				<ArrowBackIosIcon fontSize="small" id="backOptionArrow" />
				Volver
			</div>
			<div className="productTitle">
				<div>Título</div>
				<div className="productTitleInput">
					<InputBase
						value={title}
						onChange={handleTitle}
						margin="dense"
						fullWidth
						className={classes.margin}
						inputProps={{ 'aria-label': 'naked' }}
						placeholder="Escribe el titulo del producto"
					/>
					{!valid && !title ? (
						<div className="productTitleError">Debes completar este campo</div>
					) : (
						''
					)}
				</div>
				<div className="charCount">{title.length} / 150</div>
			</div>
			<div className="productPrice">
				<div>Precio</div>
				<div className="productPriceInput">
					<InputBase
						value={price}
						onChange={handlePrice}
						margin="dense"
						fullWidth
						className={classes.margin}
						inputProps={{ 'aria-label': 'naked' }}
						placeholder="$."
					/>
					{!valid && !price ? (
						<div className="productTitleError">Debes completar este campo</div>
					) : (
						''
					)}
				</div>
			</div>
			<div className="productCharacteristicsContainer">
				<div>
					<div className="productCharacteristicstTitle">Características del producto</div>
					<div className="picturesContainer">
						<div className="picturesTitle">
							Fotos
							<HtmlTooltip
								open={pictureInfo}
								placement="top-start"
								title={
									<div style={{ width: '400px' }}>
										<div className="picturesInfoTitle">Selecciona una buena foto</div>
										<div className="picturesInfoParagraph">
											Realizar la captura de buenas imágenes es fundamental, para que
											puedas resaltar tu producto y obtener publicaciones con una buena
											calidad. Te recomendamos que utilices fondo blanco en tus imágenes
											con un tamaño de 1200 x 900 píxeles, con la finalidad de que los
											compradores puedan ampliarlas.
										</div>
									</div>
								}
							>
								<ErrorIcon
									id="picturesTitleInfo"
									onClick={() => setPictureInfo(!pictureInfo)}
									onMouseOver={() => setPictureInfo(true)}
									onMouseOut={() => setPictureInfo(false)}
								/>
							</HtmlTooltip>
						</div>
						<div className="picturesInstruction">Agrega fotos de tu producto</div>
						<TextField
							onChange={handleImgs}
							id="uploadImageButton"
							type="file"
							inputProps={{
								multiple: true,
								accept: '.png, .jpg, .jpeg',
							}}
							style={{ display: 'none' }}
						/>
						<div className="picturesButtonContainer">
							<label htmlFor="uploadImageButton">
								<div className="picturesAddButton">
									Agregar
									<CameraAltIcon id="picturesCameraIcon" />
								</div>
							</label>
						</div>
						{!valid && !images ? (
							<div className="picturesError">Debes completar este campo</div>
						) : (
							''
						)}
						<ul className="picturesPreview">
							{images.length
								? images.map((im, index) => {
										return (
											<div key={index} className="pictureCont">
												<CloseIcon onClick={() => deleteImg(im)} id="pictureDelete" />
												<img className="picture" src={im} alt="" />
											</div>
										);
								  })
								: ''}
						</ul>
					</div>
				</div>
				<div>
					<div className="productColorTitle">Color</div>
					<div className="productColorInput">
						<InputBase
							value={color}
							onChange={handleColor}
							margin="dense"
							fullWidth
							className={classes.margin}
							inputProps={{ 'aria-label': 'naked' }}
							placeholder="Escribe el color de tu producto"
						/>
						{!valid && !color ? (
							<div className="productTitleError">Debes completar este campo</div>
						) : (
							''
						)}
					</div>
					<div className="productQuantityTitle">Cantidad</div>
					<div>
						<div className="productQuantityInput">
							<InputBase
								value={quantity}
								onChange={handleQuantity}
								margin="dense"
								fullWidth
								inputProps={{ 'aria-label': 'naked' }}
								placeholder="0"
							/>
							{!valid && !quantity ? (
								<div className="productQuantityError">Debes completar este campo</div>
							) : (
								''
							)}
						</div>
					</div>
					<div className="productCodeTitle">
						Código universal del producto
						<HtmlTooltip
							PopperProps={{
								popperOptions: {
									modifiers: {
										offset: {
											enabled: true,
											offset: '-10px, 10px',
										},
									},
								},
							}}
							open={codeInfo}
							placement="top-end"
							title={
								<div style={{ width: '400px' }}>
									<div className="codeInfoTitle">Códigos de producto</div>
									<div className="codeInfoParagraph">
										Estos son parte importante, puesto que son únicos para identificar
										cada producto de los demás. Existen diferentes códigos dependiendo de
										lo que deseas vender, destacando los EAN, ISBN, y UPC. Así mismo, es
										importante señalar que lo puedes encontrar junto al código de barra
										y/o en la caja del producto.
									</div>
									<img className="codeInfoBarCode" src={barCode} alt="" />
								</div>
							}
						>
							<ErrorIcon
								id="picturesTitleInfo"
								onClick={() => setCodeInfo(!codeInfo)}
								onMouseOver={() => setCodeInfo(true)}
								onMouseOut={() => setCodeInfo(false)}
							/>
						</HtmlTooltip>
					</div>

					<div className="productCodeOptContainer">
						<div className="productCodeInput">
							<InputBase
								error
								value={code}
								onChange={handleCode}
								margin="dense"
								fullWidth
								className={classes.margin}
								inputProps={{ 'aria-label': 'naked' }}
								helperText="Incorrect entry."
							/>
							{!valid && !code && !noCode ? (
								<div className="productTitleError">Debes completar este campo</div>
							) : (
								''
							)}
						</div>
						<div className="productCodeCheckBoxContainer">
							<Checkbox
								value={noCode}
								onChange={() => setNoCode(!noCode)}
								style={{ color: '#CF0A2C' }}
							/>
							<div className="productCodeCheckBoxText">Sin código</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
