import React from 'react';
import Head from 'next/head';
import ResetPass from "../../components/ResetPass";
import '../sass/ForgotPass.css';
import favicon from "../../assets/img/favicon.svg";

function ResetPassword({token}) {

    return (
        <div className="forgot-page">
        <Head>
            <title>Kiero | Nueva Contraseña</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="robots" content="index,follow" />
            <meta name="robots" content="noodp" />
            <meta name="robots" content="noydir" />
            <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis
            a todo el pais, encuentra lo que buscas en Kiero.co" />
            <link rel="icon" href={favicon} type="image/png" />
        </Head>
        <ResetPass token={token} />
    </div>
    );
}

export async function getServerSideProps(ctx){
    let token = ctx.params.token[0];
    return {
        props: { token } 
    };
}

export default ResetPassword;



