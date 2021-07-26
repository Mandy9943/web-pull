import React, { useState } from 'react';
import './SellProduct.css';

//Components
import Nav from '../Common/Nav/Nav';
import BasicInfo from './components/BasicInfo';
import DataSheetAcordeon from './components/DataSheetAcordeon';
import WithdrawAcordeon from './components/WithDrawAcordeon';
import TypeOfAddAcordeon from './components/TypeOfAddAcordeon';
import DescriptionAcordeon from './components/DescriptionAcordeon';
import VideoAcordeon from './components/VideoAcordeon';
import AvailabilityAcordeon from './components/AvailabilityAcordeon';
import WarrantyAcordeon from './components/WarrantyAcordeon';
import CategoryAcordeon from './components/CategoryAcordeon';
import Button from '@material-ui/core/Button';
import Footer from '../Common/Footer';

export default function SellProduct({ user_data }) {
	const [valid, setValid] = useState(true);

	//BasicInfo States
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [images, setImages] = useState('');
	const [color, setColor] = useState('');
	const [quantity, setQuantity] = useState('');
	const [code, setCode] = useState('');
	const [noCode, setNoCode] = useState(false);

	//DataSheet States
	const [brand, setBrand] = useState('');
	const [model, setModel] = useState('');
	const [material, setMaterial] = useState('');
	const [long, setLong] = useState('');
	const [longUnit, setLongUnit] = useState('cm');
	const [width, setWidth] = useState('');
	const [widthUnit, setWidthUnit] = useState('cm');
	const [dataSheetError, setDataSheetError] = useState(false);

	//Withdraw States
	const [switchedWithdraw, setSwitchedWithdraw] = useState(false);

	//TypeOfAdd States
	const [selectedTypeOfAdd, setSelectedTypeOfAdd] = useState('');
	const [typeOfAddError, setTypeOfAddError] = useState(false);

	//Description States
	const [description, setDescription] = useState('');
	const [descriptionError, setDescriptionError] = useState(false);

	//Video States
	const [video, setVideo] = useState('');
	const [videoError, setVideoError] = useState(false);

	//Availability States
	const [availability, setAvailability] = useState('');
	const [availabilityError, setAvailabilityError] = useState(false);

	//Warranty States
	const [warrantyValue, setWarrantyValue] = useState('');
	const [warrantyError, setWarrantyError] = useState(false);

	//Category States
	const [categoryValue, setCategoryValue] = useState('');
	const [categoryError, setCategoryError] = useState(false);

	function validateForm() {
		if (
			title &&
			price &&
			images &&
			color &&
			quantity &&
			code &&
			noCode &&
			brand &&
			model &&
			material &&
			long &&
			longUnit &&
			width &&
			widthUnit &&
			switchedWithdraw &&
			selectedTypeOfAdd &&
			description &&
			video &&
			availability &&
			warrantyValue &&
			categoryValue
		) {
			setValid(true);
		} else {
			setValid(false);
			if (!brand || !model || !material || !long || !width) {
				setDataSheetError(true);
			} else {
				setDataSheetError(false);
			}
			if (!selectedTypeOfAdd) {
				setTypeOfAddError(true);
			} else {
				setTypeOfAddError(false);
			}
			if (!description) {
				setDescriptionError(true);
			} else {
				setDescriptionError(false);
			}
			if (!video || !video.includes('https://www.youtube.com/watch?')) {
				setVideoError(true);
			} else {
				setVideoError(false);
			}
			if (!availability) {
				setAvailabilityError(true);
			} else {
				setAvailabilityError(false);
			}
			if (!warrantyValue) {
				setWarrantyError(true);
			} else {
				setWarrantyError(false);
			}
			if (!categoryValue) {
				setCategoryError(true);
			} else {
				setCategoryError(false);
			}
		}
		const info = {
			title: title,
			price: price,
			images: images,
			color: color,
			quantity: quantity,
			code: code,
			noCode: noCode,
			brand: brand,
			model: model,
			material: material,
			long: long,
			longUnit: longUnit,
			width: width,
			widthUnit: widthUnit,
			switchedWithdraw: switchedWithdraw,
			selectedTypeOfAdd: selectedTypeOfAdd,
			description: description,
			video: video,
			availability: availability,
			warrantyValue: warrantyValue,
			categoryValue: categoryValue,
		};
		console.log(info);
	}

	return (
		<>
			<Nav
				jwt={user_data.jwt}
				user_data={user_data}
				authenticated={user_data.authenticated}
				user={user_data.user}
				home={false}
			/>
			<div className="sellProductContainer">
				<div>
					<BasicInfo
						valid={valid}
						title={title}
						setTitle={setTitle}
						price={price}
						setPrice={setPrice}
						images={images}
						setImages={setImages}
						color={color}
						setColor={setColor}
						quantity={quantity}
						setQuantity={setQuantity}
						code={code}
						setCode={setCode}
						noCode={noCode}
						setNoCode={setNoCode}
					/>
					<div className="productAcordeonsContainer">
						<DataSheetAcordeon
							dataSheetError={dataSheetError}
							brand={brand}
							setBrand={setBrand}
							model={model}
							setModel={setModel}
							material={material}
							setMaterial={setMaterial}
							long={long}
							setLong={setLong}
							longUnit={longUnit}
							setLongUnit={setLongUnit}
							width={width}
							setWidth={setWidth}
							widthUnit={widthUnit}
							setWidthUnit={setWidthUnit}
						/>
						<WithdrawAcordeon
							switchedWithdraw={switchedWithdraw}
							setSwitchedWithdraw={setSwitchedWithdraw}
						/>
						<TypeOfAddAcordeon
							typeOfAddError={typeOfAddError}
							selectedTypeOfAdd={selectedTypeOfAdd}
							setSelectedTypeOfAdd={setSelectedTypeOfAdd}
						/>
						<DescriptionAcordeon
							descriptionError={descriptionError}
							description={description}
							setDescription={setDescription}
						/>
						<VideoAcordeon videoError={videoError} video={video} setVideo={setVideo} />
						<AvailabilityAcordeon
							availabilityError={availabilityError}
							availability={availability}
							setAvailability={setAvailability}
						/>
						<WarrantyAcordeon
							warrantyError={warrantyError}
							warrantyValue={warrantyValue}
							setWarrantyValue={setWarrantyValue}
						/>
						<CategoryAcordeon
							categoryError={categoryError}
							categoryValue={categoryValue}
							setCategoryValue={setCategoryValue}
						/>
					</div>
					<div>
						<div className="productConfirmAndCancelButtons">
							<Button
								onClick={validateForm}
								id="productConfirmButton"
								variant="outlined"
								color="secondary"
							>
								Confirmar
							</Button>
							<Button id="productCancelButton">Cancelar</Button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
