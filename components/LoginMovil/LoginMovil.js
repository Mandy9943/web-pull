import React, { Component } from "react";
import "./LoginMovil.css";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Link from "next/link";

class loginMovil extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let u_data = this.props.user_data
    let authenticated = this.props.authenticated
    
    return (
      <>
      {!authenticated &&
        <section className="login-home-movil no-web">
          <h5>Crea tu cuenta y descrubre los mejores productos</h5>
            <Link href="/registro"><a className="main-button"><p>Registrarse</p></a></Link>
            <Link href="/login"><a>Ya tienes cuenta? <span>Iniciar sesión</span></a></Link>
        </section>
      }
        </>
    );
  }
}

export default loginMovil;
