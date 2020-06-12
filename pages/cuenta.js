import React from "react";
import Head from "next/head";
import Account from "./../components/AccountStore";

export default function cuenta() {
  return (
    <div>
      <Head>
        <title>Kiero | Cuenta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Account />
    </div>
  );
}
