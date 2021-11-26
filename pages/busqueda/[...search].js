import React from "react";
import Head from "next/head";
import Category from "../../components/Category/Category";
import { getUser, isAuthenticated } from "../../lib/auth";
import favicon from "../../assets/img/favicon.svg";
import { searchItemsPerPage } from "../../lib/config";
import { useRouter } from "next/router";

function Results({ data, session }) {
  const router = useRouter();
  const { page } = router.query;
  const currentPath = router.asPath;

  return (
    <div>
      <Head>
        <title>Kiero | {data.search}</title>

        <meta
          name="description"
          content={`KIERO.CO MARKETPLACE | Encuentra más productos de ${data.search}`}
        />

        <meta name="title" content={`Kiero.co - ${data.search}`} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="google" content="notranslate" />
        <meta
          name="twitter: card"
          content="Envíos gratis en Colombia, productos para Bebés,
            Belleza, Cámaras y accesorios, Electrodomésticos, Electrónica, Hogar y muebles y mucho más."
        />
        <meta name="twitter: site" content="@kierogroup1" />
        <meta
          name="twitter: title"
          content={`Compra en Kiero ${data.search} - todo lo
            encuentras en nuestra Tienda Online`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta name="keywords" content={`Tienda en Línea, ${data.search}`} />

        <link rel="icon" href={favicon} type="image/png" />
      </Head>
      <Category
        data={data}
        user_data={session}
        page={page}
        path={currentPath}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = {
    type: "search",
    search: String(context.params.search),
    params: {
      items_per_page: searchItemsPerPage,
      price_range: "",
      order: "desc",
    },
  };

  let usr = getUser(context);
  const session = {
    user: usr !== undefined ? usr : null,
    authenticated: isAuthenticated(context),
  };
  return { props: { data, session } };
}

export default Results;
