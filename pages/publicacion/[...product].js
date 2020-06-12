import React from "react";
import Head from "next/head";
import Account from "../../components/AccountStore";
import {getJwt, getUser, redirectIfNotAuthenticated} from "../../lib/auth";
import { getProductDetail } from "../../services/productsApi";

function Product(precomp) {
    return (
        <div>
            <Head>
                <title>Kiero | {!precomp.data ?"Nuevo Producto":"Editar Producto"}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Account data={precomp.data} jwt={precomp.jwt}/>
        </div>
    );
}


export async function getServerSideProps(context) {

    if (redirectIfNotAuthenticated(context)) {
        return {};
    }

    let product_id = context.params.product[0];
    let data = null;

    if(product_id !== "new" && product_id !== ""){
        const res = await getProductDetail(product_id)
        data = await res.data
    }
    console.log(data)
    let jwt = getJwt(context);

    return { props: { data, jwt } }
}

export default Product

