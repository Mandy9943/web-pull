import React, { Component } from "react";
import TicketImg1 from "../../assets/img/tickets-img/banner-computacion.webp";
import TicketImg2 from "../../assets/img/tickets-img/banner-bebes.webp";
import TicketImg3 from "../../assets/img/tickets-img/banner-hogar.webp";
import "./Tickets.css";
import Image from "next/image";
import Link from "next/link";

class Tickets extends Component {
  render() {
    let link0 = "Computadoras-y-Accesorios";
    let link1 = "Bebés";
    let link2 = "Hogar";

    const dataTicket = [
      { url: this.props.img_left ? this.props.img_left : TicketImg1 },
      { url: this.props.img_center ? this.props.img_center : TicketImg2 },
      { url: this.props.img_right ? this.props.img_right : TicketImg3 },
    ];

    const linkTicket = [
      { url: this.props.link_left ? this.props.link_left : link0 },
      { url: this.props.link_center ? this.props.link_center : link1 },
      { url: this.props.link_right ? this.props.link_right : link2 },
    ];
    return (
      <div className="wrap-tickets">
        {dataTicket.map((item, i) => (
          // <Link
          //   href={"/categoria/[...category]"}
          //   key={i}
          //   as={
          //     "/categoria/" +
          //     linkTicket[i].url.replace(/ /g, "-").trim().toLowerCase()
          //   }
          // >
            <a 
              key={i}
              href={
                "/categoria/" +
                linkTicket[i].url.replace(/ /g, "-").trim().toLowerCase()
              }
              className="tickets">
              <div className="anullProperties">
                <Image
                  layout="fill"
                  src={item.url}
                  alt={linkTicket[i].url.replace(/-/g, " ")}
                />
              </div>
            </a>
          // </Link>
        ))}
      </div>
    );
  }
}

export default Tickets;
