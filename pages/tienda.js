import React from "react";
import Head from "next/head";
import Shop from "../components/Shop";
import PropTypes from "prop-types";

import {
  getEmail,
  getFullName,
  getJwt,
  getLastName,
  getName,
  getUser,
  getUserType,
  getRole,
  getUserId,
  isAuthenticated,
  redirectIfNotAuthenticated,
} from "../lib/auth";
import { get_store_details} from "../services/storeApi";
import favicon from "../assets/img/favicon.svg";


export default class Tienda extends React.Component {
  static propTypes = {
    user: PropTypes.string,
    authenticated: PropTypes.bool,
  };

  render() {
    let {user_d, store_d} = this.props;

    console.log("store_d : "+this.props.store_d);

    return (
        <div>
          <Head>
            <title>Kiero | KieroShop</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="robots" content="index,follow" />
            <meta name="robots" content="noodp" />
            <meta name="robots" content="noydir" />
            <meta
                name="description"
                content="Descubre miles de productos al mejor precio. Envios gratis
                    a todo el pais, encuentra lo que buscas en Kiero.co"
            />
            <link rel="icon" href={favicon} type="image/png" />
          </Head>
          <Shop user_data={user_d} store_data={store_d} />
        </div>
    );
  }
}

export async function getServerSideProps(ctx) {
  if (redirectIfNotAuthenticated(ctx)) {
    return {};
  }

  let jwt = getJwt(ctx);
  let details = await get_store_details(jwt);

  return {
    props: {
      user_d: {
        jwt: jwt,
        user: getUser(ctx),
        type: getUserType(ctx),
        role: getRole(ctx),
        name: getName(ctx),
        last_name: getLastName(ctx),
        full_name: getFullName(ctx),
        email: getEmail(ctx),
        user_id: getUserId(ctx),
        authenticated: isAuthenticated(ctx),
      },
      store_d: details.data
    }
  };


}

