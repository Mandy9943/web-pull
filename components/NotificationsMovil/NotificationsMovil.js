import React, { Component } from "react";
import Link from "next/link"
import "./NotificationsMovil.css";
import Nav from "../Common/Nav/Nav";
import NotificationItem from "../Common/NotificationItem/NotificationItem";
import Data from "../AccountStore/AccountStoreProduct/AccountStoreProduct";



export default class NotificationsMovil extends Component {
    render() {
        let u_data = this.props.user_data
        let authenticated = this.props.authenticated
        let url = "//www.sic.gov.co";

        let notifications = 3;

        return (
            <div className="notifications-movil">
                <Nav user={u_data.user} jwt={u_data.jwt}  home={true} authenticated={u_data.authenticated} />
                <h1>Notificaciones</h1>
                <section className={notifications > 2 ? "more" : "less" }>
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                </section>
            </div>
        );
    }
}
