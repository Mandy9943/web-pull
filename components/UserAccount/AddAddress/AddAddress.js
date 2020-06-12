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
            redirect("/cuenta");
        }
    };

    render(){
        const { error } = this.state;
        return (
            <div className="add-addess">
                <Header />
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
                                    <Link href="/cuenta">
                                        <a>
                                            <p onClick={() => redirect("/cuenta")}>
                                                Cancelar
                                            </p>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </form>
                        {error && error!=="" && <Error message={error} />}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}
