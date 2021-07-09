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
	const [pictureInfo, setPictureInfo] = useState(false);
	const [codeInfo, setCodeInfo] = useState(false);
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');

	const [expandedDataSheet, setExpandedDataSheet] = useState(false);
	const [dataSheetInfo, setDataSheetInfo] = useState(false);
	const [expandedWithdraw, setExpandedWithdraw] = useState(false);
	const [withdrawInfo, setWithdrawInfo] = useState(false);
	const [switchedWithdraw, setSwitchedWithdraw] = useState(false);
	const [expandedTypeOfAdd, setExpandedTypeOfAdd] = useState(false);
	const [typeOfAddInfo, setTypeOfAddInfo] = useState(false);
	const [selectedTypeOfAdd, setSelectedTypeOfAdd] = useState('');
	const [expandedDescription, setExpandedDescription] = useState(false);
	const [descriptionInfo, setDescriptionInfo] = useState(false);
	const [expandedVideo, setExpandedVideo] = useState(false);
	const [videoInfo, setVideoInfo] = useState(false);
	const [expandedAvailability, setExpandedAvailability] = useState(false);
	const [availabilityInfo, setAvailabilityInfo] = useState(false);
	const [expandedWarranty, setExpandedWarranty] = useState(false);
	const [warrantyInfo, setWarrantyInfo] = useState(false);
	const [warrantyValue, setWarrantyValue] = useState('');
	const [expandedCategory, setExpandedCategory] = useState(false);
	const [categoryInfo, setCategoryInfo] = useState(false);
	const [categoryValue, setCategoryValue] = useState('');

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
						pictureInfo={pictureInfo}
						setPictureInfo={setPictureInfo}
						codeInfo={codeInfo}
						setCodeInfo={setCodeInfo}
					/>
					<div className="productAcordeonsContainer">
						<DataSheetAcordeon
							expandedDataSheet={expandedDataSheet}
							setExpandedDataSheet={setExpandedDataSheet}
							dataSheetInfo={dataSheetInfo}
							setDataSheetInfo={setDataSheetInfo}
						/>
						<WithdrawAcordeon
							expandedWithdraw={expandedWithdraw}
							setExpandedWithdraw={setExpandedWithdraw}
							withdrawInfo={withdrawInfo}
							setWithdrawInfo={setWithdrawInfo}
							switchedWithdraw={switchedWithdraw}
							setSwitchedWithdraw={setSwitchedWithdraw}
						/>
						<TypeOfAddAcordeon
							expandedTypeOfAdd={expandedTypeOfAdd}
							setExpandedTypeOfAdd={setExpandedTypeOfAdd}
							typeOfAddInfo={typeOfAddInfo}
							setTypeOfAddInfo={setTypeOfAddInfo}
							selectedTypeOfAdd={selectedTypeOfAdd}
							setSelectedTypeOfAdd={setSelectedTypeOfAdd}
						/>
						<DescriptionAcordeon
							expandedDescription={expandedDescription}
							setExpandedDescription={setExpandedDescription}
							descriptionInfo={descriptionInfo}
							setDescriptionInfo={setDescriptionInfo}
						/>
						<VideoAcordeon
							expandedVideo={expandedVideo}
							setExpandedVideo={setExpandedVideo}
							videoInfo={videoInfo}
							setVideoInfo={setVideoInfo}
						/>
						<AvailabilityAcordeon
							expandedAvailability={expandedAvailability}
							setExpandedAvailability={setExpandedAvailability}
							availabilityInfo={availabilityInfo}
							setAvailabilityInfo={setAvailabilityInfo}
						/>
						<WarrantyAcordeon
							expandedWarranty={expandedWarranty}
							setExpandedWarranty={setExpandedWarranty}
							warrantyInfo={warrantyInfo}
							setWarrantyInfo={setWarrantyInfo}
							warrantyValue={warrantyValue}
							setWarrantyValue={setWarrantyValue}
						/>
						<CategoryAcordeon
							expandedCategory={expandedCategory}
							setExpandedCategory={setExpandedCategory}
							categoryInfo={categoryInfo}
							setCategoryInfo={setCategoryInfo}
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
