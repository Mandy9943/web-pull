import React from "react";
import Head from "next/head";
// import Detail from '../../components/ProductDetail';
import { getProductDetail } from "../../services/productsApi";
import { getUser, isAuthenticated, getJwt } from "../../lib/auth";
import favicon from "../../assets/img/favicon.svg";
import dynamic from "next/dynamic";
import { handleFormatUrl } from "../../lib/functions";

const Detail = dynamic(() => import("../../components/ProductDetail"), {
  loading: () => <p>loading...</p>,
});

function Product({ data, u_data }) {
  console.log(data);
  //console.log(handleFormatUrl(14234, "muñeca,hóla,///@?___ññññ///béébé---hola si cmo estás?"))
  return (
    <div>
      <Head>
        {/*<script type="text/javascript" src="https://checkout.wompi.co/widget.js"></script>*/}
        <title>Kiero.co | {data.title.substring(0, 60)}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="mobileOptimized" content="360" />
        <meta
          name="description"
          content={`Kiero.co | Compralo en Kiero ${data.title.substring(
            0,
            60
          )} a ${data.price} - Envío
      gratis - Encuentra más productos de ${
        data.category ? data.category.name : ""
      }`.substring(0, 159)}
        />
        <meta name="keywords" content={`${data.title}`} />
        <meta
          name="title"
          content={`Kiero.co -${data.title.substring(0, 60)} a ${data.price}`}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="google" content="notranslate" />
        <meta
          name="twitter: card"
          content="Envíos gratis en Colombia, productos para Bebés, Belleza, Cámaras y accesorios,
      Electrodomésticos, Electrónica, Hogar y muebles y mucho más."
        />
        <meta name="twitter: site" content="@kierogroup1" />
        <meta
          name="twitter: title"
          content=" Compra en Kiero todo lo encuentras en nuestra Tienda
      Online"
        />
        <meta
          name="twitter: description"
          contenido=" Envíos gratis en Colombia, productos para Bebés, Belleza, Cámaras y accesorios,
      Electrodomésticos, Electrónica, Hogar y muebles y mucho más."
        />
        <meta name="twitter: image" content={`${data.images[0].url}`} />
        <meta
          property="og:title"
          content={`Compra en Kiero.co - Encuentra ${
            data.category ? data.category.name : ""
          } en Kiero.co`}
        />
        <meta
          property="og:description"
          content={`${data.title.substring(
            0,
            160
          )} en Kiero.co - Descubre millones de productos online.
      Encuentra ${data.category ? data.category.name : ""} en Kiero.co`}
        />
        <meta
          property="og:url"
          content={`https://kiero.co${handleFormatUrl(
            data.product_id,
            data.title
          )}`}
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="WebSite" />
        <meta property="og:site_name" content="Kiero.co" />
        <meta property="og:image" content={`${data.images[0].url}`} />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

        <link rel="icon" href={favicon} type="image/png" />

        {/* <script
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: `${data.title}`,
              image: `${data.images[0].url}`,
              description: `${data.description}`,
              brand: `${data.brand}`,
              sku: `${data.product_id}`,
              offers: {
                // "@type": "Offer","url": "{product.product_url}",
                priceCurrency: "COP",
                price: "3",
                // "priceValidUntil": "{product.created_since}",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                // "ratingValue": "{product.rating}",
                bestRating: "5",
                worstRating: "0",
                // "ratingCount": "{product.rating.count}"
              },
            }),
          }}
        ></script> */}
        {/*<script*/}
        {/*	async type="text/javascript"*/}
        {/*	src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=Sr8j85"*/}
        {/*></script>*/}
      </Head>
      <Detail user_data={u_data} data={data} />
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  let temp_p = String(context.params.product).split("_");
  const id_product = JSON.parse(temp_p[0]);

  const res = await getProductDetail(id_product, {
    params: { is_variant: false, product_global_id: id_product },
  });

  const data = await res.data;

  let usr = getUser(context);
  let jwt = getJwt(context);

  const u_data = {
    user: usr !== undefined ? usr : null,
    authenticated: isAuthenticated(context),
    jwt: jwt ? jwt : "",
  };

  return { props: { data: data.data, u_data } };
}

export default Product;
