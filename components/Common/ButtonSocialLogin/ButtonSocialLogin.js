import React, { Component } from 'react';
import "./ButtonSocialLogin.css";
import gg from "../../../assets/img/iconos/google.svg";
import fb from "../../../assets/img/iconos/facebook.svg";


class ButtonGoogle extends Component {
    render() {
        return (
            <button className="button buttonGoogle">
              <img src={gg}/>  <p>Registrate con Google</p>
            </button>
        )
    }
}

class ButtonFacebook extends Component {
    render() {
        return (
            <button className="button buttonFacebook">
               <img src={fb}/> <p>Registrate con Facebook</p>
            </button>
        )
    }
}

export {ButtonGoogle, ButtonFacebook};