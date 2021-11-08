import React, { Component } from 'react';
import Link from 'next/link';
import Modal from '../Common/Modal/Modal';
import Button from '../Common/Button/Button';
import Nav from '../Common/Nav/Nav';
import Footer from '../Common/Footer/Footer';
import UserAccount from '../../components/UserAccount/UserAccount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import './Summary.css';
import Sidebar from '../Sidebar/Sidebar';
import Purchases from '../Purchases/Purchases';
import PurchasesDetail from '../PurchasesDetail/PurchasesDetail';
import AccountData from '../Account/AccountData';
import AccountPurchase from '../Account/AccountPurchase';
import AccountBilling from '../Account/AccountBilling';
import AccountQuestions from '../Account/AccountQuestions';
import AccountSummary from '../Account/AccountSummary';
import MyProducts from '../MyProducts/MyProducts';
import Logo1 from '../../assets/img/logo-social.png';
import Logo2 from '../../assets/img/logo-social1.png';

export default class Summary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: this.props.user_data.user,
			accordionMyData: true,
			closeMyData: true,
			iconMyData: true,
			userAccountIconMyData: faAngleRight,
			closeSidebar: true,
			display: {
				resume: true,
				myData: false,
				bill: false,
				orders: false,
				questions: false,
				items: false,
				detail: false,
			},
		};
	}

	accordionMyData = () => {
		this.setState({
			closeMyData: !this.state.closeMyData,
			iconMyData: !this.state.iconMyData,
		});
		if (this.state.iconMyData === true) {
			this.setState({
				userAccountIconMyData: faAngleDown,
			});
		} else if (this.state.icon1MyData === false) {
			this.setState({
				userAccountIconMyData: faAngleRight,
			});
		}
	};

	toggleModal = (modal) => {
		const newState = { ...this.state };
		newState[`modal${modal}`] = !newState[`modal${modal}`] ? true : false;
		this.setState(newState);
	};

	showSection = (section, e) => {
		this.setState({
			display: {
				resume: section === 'resume',
				myData: section === 'myData',
				myProducts: section === 'myProducts',
				mySales: section === 'mySales',
				bill: section === 'bill',
				orders: section === 'orders',
				questions: section === 'questions',
				items: section === 'items',
				purchases: section === 'purchases',
				detail: section === 'detail',
			},
		});
	};

	componentDidMount() {
		let tab = document.location.href.split('#');
		if (tab[1] !== undefined) {
			this.setState({
				display: {
					resume: tab[1] === 'resume' ? true : false,
					myData: tab[1] === 'opciones' ? true : false,
					myProducts: tab[1] === 'products' ? true : false,
					mySales: tab[1] === 'ventas' ? true : false,
					bill: tab[1] === 'facturación' ? true : false,
					orders: tab[1] === 'compras' ? true : false,
					questions: tab[1] === 'questions' ? true : false,
					items: false,
					purchases: false,
					detail: false,
				},
			});
		}
	}

	CloseSidebar = () => {
		this.setState({
			closeSidebar: !this.state.closeSidebar,
		});
		console.info('si ejecuta y cambia el estado ' + this.state.closeSidebar);
	};

	render() {
		let u_data = this.props.user_data;
		let url = '//www.sic.gov.co';

		return (
			<div className="summary-content">
				<div className="summary-botton" onClick={() => this.CloseSidebar()}>
					<FontAwesomeIcon icon={faBars} />
				</div>

				<Nav
					jwt={u_data.jwt}
					cb={this.showSection}
					user_data={u_data}
					user={u_data.user}
					home={false}
					authenticated={u_data.authenticated}
				/>
				<div
					className={
						this.state.closeSidebar
							? 'user-account-container'
							: ' user-account-container show-sidebar'
					}
				>
					<Sidebar user_data={u_data} cb={this.showSection} />
					{this.state.display.resume && <AccountSummary user={u_data} />}
					{this.state.display.orders && <Purchases mode={'buy'} user={u_data} />}
					{/* {this.state.display.detail && <PurchasesDetail mode={"buy"} user={u_data} />} */}
					{this.state.display.bill && (
						<AccountBilling user={u_data} cb={this.showSection} />
					)}

					{this.state.display.myData && <UserAccount user={u_data} />}
					{this.state.display.mySales && <Purchases mode={'sell'} user={u_data} />}

					{this.state.display.myProducts && <MyProducts jwt={u_data.jwt} />}
					{this.state.display.questions && <AccountQuestions user={u_data} />}
					{this.state.display.purchases && <AccountPurchase user={u_data} />}
				</div>
				<Footer />
				<div className="footer-social">
					<Link href={url}>
						<a rel="noopener noreferrer">
							<img src={Logo1} />
						</a>
					</Link>
					<Link href={url}>
						<a rel="noopener noreferrer">
							<img src={Logo2} />
						</a>
					</Link>
				</div>
			</div>
		);
	}
}
