import React, { Component } from 'react';
import './Chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';
import Bread from './../BreadCrumbs';
import Nav from '../../Common/Nav';
import Footer from './../Footer';
import swal from 'sweetalert';
import { socket } from '../../Services/socket';
import { socketuser } from '../../Services/socketuser';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/es-mx';
// import AutoScroll from '@brianmcallister/react-auto-scroll';

class Chat extends Component {
	// chatContainer = React.createRef();
	messagesEndRef = React.createRef();
	constructor(props) {
		super(props);
		this.state = {
			storage: '',
			room_user: `KieroUser_${this.props.data.myID}`,
			send: 0,
			user: this.props.data.myID,
			store: 0,
			order: 0,
			messages: null,
			value_message: '',
			dataguide: [],
			// '<p style="text-align:center">Aún no hay información de la guía</p>'
		};
	}

	componentDidMount() {
		if (this.state.storage === '') {
			this.setState({
				storage: JSON.parse(localStorage.getItem('merchInf')),
			});
		}
		console.log(this.props.data);
		var url_string = location.href;
		var url = new URL(url_string);
		var store = url.searchParams.get('store');
		var order = url.searchParams.get('order');
		this.setState({ store: store, order: order });
		socket.emit('get_chat_user_by_order', {
			order: order,
			room: `kieroUser_${this.state.user}`,
		});

		// console.log(this.state.user)

		socket.on('response_join_chat', (data) => {
			console.log(data);
		});

		socket.on('response_user_chat', (data) => {
			console.log('response_user_chat: ', data);
		});

		socket.on('new_response_user', (data) => {
			this.setState({ messages: data.response });
			console.log('new_response_user', data);
		});

		socket.on('response_room_chats', (data) => {
			this.setState({ messages: data.rooms });
			console.log('response_room_chats', data);
			if (!data.guide) {
				console.log('no hay guía');
			} else {
				socketuser.emit('get_timeline', {
					order: order,
					guide: data.guide,
					room: `kieroUser_${this.state.user}`,
				});
			}
		});

		socketuser.on('timeline', (data) => {
			data.data.traking.map((datas) => {
				this.setState({ dataguide: [...this.state.dataguide, datas] });
				// arrayvar:[...this.state.arrayvar, newelement]
				// console.log(datas.DescripcionEstado)
				// return (
				//           <div>
				//             {datas.DescripcionEstado}
				//           </div>
				//         )
			});
		});
		// console.log("holaaaaa",viewguide)
		// this.state.dataguide = this.viewguide
	}

	setValue(val) {
		this.setState({ value_message: val });
	}

	handleSubmit() {
		var obj = {
			room_user: `kieroUser_${this.state.user}`, // KieroUser_ + user_id para poder crear la sala del usuario
			send: 0, // esto indica que quien esta enviando el mensaje es el usuario
			user: this.state.user, // el id del usuario que esta enviando el mensaje
			store: this.state.store, // id de la tienda a la que pertenece el producto
			order: this.state.order, // id de la orden por la cual el usuario puede escribir
			data: this.state.value_message, // mensaje que el usuario envia
		};
		// document.getElementsByClassName('msg').scrollTop = this.state.value_message.offsetHeight + this.state.value_message.offsetTop;
		socket.emit('new_room', obj);
		this.setState({ value_message: '' });
	}

	handleVerify() {
		swal({
			title: 'Buen trabajo!',
			text: 'La compra ha sido verificada!',
			icon: 'success',
		});
	}
	moneyFormater(price) {
		var num = price;
		num = num
			.toString()
			.split('')
			.reverse()
			.join('')
			.replace(/(?=\d*\.?)(\d{3})/g, '$1.');
		num = num.split('').reverse().join('').replace(/^[\.]/, '');
		return num;
	}
	render() {
		if (this.state.messages) {
			this.allMessages = this.state.messages.map((msg, i) => {
				const type = !msg.send ? 'out' : 'in';
				const cn0 = 'chat-wrap-' + type;
				const cn1 = 'chat-msg-' + type;
				setTimeout(() => {
					this.messagesEndRef.current.scrollIntoView({ block: 'end' });
				}, 50);
				// document.getElementsByClassName('msg').scrollTop = (msg.message).offsetHeight + (msg.message).offsetTop;
				return (
					<>
						<div key={i} className={cn0}>
							<div className={cn1}>
								{msg.message}
								<span className="hours">
									{msg.created_at.split(' ')[1].split('.')[0]}
								</span>
							</div>
						</div>
					</>
				);
			});
		} else {
			this.allMessages = '';
		}
		// console.log("mensjae",this.state.messages)
		// console.log("parseado",this.state.dataguide)

		this.showInfo = this.state.dataguide
			.sort((a, b) =>
				a['@diffgr:id'] < b['@diffgr:id'] ? 1 : a['@diffgr:id'] > b['@diffgr:id'] ? -1 : 0
			)
			.map((data, index) => {
				return (
					<div className="containerStepGuide">
						{/* <div className="countStep">
                              <span>{index+1}</span>
                            </div> */}
						<span className="descriptStep">
							<b>
								{' '}
								{/* {index + 1}- {data.DescripcionEstado} */}
								{data.DescripcionEstado}
							</b>{' '}
							<br /> {data.ubicacion}
						</span>
						<Moment className="formatDateTime" format="LLLL" locale="es-mx">
							{data.fecha_hora}
						</Moment>
					</div>
				);
			});

		// console.log(this.state.dataguide)
		// function dataTest(data){

		//   data.map((test)=>{
		//     return(
		//           <div>{test.DescripcionEstado}</div>
		//           )
		//         })

		// }
		// console.log(window.document.getElementsByClassName("containerChat"))

		return (
			<>
				<Nav
					jwt={this.props.data.jwt}
					user={this.props.data.name}
					authenticated={this.props.data.authenticated}
				/>
				<div className="newContainer">
					<div className="containerChat">
						<div className="breadcrumChat">
							Compras{' '}
							<FontAwesomeIcon
								icon={faChevronRight}
								style={{ color: '#CF0A2C', padding: '0px 5px 0px 5px' }}
							/>{' '}
							Detalles de compra{' '}
							<FontAwesomeIcon
								icon={faChevronRight}
								style={{ color: '#CF0A2C', padding: '0px 5px 0px 5px' }}
							/>{' '}
							Compra # {this.state.order}
						</div>

						<div className="chat-wrap">
							<h5>{this.props.data.name + ' ' + this.props.data.LastName} </h5>
							{/* <AutoScroll> */}
							<div className="msg">
								{this.allMessages}
								<div
									className="holasi"
									ref={this.messagesEndRef}
									style={{ height: 5 }}
								></div>
							</div>
							{/* </AutoScroll> */}
							<div className="chat-input">
								<input
									type="text"
									value={this.state.value_message}
									onChange={({ target: { value } }) => this.setValue(value)}
									placeholder="Escribe un mensaje"
								/>
								<div className="chat-wrap-button">
									{/* <label htmlFor="file">
                      <FontAwesomeIcon icon={faPaperclip} />
                    </label> */}
									<button
										onClick={() => this.handleSubmit()}
										type="submit"
										style={{ zIndex: 9 }}
									>
										Enviar
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="infoContainer">
						<p className="helpChat">Necesito ayuda</p>
						<div className="dataUser dataUserResponsive" style={{ marginTop: 15 }}>
							<span>Vendedor</span>
							<div style={{ display: 'flex' }}>
								<div className="iconProfile">
									<FontAwesomeIcon icon={faUser} />
								</div>
								<div className="userData">
									<p>{this.state.storage.name ? this.state.storage.name : ''}</p>
									<p>{this.state.storage.phone ? this.state.storage.phone : ''}</p>
									<span className="detailsShop">Detalles de compra</span>
								</div>
							</div>
						</div>
						<div className="dataUser dataUserResponsiveV2" style={{ marginTop: 20 }}>
							<span>Entregado</span>
							<div style={{ display: 'flex' }}>
								<div className="iconProfile">
									<FontAwesomeIcon icon={faUser} />
								</div>
								<div className="userData productData">
									<p>
										{this.state.storage.productTitle
											? this.state.storage.productTitle
											: ''}
									</p>
									<p>
										${' '}
										{this.state.storage.productPrice
											? this.moneyFormater(this.state.storage.productPrice).replace(
													'.00',
													''
											  )
											: ''}
									</p>
									<span className="detailsShop" style={{ color: '#757575 !important' }}>
										{this.state.storage.productQuantity
											? this.state.storage.productQuantity
											: ''}{' '}
										unidad
									</span>
								</div>
							</div>
							<Accordion className="showGuide">
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<p className="guideState">Estado de la guía</p>
								</AccordionSummary>
								<AccordionDetails>
									{/* {dataTest(this.state.dataguide)} */}

									<div style={{ width: '100%' }}>{this.showInfo}</div>

									{/* <div dangerouslySetInnerHTML={ {__html: this.state.dataguide} } style={{margin:"auto"}}/> */}
								</AccordionDetails>
							</Accordion>
						</div>
					</div>
				</div>
				{/* <Footer/> */}
			</>
		);
	}
}

export default Chat;
