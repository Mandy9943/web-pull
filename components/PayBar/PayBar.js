import React from 'react';
import Link from "next/link";
import "./PayBar.css";

export default function PayBar() {
    return (
        <div className="pay-bar">
            <div className="payment-methods more-payment-methods">
                <p className="payment-methods-text">Más métodos de pago</p>
                <Link href="/">
                    <a className="more-link">
                        <p>Ver más</p>
                    </a>
                </Link>
            </div>
            <div className="payment-methods wire-transfer">
                <p className="payment-methods-text">Más métodos de pago</p>
                <Link href="/">
                    <a className="more-link">
                        <p>Ver más</p>
                    </a>
                </Link>
            </div>
            <div className="payment-methods pay-cash">
                <p className="payment-methods-text">Más métodos de pago</p>
                <Link href="/">
                    <a className="more-link">
                        <p>Ver más</p>
                    </a>
                </Link>
            </div>
        </div>
    )
}
