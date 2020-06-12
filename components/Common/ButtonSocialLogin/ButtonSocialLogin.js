import React, { Component } from 'react';
import "./ButtonSocialLogin.css";

class ButtonGoogle extends Component {
    render() {
        return (
            <button className="button buttonGoogle">
                <p>Registrate con Google</p>
            </button>
        )
    }
}

class ButtonFacebook extends Component {
    render() {
        return (
            <button className="button buttonFacebook">
                <p>Registrate con Facebook</p>
            </button>
        )
    }
}

export {ButtonGoogle, ButtonFacebook};