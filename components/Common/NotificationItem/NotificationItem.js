import React, { Component } from 'react';
import Link from "next/link";
import "./NotificationItem.css";


export default class NotificationItem extends Component {

    render() {

    let name="vendedor@gmail.com "
    let condition;
    let question;
    let response;
    let message;
    let button1;
    let button2;
    let producto= "producto generico bicicleta con motor atomico";

        switch (0) {
            case 0:
                condition = "ha respondido tu pregunta sobre";
                question= <h4 className="question">Buenos dias el producto esta disponible?</h4>
                response = <h4 className="response">Buenos dias el producto si lo tenemos en stock</h4>
                button1 = <a>Ver producto</a>
                button2 = <a className="last-bottom">Comprar</a>
                break;
            case 1:
                condition = "ha realizado una pregunta en tu publicacion";
                question = <h4 className="question">Buenos dias el producto esta disponible?</h4>
                button1 = <a>Responder</a>
                button2= null
                break;
            case 2:
                condition = "hemos registrado una compra de";
                message = <h4 className="question">Comunicate con tu vendedor</h4>
                button1 = <a>Enviar mensaje al vendedor</a>
                button2 = null
                break;
            case 3:
                condition = "ha realizado la compra de tu producto";
                button1 = <a>Enviar mensaje al comprador</a>
                button2 = null
                break;
        }

        return (
            <div className="notification-item">
                <img src="https://picsum.photos/100" />
                <section className="description">
                    <span className="small-text">{name}{condition}</span>
                    <h3 className="product-title">{producto}</h3>
                    {question}
                    {response}
                    {message}
                    <section className="actions">
                        {button1} {button2}
                    </section>
                </section>
            </div>
        )
    }
}
