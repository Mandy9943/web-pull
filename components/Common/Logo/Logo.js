import React from 'react';
import Link from "next/link";
import LogoImg from "../../../assets/img/logo-kiero.png";
import "./Logo.css";

export default function Logo() {
    return (
        <div className="logo">
            <Link href="/">
                <a>
                    <img className="logo-img" src={LogoImg} />
                </a>
            </Link>
        </div>
    )
}
