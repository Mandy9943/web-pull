import React, { useState, useEffect } from "react";
import '../styles.css'

import SocketChat from "../components/Services/socket"
import SocketUser from "../components/Services/socketuser"

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <SocketChat/>
      <SocketUser/>
      <Component {...pageProps} />
    </>
  )
}