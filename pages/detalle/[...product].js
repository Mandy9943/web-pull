import React from "react";
import Head from "next/head";
import Detail from "../../components/ProductDetail";
import { getProductDetail } from "../../services/productsApi";
import { getUser, isAuthenticated, getJwt } from "../../lib/auth";
import favicon from "../../assets/img/favicon.svg";


function Product({ data, u_data }) {
  return (
    <div>
      <Head>
        <title>Kiero | Producto </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="KIERO.CO MARKETPLACE | Compralo en Kiero a precio - Envio gratis - Encuentra mas productos de CatPadre, CatHijo, CatNieto" />
        <meta name="Keywords" content="Titulo del producto" />
        <meta name="Title" content="Kiero.co -product_name a $product_price" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="google" content="notranslate" />
        <meta name="twitter: card" content="Envíos gratis en Colombia, productos para Bebés, Belleza, Cámaras y accesorios, Electrodomésticos, Electrónica, Hogar y muebles y mucho más." />
        <meta name="twitter: site" content="@kierogroup1" />
        <meta name="twitter: title" content=" Compra en Kiero todo lo encuentras en nuestra Tienda Online" />
        <meta name="twitter: description" contenido=" Envíos gratis en Colombia, productos para Bebés, Belleza, Cámaras y accesorios, Electrodomésticos, Electrónica, Hogar y muebles y mucho más." />
        <meta name="twitter: image" content="https://kiero.co/_next/static/images/banners-apk-911388a7cee05467bbd92b4b573820ab.jpg" />
        <meta property="og:title" content={"Compra en Kiero.co Compra Portatiles y accesorios en Kiero.co " }/>
        <meta property="og:description" content="Encuentra product_name en Kiero.co - Descubre millones de productos online. Encuentra Portatiles y accesorios en Kiero.co " />
        <meta property="og:url" content="url de producto" />
        <meta property='og:locale' content='es_ES' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Kiero.co' />
        <meta property="og:image" content="https://kiero.co/_next/static/images/banners-apk-911388a7cee05467bbd92b4b573820ab.jpg"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta name="robots" content="noodp" />
        <meta name="robots" content="noydir" />
        <link rel="icon" href={favicon} type="image/png" />
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
  let jwt = getJwt(context);

  const u_data = {
    user: (usr !== undefined ? usr : null),
    authenticated: isAuthenticated(context),
    jwt: jwt ? jwt : ''
  }

  return { props: { data, u_data } }
}

export default Product
