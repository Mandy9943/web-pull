import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Button from "../../Common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import "./CancelAccount.css";
import cookie from 'js-cookie';
import {anulateAccount} from '../../../services/userApi';


const Checkbox = props => (
    <input type="checkbox" {...props} />
)

export default class CancelAccount extends Component {
    state = {
        checkedProduct: false,
        checkedAdvisory: false,
        checkePrice: false,
        recommendations:"",
        error:null
    }
    handleCheckboxChange = event => {
        this.setState({
            [event.target.name]: event.target.checked,
        })
    }

    goBack = () => {
        window.history.back();
    };

    handleAnulate = () => {
        let motives = this.getMotives();
        let recommendations = this.state.recommendations;

        let rs = anulateAccount({motives, recommendations},cookie.get("jwt"));
        if(rs!==true)
        {
            this.setState({error: rs});
        }
        else{
            cookie.remove("jwt");
            document.location = "/";
        }
    };

    getMotives = () => {
      let results = [];
      if(this.state.checkedProduct){
          results.push("No tienen el producto que busco");
      }  
      if(this.state.checkedAdvisory){
        results.push("No recibí la asesoría que esperaba");
    }  
    if(this.state.checkedProduct){
        results.push("Productos muy caros");
    }  
    return results.join(', ');

    };

    render() {
        return (
            <div className="cancel-account">
                <Header />
                    <div className="cancel-account-top">
                        <div className="cancel-account-bar">
                            <div className="back-btn">
                                  <a onClick={this.goBack} style={{cursor:'pointer'}}>
                                        <p className="back-btn-icon">
                                            <FontAwesomeIcon icon={faAngleLeft} />
                                        </p>
                                        <p>Volver</p>
                                    </a>
                            </div>
                            <h1>Anular cuenta</h1>
                        </div>
                    </div>
                    <div className="cancel-account-content">
                        <div className="cancel-account-box">
                            <h3>¿Cuál es el motivo?</h3>
                            <p>Usaremos esta información para mejorar nuestro servicio.</p>
                            <div className="cancel-account-checkbox">
                                <label>
                                    <Checkbox
                                        name={'checkedProduct'}
                                        checkedProduct={this.state.checkedProduct}
                                        onChange={this.handleCheckboxChange}
                                    />
                                    <p>No tienen el producto que busco</p>
                                </label>
                                <label>
                                    <Checkbox
                                        name={'checkedAdvisory'}
                                        checkedAdvisory={this.state.checkedAdvisory}
                                        onChange={this.handleCheckboxChange}
                                    />
                                    <p>No recibí la asesoría que esperaba</p>
                                </label>
                                <label>
                                    <Checkbox
                                        name={'checkePrice'}
                                        checkePrice={this.state.checkePrice}
                                        onChange={this.handleCheckboxChange}
                                    />
                                    <p>Productos muy caros</p>
                                </label>
                            </div>
                            <div className="cancel-account-textarea">
                                <p>¿Alguna recomendación?</p>
                                <textarea value={this.state.recommendations} onChange={e=>this.setState({recommendations:e.target.value})}/>
                            </div>
                            <div className="cancel-account-box-btn">
                                <Button text={"Confirmar"} onClick={this.handleAnulate}/>
                            </div>
                            {this.state.error}
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}
