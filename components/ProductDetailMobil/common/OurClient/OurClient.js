import React, { useState, useEffect } from "react";
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

import {
  handleActivateBack,
  handleDeactivateBack,
} from "../../../../lib/functions";
const OurClient = ({ category }) => {
  const [countClient, setCountClient] = useState(4);
  const lista = review(category).slice(0, countClient);
  let count_opinion = review(category).length;
  const [collapse, setCollapse] = useState(false);
  const [desglosar, setDesglosar] = useState(cerrado);
  const [comment, setComment] = useState(false);
  const [clientShow, setClientShow] = useState(lista[0]);
  const handleOnClickComment = (client) => {
    setComment(!comment);
    setClientShow(client);
  };

  useEffect(() => {
    if (collapse === true && comment === false) {
      handleDeactivateBack(() => {
        setCollapse(false);
      });
    }
    if (collapse === false) {
      handleActivateBack();
    }
    collapse === true ? setDesglosar(abierto) : setDesglosar(cerrado);
    // console.log("Actualizado el collapse", { collapse });
  }, [collapse]);

  const handleOnClick = () => {
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
            {lista.map((client, i) => {
              return (
                <CardOurClient
                  key={i}
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
            <Button
              variant="outlined"
              color="error"
              onClick={() => setCountClient(countClient + 4)}
            >
              VER MÁS
            </Button>
          </div>
        </React.Fragment>
      ) : null}
    </section>
  );
};

export default OurClient;
