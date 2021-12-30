import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./OurClient.module.css";
import Image from "next/image";
import abierto from "../../../../assets/img/productDetail/l-nea-86@2x.svg";
import cerrado from "../../../../assets/img/productDetail/icono-desplegar@2x.svg";
import CardOurClient from "./CardOurClient";
import review from "../../../../lib/review";
import SwiperCardOurClient from "./SwiperCardOurClient";
import { Button } from "@mui/material";

const OurClient = ({ category }) => {
  const [countClient, setCountClient] = useState(4);
  const lista = review(category).slice(0, countClient);
  let count_opinion = lista.length;
  const [collapse, setCollapse] = useState(false);
  const [desglosar, setDesglosar] = useState(cerrado);
  const [comment, setComment] = useState(false);
  const [clientShow, setClientShow] = useState(lista[0]);
  const handleOnClickComment = (client) => {
    setComment(!comment);
    setClientShow(client);
  };

  const handleOnClick = () => {
    collapse === false ? setDesglosar(abierto) : setDesglosar(cerrado);
    setCollapse(!collapse);
  };
  return (
    <section id="OurClient" className={collapse === false ? "closed" : "open"}>
      <header onClick={handleOnClick}>
        <div className="left">
          <h4>
            Nuestros Clientes de <div className="company">KIERO</div>
          </h4>
          <div className="clasification">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p>({count_opinion} Opiniones)</p>
          </div>
        </div>
        <div className="right">
          <div className="anullProperties">
            <Image src={desglosar} alt="Icono del desglose" layout="fill" />
          </div>
        </div>
      </header>
      {collapse === true ? (
        <React.Fragment>
          <article>
            {lista.map((client) => {
              return (
                <CardOurClient
                  key={client.H}
                  client={client}
                  handleOnClickComment={handleOnClickComment}
                />
              );
            })}

            <SwiperCardOurClient
              client={clientShow}
              comment={comment}
              setComment={setComment}
            />
          </article>
          <div className="footer_our">
            {countClient <= 4 ? (
              <Button onClick={() => setCountClient(countClient + 2)}>
                VER MÁS
              </Button>
            ) : (
              <a href="#OurClient">
                <Button onClick={() => setCountClient(4)}>VER MENOS</Button>
              </a>
            )}
          </div>
        </React.Fragment>
      ) : null}
    </section>
  );
};

export default OurClient;
