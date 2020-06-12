import React, { Component } from 'react';
import Link from "next/link";
import Logo from "../Logo/Logo";
import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-content">
                    <Logo />
                    <div className="help-link-content">
                        <Link href="/ayuda">
                            <a className="help-link">
                                <p>Ayuda</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
