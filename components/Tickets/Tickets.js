import React, { Component } from "react";
import TicketImg1 from "../../assets/img/tickets-img/banner-computacion.jpg";
import TicketImg2 from "../../assets/img/tickets-img/banner-bebes.jpg";
import TicketImg3 from "../../assets/img/tickets-img/banner-hogar.jpg";
import "./Tickets.css";
import Link from "next/link";

class Tickets extends Component {
  render() {

    let link0 = "Computadoras%20y%20Accesorios";
    let link1 = "Bebés";
    let link2 = "Hogar";

    const dataTicket = [
      { url: (this.props.img_left ? this.props.img_left : TicketImg1) },
      { url: (this.props.img_center ? this.props.img_center : TicketImg2) },
      { url: (this.props.img_right ? this.props.img_right : TicketImg3) },
    ];

    const linkTicket = [
      { url: (this.props.link_left ? this.props.link_left : link0) },
      { url: (this.props.link_center ? this.props.link_center : link1) },
      { url: (this.props.link_right ? this.props.link_right : link2) },
    ];
    return (
      <div className="wrap-tickets">
        {dataTicket.map((item, i) => (
          <a key={i} href={"/categoria/" + linkTicket[i].url.replace(/ /g, "-").trim().toLowerCase() } className="tickets">
                  <img src={item.url.replace(/^[, ]+|[, ]+$|[, ]+/g, "").trim()} />
            </a>
        ))}
      </div>
    );
  }
}

export default Tickets;
