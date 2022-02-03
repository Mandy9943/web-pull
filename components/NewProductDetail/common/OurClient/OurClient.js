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
import { Button, Collapse, Grid } from "@mui/material";

import {
  handleActivateBack,
  handleDeactivateBack,
} from "../../../../lib/functions";
import { Box } from "@mui/system";
import SectionTitle from "../SectionTitle/SectionTitle";
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
    if (collapse === true) {
      handleDeactivateBack(() => {
        setCollapse(false);
        handleActivateBack();
      });
    }
    collapse === true ? setDesglosar(abierto) : setDesglosar(cerrado);
  }, [collapse]);

  const handleOnClick = () => {
    setCollapse(!collapse);
  };
  return (
    <section id="OurClient" className={collapse === false ? "closed" : "open"}>
      <header onClick={handleOnClick}>
        <div className="left">
          <SectionTitle>
            Nuestros Clientes de{" "}
            <Box
              sx={{
                color: "#cf0a2c",
                display: "inline",
              }}
              className="company"
            >
              KIERO
            </Box>
          </SectionTitle>

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
      <Collapse in={collapse === true}>
        <React.Fragment>
          <article>
            <Box sx={{ flexGrow: 1 }} width={"100%"}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <div className="column">
                    {lista.map((client, i) => {
                      const render = i % 2 === 0 ? true : false;

                      return (
                        render && (
                          <CardOurClient
                            key={i}
                            client={client}
                            handleOnClickComment={handleOnClickComment}
                          />
                        )
                      );
                    })}
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="column">
                    {lista.map((client, i) => {
                      const render = i % 2 !== 0 ? true : false;

                      return (
                        render && (
                          <CardOurClient
                            key={i}
                            client={client}
                            handleOnClickComment={handleOnClickComment}
                          />
                        )
                      );
                    })}
                  </div>
                </Grid>
              </Grid>
            </Box>
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
      </Collapse>
    </section>
  );
};

export default OurClient;
