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

export default function SellProduct({ sesion }) {
	//BasicInfo States
	const [title, setTitle] = useState('');
	console.log('Titulo', title);
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');
	const [color, setColor] = useState('');
	const [quantity, setQuantity] = useState('');
	const [code, setCode] = useState('');
	const [noCode, setNoCode] = useState(false);

	//DataSheet States

	const [switchedWithdraw, setSwitchedWithdraw] = useState(false);
	console.log('Retiro en persona', switchedWithdraw);

	const [selectedTypeOfAdd, setSelectedTypeOfAdd] = useState('');
	console.log('Tipo de anuncio', selectedTypeOfAdd);

	const [warrantyValue, setWarrantyValue] = useState('');
	console.log('Garantia', warrantyValue);

	const [categoryValue, setCategoryValue] = useState('');
	console.log('Categoria', categoryValue);

	return (
		<>
			<Nav
			// user={sesion.user}
			// home={true}
			// jwt={sesion.jwt}
			// authenticated={sesion.authenticated}
			/>
			<div className="sellProductContainer">
				<div>
					<BasicInfo
						title={title}
						setTitle={setTitle}
						price={price}
						setPrice={setPrice}
						image={image}
						setImage={setImage}
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
						<DataSheetAcordeon />
						<WithdrawAcordeon
							switchedWithdraw={switchedWithdraw}
							setSwitchedWithdraw={setSwitchedWithdraw}
						/>
						<TypeOfAddAcordeon
							selectedTypeOfAdd={selectedTypeOfAdd}
							setSelectedTypeOfAdd={setSelectedTypeOfAdd}
						/>
						<DescriptionAcordeon />
						<VideoAcordeon />
						<AvailabilityAcordeon />
						<WarrantyAcordeon
							warrantyValue={warrantyValue}
							setWarrantyValue={setWarrantyValue}
						/>
						<CategoryAcordeon
							categoryValue={categoryValue}
							setCategoryValue={setCategoryValue}
						/>
					</div>
					<div>
						<div className="productConfirmAndCancelButtons">
							<Button id="productConfirmButton" variant="outlined" color="secondary">
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
