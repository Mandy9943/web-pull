import React, { useEffect, useState } from "react";
import Head from "next/head";
import { getProductDetail } from "../../services/productsApi";
import { getUser, isAuthenticated, getJwt } from "../../lib/auth";
import favicon from "../../assets/img/favicon.svg";
import dynamic from "next/dynamic";
import { createlead, handleFormatUrl } from "../../lib/functions";
import useResize from "../../lib/hooks/useResize";
import Loading from "../../components/Common/Loading/Loading";
import { useAppDispatch } from "../../lib/hooks/redux";
import { setData } from "../../redux/feature/pay/paySlice";
import { setNumber } from "../../redux/feature/whatsapp/whatsappReducer";
import Cookies from "js-cookie";

const Detail = dynamic(() => import("../../components/ProductDetail"), {
  ssr: false,
  loading: () => <Loading />,
});
const ProductDetailMobil = dynamic(
  () =>
    import(
      "../../components/NewProductDetail/ProductDetailMovil/ProductDetailMovil"
    ),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

const ProductDetailDesktop = dynamic(
  () =>
    import(
      "../../components/NewProductDetail/ProductDetailDesktop/ProductDetailDesktop"
    ),
  {
    ssr: false,
    // loading: () => <Loading />,
  }
);

function Product({ data, u_data, userIp }) {
  const dispatch = useAppDispatch();
  const mobileView = useResize(767);
  const [isLoading, setIsLoading] = useState(true);

  const dataMainLink = () => {
    let dataMain = data.images.find((element) => element.main == 1);
    return dataMain.url ? dataMain.url : "";
  };
  useEffect(() => {
    setIsLoading(false);
    dispatch(
      setData({
        category: data.category,
        price: data.product_global_price,
        img: data.images,
        title: data.title,
        product_id: data.product_global_id,
        brand: data.brand,
        description: data.description,
        category_id: data.category_id,
        asin_link: data.asin_link,
        sub_category: data.sub_category,
        breadcum: data.breadcum,
        product_link: data.product_link,
        weight: data.weight,
        cost_of_goods_sold: data.cost_of_goods_sold,
        earnings_percentage: data.earnings_percentage,
        gross_margin: data.gross_margin,
        margin_percent: data.margin_percent,
        main_link: dataMainLink(),
      })
    );
    dispatch(setNumber({ category: data.breadcum[0].name }));
    Cookies.get("email") ? createlead(data, 3) : null;
  }, [data, dispatch]);
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
          content=" Envíos gratis en Colombia, productos para Bebés, Belleza, Cámaras y accesorios,
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

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {mobileView ? (
            // <Detail user_data={u_data} data={data} />
            <ProductDetailMobil
              user_data={u_data}
              data={data}
              userIp={userIp}
            />
          ) : (
            // <Detail user_data={u_data} data={data} userIp={userIp} />
            <ProductDetailDesktop
              user_data={u_data}
              data={data}
              userIp={userIp}
            />
          )}
        </>
      )}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  let { req, query } = context;
  let ipData = req.headers["x-real-ip"] || req.connection.remoteAddress;
  // Fetch data from external API
  let temp_p = String(context.params.product).split("_");
  let id_product = JSON.parse(temp_p[0]);

  const res = await getProductDetail(id_product, {
    params: { is_variant: false, product_global_id: id_product },
  });

  let data = await res.data;

  if (!data || data?.error === true) {
    return {
      notFound: true,
    };
  }

  const addParamsUrl = (query) => {
    delete query["product"];
    return Object.keys(query)
      .map((value) => `${value}=${encodeURIComponent(query[value])}`)
      .join("&");
  };

  const dataUrl = (id, title, query) => {
    delete query["product"];
    if (JSON.stringify(query).length > 2) {
      return handleFormatUrl(id, title) + "?" + addParamsUrl(query);
    } else {
      return handleFormatUrl(id, title);
    }
  };

  if (JSON.stringify(temp_p).length <= 15) {
    return {
      redirect: {
        destination: dataUrl(id_product, data.data.product_global_title, query),
        permanent: false,
      },
    };
  }
  let usr = getUser(context);
  let jwt = getJwt(context);

  let u_data = {
    user: usr !== undefined ? usr : null,
    authenticated: isAuthenticated(context),
    jwt: jwt ? jwt : "",
  };
  const propsData = [];
  propsData.push(data.data);
  const dataMainLink = data.data.images.find((element) => element.main == 1);
  propsData.forEach((object) => {
    object.main_link = dataMainLink.url;
  });
  return { props: { data: data.data, u_data, userIp: ipData } };
}

export default Product;
