import React, {useState} from 'react';
import { useRouter } from 'next/router'
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import "../ForgotPass/ForgotPass.css";
import {resetPassword} from "../../services/userApi";
import './ResetPass.css';

function ResetPass({token}) {

   const router = useRouter();
   const [password, setPassword] = useState(); 
   const [error, setError] = useState(); 

   const handlePassword = e => {
    setPassword(e.target.value);
   };

   const handleSubmit = async e => {
       e.preventDefault();
       const rs = await resetPassword(password, token);
       if (rs !== 1) {
           setError(rs);
       } else {
           router.push('/login');
       }
   };

    return (
        <div className="container forgot-component">
        <Header/>
        <div className="forgot-pass">
            <h1>Nueva contraseña</h1>
            {
                error && <small>{error}</small>
            }
            <form className="form" onSubmit={handleSubmit}>
                <div className="forgot-pass-content">
                    <p className="forgot-pass-text">Ingrese la nueva contraseña</p>
                    <input className="input" type="password" value={password} onChange={handlePassword} placeholder="Contraseña"/>
                </div>
                <button type="submit" className="main-button button-recovery">
                    <p>Cambiar</p>
                </button>
            </form>
        </div>
        <Footer/>
    </div>
    );
}

export default ResetPass;