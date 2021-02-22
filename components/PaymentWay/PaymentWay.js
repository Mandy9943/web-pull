import React, { Component } from "react";
import CardImg from "../../assets/img/default.webp";
import PayEfecty from "../../assets/img/pay-cash-efecty.png";
import PayBaloto from "../../assets/img/pay-cash-baloto.png";
import PaySured from "../../assets/img/pay-cash-sured.png";
import Button from "../Common/Button/Button";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer";
import Select from "../Common/Select";
import "./PaymentWay.css";
import "./PaymentWayMovil.css";
import { getData, makePayment, makePaymentCC, makePaymentCash } from "../../services/userApi"
import Modal from "../Common/Modal";
import AddAddress from "../UserAccount/AddAddress"
import { validatePayCC, validatePaymentPSE } from "../../lib/validation"
import { priceFormat } from "../../lib/config"
import Error from "../Login/Error";
import InputTip from "../InputTip"
import PaymentLoading from '../PaymentLoading';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import PaymentCash from '../PaymentCash';
import PaymentCashResult from '../PaymentCashResult';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from 'moment';


export default class PaymentWay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productQuantity: this.props.cantidad,
            closeCredit: true,
            closeCash: true,
            closeTransfer: true,
            banks: [],
            addresses: [],
            modal: false,
            modalAddr: false,
            selectedAddr: -1,
            auxAddr: 0,
            addrLoaded: false,
            error: null,
            cc_error: null,
            pse_error: null,
            tips: {},
            ccv: '',
            expiration_date: '',
            focus: '',
            card_holder: '',
            card_number: '',
            card_max_length: 16,
            card_type: 'invalid',
            paymentLoading: false,
            paymentError: false,
            paymentCash: false,
            paymentCashType: 1,
            paymentCashResult: false,
            paymentCashDocument: '',
            modalValidate: false,
        }
        this.addrRef = React.createRef();

    }

    componentDidMount() {
        this.loadBanks();
        this.loadAddresses();
        
    }


    loadBanks() {
        getData("/getPseBanks")
            .then((response) => {
                this.setState({ banks: (response.data.banks ? response.data.banks : []) });
            });
    }


    loadAddresses = () => {
        console.log("load addresses");
        console.log(this.props);
        getData("/getAddresses", this.props.user.jwt)
            .then((response) => {
                this.setState({ addresses: response.data, addrLoaded: true,modalAddr: false, modal: false });
            });
        
    }

    accordionCredit = () => {
        this.setState({
            closeCredit: !this.state.closeCredit,
            closeCash: true,
            closeTransfer: true,
        });
    }

    accordionCash = () => {
        this.setState({
            closeCash: !this.state.closeCash,
            closeCredit: true,
            closeTransfer: true,
        });
    }
    accordionTransfer = () => {
        this.setState({
            closeTransfer: !this.state.closeTransfer,
            closeCash: true,
            closeCredit: true,            
        });
    }

    openAddrsModal = () => {
        this.setState({
            modalAddr: true
        });
    }


    setAddr = () => {
        const x = this.state.auxAddr;
        if(x!=="-1" && x!==0){
            this.setState({ modalAddr: false });
            this.setState({ selectedAddr: x });
        }   
        else{
            alert('Seleccione una dirección')
        }
    }


    tmpChangeAddr = (e) => {
        this.setState({ auxAddr: e.target.value });
    }


    payPSE = async e => {
        e.preventDefault();

        if (this.state.selectedAddr == -1) {
            this.setState({ modalValidate: true });
            return false;
        }

        const result = await makePayment({
            product_id: this.props.data.product_id,
            address_id: this.state.addresses[this.state.selectedAddr].address_id,
            names: e.target.elements.names.value,
            email: e.target.elements.email.value,
            phone: e.target.elements.phone.value,
            person_type: e.target.elements.person_type.value,
            document_type: e.target.elements.document_type.value,
            document_number: e.target.elements.document_number.value,
            bank_id: e.target.elements.bank_id.value,
        }, this.props.user.jwt);
        if (result.data) {
            window.location = result.data.URL;
        } else {
            this.setState({
                error: result.error
            });
        }

    };


    payCC = async e => {
        e.preventDefault();

        this.setState({cc_error: null});
	const actualSize = e.target.elements.card_number.value.length;
	var tips = {};
	if(this.state.card_type == "invalid"){
		tips.card_number == "El numero de tarjeta ingresado no es valido";
	}
        const ccPayload = {

            product_id: this.props.data.product_id,
            device_session_id: this.props.user.dsi.dsi,
            document_type: e.target.elements.document_type.value,
            document_number: e.target.elements.document_number.value.split(" ").join("").split(".").join(""),
            card_type: this.state.card_type,
            card_number: e.target.elements.card_number.value.split(" ").join(""),
            ccv: e.target.elements.ccv.value,
            expiration_date: "20"+e.target.elements.expiration_date.value,
            card_holder: e.target.elements.card_holder.value,
            monthly_fees: e.target.elements.monthly_fees.value
        };

        const validated = Object.assign(tips, validatePayCC(ccPayload));
        if(Object.values(validated).length == 0){

            if (this.state.selectedAddr == -1) {
                this.setState({ modalValidate: true });
                return false;
            }

            ccPayload.address_id = this.state.addresses[this.state.selectedAddr].address_id;
            this.setState({paymentLoading:true});
           const rs = await makePaymentCC(ccPayload, this.props.user.jwt);
            
            if (rs.data) {
                window.location = "/pay_result/"+rs.data.id;
            } else {
                this.setState({
                    paymentLoading: false,
                    error: rs.error,
                    paymentError: true
                });
            }
        }else{

            this.setState({
                tips: validated
            });
        }

    };

    payCash = async e => {
        e.preventDefault();
        const cashPayload = {
            product_id: this.props.data.product_id,
            full_name: e.target.elements.cash_form_name.value,
            email: e.target.elements.cash_form_email.value,
            phone_number: e.target.elements.cash_form_number.value,     
            paymentMethod: this.getPaymentType()
        }
        if(cashPayload.email && cashPayload.full_name && cashPayload.phone_number){
            cashPayload.address_id = this.state.addresses[this.state.selectedAddr].address_id;     
           
            const rs = await makePaymentCash(cashPayload, this.props.user.jwt);
            if (rs.data) {
                console.log(rs.data);
                this.setState({paymentCashResult: true, paymentCash: false, paymentCashDocument: rs.data.result.pdf});
            } else {
                console.log(rs);
            }          
        }
        else
        {
            alert('Complete todos los campos');
        }
    }

    openPaymentCash = (type) => {
        if (this.state.selectedAddr == -1) {
            this.setState({ modalAddr: true });
            return false;
        }
        else{
            this.setState({paymentCash: true, paymentCashType: type})
        }
    };

    exitccv = (e) => {
        this.setState({ focus: "" });
    }
    
    handleInputFocus = (e) => {
        let name = "";
        if (e.target.name != 'ccv'){
            name = e.target.name;
        }else{
            name = 'cvc';
        }
        this.setState({ focus: name });
    }
      
      handleInputChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
      }

      handleDateTimeChange = (e) => {
        let value = moment(e).format('YY/MM');
        this.setState({ expiration_date: value });
    };

      card_change = (type, valid) => {

        this.setState({card_max_length: type.maxLength});
        if(!valid){
            this.setState({card_type: "invalid"});
        }

      }

      getPaymentType = () => {
        if(this.state.paymentCashType===1){
            return 'EFECTY';
        }
        if(this.state.paymentCashType===2){
            return 'BALOTO';
        }
        if(this.state.paymentCashType===3){
            return 'SURED';
        }
      };

    render() {
        const addAddressContent = <AddAddress jwt={this.props.user.jwt} save={this.loadAddresses} cancel={() => this.setState({ modal: false, modalAddr: false })} noheader="1" />;

        const addressListContent = <>
            <Select onChange={this.tmpChangeAddr} >
                <option value="-1">Seleccione una dirección existente</option>
                {this.state.addresses.map((addr, i) => {
                    return <option key={i} value={i}>{addr.address}</option>
                })}
            </Select>
            <Button onClick={this.setAddr} text={"Aceptar"} />

            <Button onClick={() => this.setState({ modal: 1, modalAddr: false })} text={"Agregar dirección"} />
            
        </>;

        const modalValidatePay = <>
         <p style={{width: '80%',margin: '0 auto', textAlign: 'center', marginBottom: '2em'}}>{'Para realizar el pago debes completar el formulario. Por favor introduce tu dirección de domicilio.'}</p>

         <Button onClick={() => this.setState({ modal: 1, modalAddr: false, modalValidate: false })} text={"Agregar dirección"} />
        </>;

        const docType = <> <option value={"CC"}>Cédula de ciudadanía </option>
            <option value={"CE"}>Cédula de extranjería </option>
            <option value={"NIT"}> NIT </option>
            {/* <option value={"TI"}>Tarjeta de Identidad </option> */}
            <option value={"PP"}>Pasaporte </option>
            <option value={"DE"}>Documento de identificación extranjero </option>
        </>

        let months_fees = []
	let i = 0;
        for (i=1; i<32; i++){
            months_fees.push(<option value={i}>{i}</option>)
        }

        const totalPrice = priceFormat(parseFloat(this.props.data.price) * this.state.productQuantity);
     
        return (
            <div className="payment-way">

                <script type="text/javascript" src={"https://maf.pagosonline.net/ws/fp/tags.js?id="+this.props.user.dsi.dsi+this.props.user.dsi.ui}></script>
                <noscript>
                    <iframe style={{"width": "100px", "height": "100px", "border": "0", "position": "absolute", "top": "-5000px"}} src={"https://maf.pagosonline.net/ws/fp/tags.js?id="+this.props.user.dsi.dsi+this.props.user.dsi.ui}></iframe>
                </noscript>

                {this.state.modal ? (
                    <Modal toggle={() => this.setState({ modal: false })} content={addAddressContent} button />
                ) : null}

                {this.state.modalAddr ? (
                    <Modal toggle={() => this.setState({ modalAddr: false })} content={addressListContent} button />
                ) : null}

                {this.state.paymentCash ? (
                    <Modal toggle={() => this.setState({ paymentCash: false })} content={<PaymentCash onSubmit={this.payCash} />} button />
                ) : null}
                {
                    this.state.modalValidate ? (
                        <Modal toggle={() => this.setState({ modalValidate: false })} content={modalValidatePay} button />
                    ): null
                }
                <Header />

                {
                    this.state.paymentLoading ? <PaymentLoading error={this.state.paymentError} back={()=>this.setState({paymentLoading: false})} /> :
                    <div className="container-payment-way">
                    <div className="product-description payment-way-box only-movil">
                        <img src={this.props.data.images.length > 0 ? this.props.data.images[0].url : 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png'} />
                        <div className="content-product-description">
                            <p>{this.props.data.title}</p>
                            <p className="quantity">Cantidad: {this.state.productQuantity}</p>
                            <h3>Total: $ {totalPrice}</h3>
                        </div>
                    </div>
                    <h2>Elige la forma de pago</h2>




                    <div className="content-payment-way">
                        <div className="way-to-pay">
                            <div className="credit payment-way-box" onClick={() => this.accordionCredit()}>
                                <p>Crédito</p>
                            </div>
                            <div className={this.state.closeCredit ? "accordion-payment-way" : "accordion-payment-way active"}>
                                <div className="content-accordion">
                                <Cards
                                        cvc={this.state.ccv}
                                        expiry={this.state.expiration_date}
                                        focused={this.state.focus}
                                        name={this.state.card_holder}
                                        number={this.state.card_number}

                                        callback={this.card_change}
                                        placeholders="TU NOMBRE"
                                        
                                        />
                                    <form id="form-credit" onSubmit={this.payCC}>

                                        <input
                                            type="tel"
                                            name="card_number"
                                            placeholder="Numero de tarjeta."
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                            maxLength={this.state.card_max_length}
                                            
                                        />

                                        <InputTip msg={this.state.tips.card_number}/>

                                        <input maxLength={64} name={"card_holder"} onChange={this.handleInputChange} onFocus={this.handleInputFocus}  placeholder="Nombre y apellido impreso *" />
                                        <InputTip msg={this.state.tips.card_holder}/>
                                        <div className="input-form">
                                            <Datetime onChange={this.handleDateTimeChange} value={this.state.expiration_date} placeholder="AA/MM" dateFormat="YY/MM" timeFormat={false}/>
                                            <input  maxLength={4} onChange={this.handleInputChange} onFocus={this.handleInputFocus} onBlur={this.exitccv} name={"ccv"} placeholder="CVV" />
                                        </div>

                                        <div className="input-form">
                                            <InputTip msg={this.state.tips.expiration_date}/>
                                            <InputTip msg={this.state.tips.ccv}/>
                                        </div>

                                        
                                            Coutas:  
                                            <div className={"content-accordion-form"}>                                           
                                                <Select name={"monthly_fees"}>
                                                    {months_fees}
                                                </Select>
                                            </div>   
                                        

                                        <div className="input-form">
                                            <InputTip msg={this.state.tips.monthly_fees}/>
                                        </div>



                                        <div className={"content-accordion-form"}>
                                        <Select name={"document_type"}>
                                            {docType}
                                        </Select>
                                            <InputTip msg={this.state.tips.document_type}/></div>
                                        <input name={"document_number"} placeholder="Número de documento" />
                                        <InputTip msg={this.state.tips.document_number}/>
                                    </form>

                                </div>
                                        <button type="submit" form="form-credit" className="button-continue main-button">
                                            <p>Pagar</p>
                                        </button>

                                {this.state.cc_error && <Error message={this.state.cc_error} />}

                            </div>

                            <div className="cash payment-way-box" onClick={() => this.accordionCash()}>
                                <p>Efectivo</p>
                            </div>
                            <div className={this.state.closeCash ? "accordion-payment-way" : "accordion-payment-way active"}>
                               {
                                   !this.state.paymentCashResult ?
                                    <div className="payment-cash-logos">
                                        <div>
                                            <img alt="pago en linea" src={PayEfecty} onClick={()=>this.openPaymentCash(1)} />
                                            <img alt="pago en linea" src={PayBaloto} onClick={()=>this.openPaymentCash(2)} />
                                            <img alt="pago en linea" src={PaySured} onClick={()=>this.openPaymentCash(3)} />
                                        </div>
                                    </div>: <PaymentCashResult 
                                                type={this.state.paymentCashType} 
                                                amount={totalPrice}
                                                document={this.state.paymentCashDocument} />
                               } 
                            </div>

                            <div className="transfer payment-way-box" onClick={() => this.accordionTransfer()}>
                                <p>Transferencia desde PSE</p>
                            </div>

                            <form onSubmit={this.payPSE}>

                                <div className={this.state.closeTransfer ? "accordion-payment-way" : "accordion-payment-way active"}>
                                    <div className="content-accordion">

                                        <div className="content-accordion-form">

                                            <label>
                                                <p>Datos de titular</p>
                                                <input name={"names"} placeholder="Nombre completo *" />
                                                <input name={"email"} placeholder="Email *" />
                                                <input name={"phone"} placeholder="Teléfono *" />
                                            </label>
                                            <label>
                                                <p>Banco</p>
                                                <Select name={"bank_id"}>

                                                    {this.state.banks.map((bank, i) => {
                                                        return <option key={i} value={bank.pseCode}> {bank.description} </option>
                                                    })}

                                                </Select>
                                            </label>
                                            <label>
                                                <p>Tipo de persona</p>

                                                <Select name={"person_type"}>

                                                    <option value={"N"}>Natural</option>
                                                    <option value={"J"}>Juridica</option>

                                                </Select>
                                            </label>

                                        </div>
                                        <div className="content-accordion-form">

                                            <label>
                                                <p>Documento de identificación</p>

                                                <Select name={"document_type"}>
                                                    {docType}
                                                </Select>

                                                <input name={"document_number"} placeholder="Número documento" />
                                            </label>

                                            <button type="submit" className="button-continue main-button">
                                                <p>Continuar con la compra</p>
                                            </button>

                                        </div>
                                        {this.state.error && <Error message={this.state.error} />}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="payment-data">
                            <div className="product-description payment-way-box only-desktop">
                                <img src={this.props.data.images.length > 0 ? this.props.data.images[0].url : 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png'} />
                                <div className="content-product-description">
                                    <p>{this.props.data.title}</p>
                                    <p className="quantity">Cantidad: {this.state.productQuantity}</p>
                                    <h3>$ {totalPrice}</h3>
                                </div>
                            </div>

                            <div className="shipping-address payment-way-box">

                                {
                                    (this.state.addrLoaded && this.state.addresses.length == 0) &&
                                    <>
                                        <h3>No tienes direcciones registradas.</h3>
                                        <Button onClick={() => this.setState({ modal: 1 })} text={"Agregar dirección"} />
                                    </>
                                }

                                {this.state.selectedAddr > -1 ?

                                        <>
                                            <p>{this.state.addresses[this.state.selectedAddr].description}</p>
                                            <h3>Dirección de envío</h3>
                                            <p>Dirección: {this.state.addresses[this.state.selectedAddr].address}</p>
                                            <p>Barrio:{this.state.addresses[this.state.selectedAddr].neighborhood}</p>
                                            <p>Departamento:{this.state.addresses[this.state.selectedAddr].department}</p>
                                            <p>Ciudad:{this.state.addresses[this.state.selectedAddr].city}</p>


                                            <Button onClick={this.openAddrsModal} text={"Cambiar dirección"} />
                                        </>
                                        :
                                        <><Button onClick={this.openAddrsModal} text={"Seleccione una dirección"} /></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                }      
                <Footer />
            </div>
        )
    }
}
