import React from 'react';
import Link from "next/link";
import LogoMovil from "../../../assets/img/logo-kiero.png";
import LogoWeb from "../../../assets/img/logokieroweb.png";
import "./Logo.css";

export default function Logo() {
    return (
        <div className="logo">
            <Link href="/">
                <a>
                    <img alt="Kiero.co" className="logo-img no-web" src={LogoMovil} />
                    <img alt="Kiero.co" className="logo-img no-movil" src={LogoWeb} />
                </a>
            </Link>
        </div>
    )
}
