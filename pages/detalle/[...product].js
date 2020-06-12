import React from "react";
import Head from "next/head";
import Detail from "../../components/ProductDetail";
import { getProductDetail } from "../../services/productsApi";
import {getUser, isAuthenticated } from "../../lib/auth";

function Product({data, u_data}) {
    return (
    <div>
      <Head>
        <title>Kiero | Producto </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Detail user_data={u_data} data={data} />
    </div>
  );
}


// This gets called on every request
export async function getServerSideProps(context) {

    // Fetch data from external API
    let temp_p = String(context.params.product).split("_");

    const id_product = temp_p[0];
    const res = await getProductDetail(id_product)
    const data = await res.data

    let usr = getUser(context);

    const u_data = {
        user: (usr !== undefined ? usr  : null),
        authenticated: isAuthenticated(context)
    }

    return { props: { data, u_data } }
}

export default Product
