import React, { Component } from 'react';
import Link from "next/link";
import Modal from "../Common/Modal/Modal";
import Button from "../Common/Button/Button";
import Nav from "../Common/Nav/Nav";
import Footer from "../Common/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faListUl,
    faMoneyBillWave,
    faShoppingBag,
    faCog,
    faAngleRight,
    faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import "./UserAccount.css";
import "./UserAccountMovil.css";
import { getProductsBasic } from "../../services/productsApi";
import { completeData, deleteData, getData, getUserData } from "../../services/userApi";
import { signIn } from "../../lib/auth";
import Error from "../Login/Error";
import ProductCard from "../ProductCard";
import Select from "../Common/Select";


export default class UserAccount extends Component {

    constructor(props) {

        super(props);
        this.state = {
            userData: {},
            addresses: [],
            userName: this.props.user.email,
            accordionMyData: true,
            closeMyData: true,
            iconMyData: true,
            userAccountIconMyData: faAngleRight,
            modal1: false,
            modal2: false,
            error: undefined
        }

    }

    componentDidMount() {
        getUserData(this.props.user.jwt)
            .then((response) => {
                this.setState({ userData: response.data });
            });

        getData("/getAddresses", this.props.user.jwt)
            .then((response) => {
                console.log(response.data);
                this.setState({ addresses: response.data });
            });

    }

    accordionMyData = () => {
        this.setState({
            closeMyData: !this.state.closeMyData,
            iconMyData: !this.state.iconMyData
        });
        if (this.state.iconMyData === true) {
            this.setState({
                userAccountIconMyData: faAngleDown
            })
        } else if (this.state.iconMyData === false) {
            this.setState({
                userAccountIconMyData: faAngleRight
            })
        }
    }


    removeAddr = (addr_id, e) => {
        deleteData("/deleteAddress/" + addr_id, this.props.user.jwt);
        this.setState(prevState => ({
            addresses: prevState.addresses.filter(el => el.address_id !== addr_id)
        }));
    }

    toggleModal = (modal) => {
        const newState = { ...this.state };
        newState[`modal${modal}`] = !newState[`modal${modal}`] ? true : false;
        this.setState(newState);
    }

    savePhone = async e => {
        e.preventDefault();
        let phone = e.target.elements.phone.value;
        const error = await completeData({
            phone: phone,
        }, this.props.user.jwt);
        if (error) {
            this.setState({
                error: error
            });
            return false;
        } else {
            this.setState({ userData: { ...this.state.userData, phone: phone } });
            this.toggleModal(2);
        }
    };

    saveName = async e => {
        e.preventDefault();
        let name = e.target.elements.name.value;
        let last_name = e.target.elements.last_name.value;
        const error = await completeData({
            name: name,
            last_name: last_name
        }, this.props.user.jwt);
        if (error) {
            this.setState({
                error: error
            });
            return false;
        } else {
            this.setState({ userData: { ...this.state.userData, name: name } });
            this.setState({ userData: { ...this.state.userData, last_name: last_name } });
            this.toggleModal(3);
        }
    };

    saveDocument = async e => {
        e.preventDefault();
        let idn = e.target.elements.id_number.value;
        let dt = e.target.elements.document_type.value;
        const error = await completeData({
            id_number: idn,
            document_type: dt
        }, this.props.user.jwt)
        if (error) {
            this.setState({
                error: error
            });
            return false;
        } else {
            this.setState({ userData: { ...this.state.userData, id_number: idn } })
            this.setState({ userData: { ...this.state.userData, document_type: dt } })
            this.toggleModal(1);
        }
    };


    render() {
        const { error } = this.state;

        const addressList = this.state.addresses.map((addr, i) => {
            return <h5 key={i}>Dirección: <span className='strong'>{addr.address} / {addr.neighborhood} - {addr.city}</span>
                <div className="button-delete" onClick={(e) => { this.removeAddr(addr.address_id, e); }}>
                    <p className="modal-btn">Eliminar</p>
                </div> </h5>
        });

        let dt_text = "";
        switch (String(this.state.userData.document_type)) {
            case "1":
                dt_text = "CC.";
                break;
            case "2":
                dt_text = "CE.";
                break;
            case "3":
                dt_text = "TI.";
                break;
            case "4":
                dt_text = "PS.";
                break;
            case "9":
                dt_text = "OTRO.";
                break;
        }

        const content1 = (
            <>
                <form className="form modal-dni" onSubmit={this.saveDocument}>
                    <div className="header-modal">
                        <h3>Agregar documento</h3>
                        <label>
                            <p>Tipo de documento</p>
                            <Select name={"document_type"} >
                                <option value={"1"}>Cedula de Cudadanía</option>
                                <option value={"2"}>Cédula de extranjería</option>
                                <option value={"3"}>Tarjeta de Identidad</option>
                                <option value={"4"}>Pasaporte</option>
                                <option value={"9"}>Otro</option>
                            </Select>
                        </label>
                        <label>
                            <p>Número de documento</p>
                            <input name="id_number" placeholder="Número" />
                        </label>
                        <div className="modal-actions">
                            <div className="save-btn">
                                <button type="submit" className="main-button">
                                    <p>Agregar</p>
                                </button>

                            </div>
                            <div className="cancel-btn" style={{ border: 'none' }} onClick={() => { this.toggleModal(1); }}>
                                <p>
                                    Cancelar
                                </p>
                            </div>
                        </div>
                        {error && error !== "" && <Error message={error} />}
                    </div>
                </form>
            </>
        );
        const content2 = (
            <>
                <form className="form" onSubmit={this.savePhone}>
                    <div className="header-modal">
                        <h3>Agregar teléfono</h3>
                        <label>
                            <input name="phone" placeholder="Teléfono" />
                        </label>
                        <div className="modal-actions">
                            <div className="save-btn">
                                <button type="submit" className="main-button">
                                    <p>Agregar</p>
                                </button>
                            </div>
                            <div className="cancel-btn" onClick={() => { this.toggleModal(2); }}>
                                <p>
                                    Cancelar
                                </p>
                            </div>
                        </div>
                        {error && error !== "" && <Error message={error} />}
                    </div>
                </form>
            </>
        );
        const content3 = (
            <>
                <form className="form" onSubmit={this.saveName}>
                    <div className="header-modal">
                        <h3>Modificar nombre y apellido</h3>
                        <label>
                            <span>Nombre</span>
                            <input name="name" placeholder={this.state.userData.name} />
                        </label>
                        <label>
                            <span>Apellido</span>
                            <input name="last_name" placeholder={this.state.userData.last_name} />
                        </label>
                        <div className="modal-actions">
                            <div className="save-btn">
                                <button type="submit" className="main-button">
                                    <p>Modificar</p>
                                </button>
                            </div>
                            <div className="cancel-btn" onClick={() => { this.toggleModal(3); }}>
                                <p>
                                    Cancelar
                                </p>
                            </div>
                        </div>
                        {error && error !== "" && <Error message={error} />}
                    </div>
                </form>
            </>
        );
        return (
            <div className="user-account">
                <div className="user-container" >
                    <div className="user-account-content" >
                        <h2>Mis Datos</h2>
                        <div className="user-acount-info" >
                            <div className="user-acount-info-title">
                                <h3>Cuenta</h3>
                                <div className="">
                                    <Link href="/ayuda">
                                        <a>
                                            <p>Ayuda</p>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="user-accunt-info-box">
                                
                                <div className="user-accunt-info-tab edit">
                                    <p>Usuario</p>
                                    <Link href="/cambio_usuario">
                                        <a>
                                            <p>{this.state.userData.email}</p>
                                            <p className="user-accunt-info-box-icon">
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </p>
                                        </a>
                                    </Link>

                                </div>

                                <div className="user-accunt-info-tab edit">
                                    <p>Correo</p>
                                    <Link href="/cambiar_correo">
                                        <a>
                                            <p className="inline">{this.state.userData.email}</p>
                                            <p className="user-accunt-info-box-icon">
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </p>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="user-acount-info" >
                            <div className="user-acount-info-title">
                                <h3>Datos personales</h3>
                                <div className="">
                                    <Link href="/ayuda">
                                        <a>
                                            <p>Ayuda</p>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="user-accunt-info-box">
                                <div className="user-accunt-info-tab edit">
                                    <p>Nombre y apellido</p>
                                    <div className="user-accunt-name">
                                    {this.state.modal3 && (<Modal toggle={this.toggleModal} num="3" content={content3} button />)}
                                    <a onClick={() => { this.toggleModal(3); }}>
                                        <p className="inline">{this.state.userData.name + " " + this.state.userData.last_name}</p>
                                        <p className="user-accunt-info-box-icon">
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </p>
                                    </a>
                                    </div>
                                </div>
                                <div className="user-accunt-info-tab">
                                    <p>Documento</p>
                                    <div className="user-accunt-document">
                                        {this.state.modal1 ? (<Modal toggle={this.toggleModal} num="1" content={content1} button />) : null}
                                        {
                                            this.state.userData.id_number ?
                                                <div onClick={() => { this.toggleModal(1); }}>
                                                    <p className="inline">{dt_text + " " + this.state.userData.id_number}</p><p className="modal-btn">Cambiar</p>
                                                </div>

                                                :
                                                <div onClick={() => { this.toggleModal(1); }}>
                                                    <p className="modal-btn">Agregar</p>
                                                </div>
                                        }
                                    </div>
                                </div>
                                <div className="user-accunt-info-tab">
                                    <p>Teléfono</p>
                                    <div className="user-accunt-phone">
                                        {this.state.modal2 ? (<Modal toggle={this.toggleModal} num="2" content={content2} button />) : null}
                                        {
                                            this.state.userData.phone ?
                                                <div onClick={() => { this.toggleModal(2); }}>
                                                    <p className="inline">{this.state.userData.phone}</p><p className="modal-btn">Cambiar</p>
                                                </div>
                                                :
                                                <div onClick={() => { this.toggleModal(2); }}>
                                                    <p className="modal-btn">Agregar</p>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="user-acount-info" >
                            <div className="user-acount-info-title">
                                <h3>Tarjetas</h3>
                            </div>
                            <div className="user-accunt-info-box">
                                <div className="user-accunt-info-tab">
                                    <p>Aún no tienen ninguna tarjeta de crédito.</p>
                                    <div>
                                        <p className="modal-btn">Agregar</p>
                                    </div>
                                </div>
                            </div>
                                    </div>*/}
                        <div className="user-acount-info" >
                            <div className="user-acount-info-title">
                                <h3>Domicilios</h3>
                                <div className="">
                                    <Link href="/ayuda">
                                        <a>
                                            <p>Ayuda</p>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="user-accunt-info-box">
                                {this.state.addresses.length > 0 ?
                                    <div className="user-accunt-info-tab user-accunt-info-address with-addres">
                                        {addressList}
                                        <Link href="/agregar_direccion">
                                            <a className="button-add">
                                                <p className="modal-btn">Agregar nueva direccion</p>
                                            </a>
                                        </Link>
                                    </div>
                                    :
                                    <Link href="/agregar_direccion">
                                        <a>
                                            <div className="user-accunt-info-tab user-accunt-info-address">
                                                <p>No tienes ninguno <strong>¡Agregalo!</strong>.
                                                        </p>
                                                <p className="user-accunt-info-box-icon">
                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                </p>
                                            </div>
                                        </a>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}