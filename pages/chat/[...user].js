import React from 'react';
import { Component } from "react";
import Head from 'next/head';
import Chat from "../../components/Common/Chat";
import '../sass/chat.css';
import { getChat } from '../../services/chatApi';
import { getFullName, getUserId, getJwt, redirectIfNotAuthenticated } from "../../lib/auth";
import favicon from "../../assets/img/favicon.svg";


function chat(precomp) {
    return (
        <div className="chat-page">
            <Head>
                <title>Kiero | Chat</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="robots" content="index,follow" />
                <meta name="robots" content="noodp" />
                <meta name="robots" content="noydir" />
                <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis a todo el pais, encuentra lo que buscas en Kiero.co" />
                <meta name="Keywords" content="Tienda en Línea" />
                <link rel="icon" href={favicon} type="image/png" />
            </Head>
            <Chat data={precomp} />
        </div>
    )
}


export async function getServerSideProps(context) {

    if (redirectIfNotAuthenticated(context)) {
        return {};
    }
    let name = getFullName(context);
    let usr = getUserId(context);
    let user_id = context.params.user[0];
    let data = null;
    let chat_uid = null;
    let jwt = getJwt(context);

    if(user_id !== "" && user_id){
        const res = await getChat(user_id,jwt )
        data = await res.data
        if(data.data){
            chat_uid = data.u;
            data = data.data;
        }else{
            data = [];
        }
    
    }
    return { props: { messages:data, jwt, name, chat_uid, myID:usr, user_id} }
}

export default chat

