import React, { Component } from "react";
import TicketImg1 from "../../assets/img/tickets-img/banner-computacion.jpg";
import TicketImg2 from "../../assets/img/tickets-img/banner-bebes.jpg";
import TicketImg3 from "../../assets/img/tickets-img/banner-hogar.jpg";
import "./Tickets.css";

class Tickets extends Component {
  render() {
    const dataTicket = [
      { url: TicketImg1 },
      { url: TicketImg2 },
      { url: TicketImg3 },
    ];
    return (
      <div className="wrap-tickets">
        {dataTicket.map((item, i) => (
          <div className="tickets" key={i}>
            <img src={item.url} />
          </div>
        ))}
      </div>
    );
  }
}

export default Tickets;
