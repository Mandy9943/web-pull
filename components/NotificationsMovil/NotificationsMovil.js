import React, { Component } from "react";
import Link from "next/link"
import "./NotificationsMovil.css";
import Nav from "../Common/Nav/Nav";
import NotificationItem from "../Common/NotificationItem/NotificationItem";
import Data from "../AccountStore/AccountStoreProduct/AccountStoreProduct";
import { getData } from "../../services/userApi";




export default class NotificationsMovil extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
            timeClose: undefined
        }
    }


    /********************* START NOTIFICATIONS ******************************/
    loadNotifications = () => {
        const endp = "/getNotifications"
        console.log("LoadNotifications")
        console.log(this.props)
        getData(endp, this.props.jwt)
            .then((response) => {
                this.setState({ notifications: response.data });
                setTimeout(this.loadNotifications, 60000);
            });
    }

    mEnter = () => {
        clearTimeout(this.state.timeClose);
    }
    mLeave = () => {
        this.state.timeClose = setTimeout(() => { this.setState({ showNotification: false }) }, 1000);
    }


    readNotifications = (id) => {

    }


/********************* END NOTIFICATIONS ******************************/

    componentDidMount() {
        getData("/getMenuCategories")
            .then((response) => {
                this.setState({ categories: response.data });
            });
        if (this.props.authenticated) {
            this.loadNotifications();
        }

    }
    

    render() {
        let u_data = this.props.user_data
        let authenticated = this.props.authenticated   

        console.log(this.state.notifications.length + "no carga noti");

        return (
            <div className="notifications-movil">
                <Nav user={u_data.user} jwt={u_data.jwt}  home={true} authenticated={u_data.authenticated} />
                <h1>Notificaciones</h1>
                <section className={this.state.notifications.length > 1 ? "more" : "less" }>
                    {
                        this.state.notifications.length > 0 ?
                            this.state.notifications.map(function (notification, i) {
                                return <NotificationItem key={i} data={notification} />
                            })
                            :
                            <b className="empty"><br />No tienes notificaciones.<br /><br /></b>
                    }
                </section>
            </div>
        );
    }
}
