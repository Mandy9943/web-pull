import React from 'react';
import Link from "next/link";
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import "../../Common/Button/Button.css";
import "./AddAddress.css";
import { savePrivateData } from "../../../services/userApi";
import redirect from "../../../lib/redirect";
import Error from "../../Login/Error";

export default class addAddress extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    newAddress = async e => {
        e.preventDefault();
        const error = await savePrivateData("/newAddress",{
            names: e.target.elements.names.value,
            department: e.target.elements.department.value,
            city: e.target.elements.city.value,
            neighborhood: e.target.elements.neighborhood.value,
            address: e.target.elements.address.value,
            phone: e.target.elements.phone.value,
            description: e.target.elements.description.value
        }, this.props.jwt);

        if (error) {
            this.setState({
                error: error
            });
            return false;
        }else{
            if(!this.props.cancel){
                redirect("/cuenta");
            }else{
                this.props.save();
            }
        }
    };

    cancelHandler = () => {
        
        if(!this.props.cancel){
            redirect("/cuenta");
        }else{
            this.props.cancel();
        }

    }

    render(){
        const { error } = this.state;
        return (
            <div className={!this.props.noheader && "add-addess"}>
                {!this.props.noheader && <Header />}
                <div className="add-adress-container">
                    <h2>Agregar domicilio</h2>
                    <div className="add-address-box">
                        <form onSubmit={this.newAddress}>
                            <label>
                                <p>
                                    Nombre y apellido
                                </p>
                                <input name={"names"} />
                            </label>
                            <div className="add-address-input">
                                <label>
                                    <p>
                                        Departamento
                                    </p>
                                    <input name={"department"} />
                                </label>
                                <label>
                                    <p>
                                        Ciudad
                                    </p>
                                    <input name={"city"} />
                                </label>
                            </div>
                            <label>
                                <p>
                                    Barrio
                                </p>
                                <input name={"neighborhood"}/>
                            </label>
                            <label>
                                <p>
                                    Dirección
                                </p>
                                <input name={"address"}/>
                            </label>
                            <label>
                                <p>
                                    Teléfono
                                </p>
                                <input name={"phone"} />
                            </label>
                            <label>
                                <p>
                                    Descripción de la dirección
                                </p>
                                <input name={"description"}/>
                            </label>

                            <div className="add-address-actions">
                                <div className="save-btn">
                                    <button type="submit" className="main-button">
                                        <p>Guardar</p>
                                    </button>
                                </div>
                                <div className="cancel-btn">
                                    
                                        <a>
                                            <p onClick={ this.cancelHandler }>
                                                Cancelar
                                            </p>
                                        </a>
                                    
                                </div>
                            </div>
                        </form>
                        {error && error!=="" && <Error message={error} />}
                    </div>
                </div>
                {!this.props.noheader && <Footer />}
            </div>
        )
    }

}
