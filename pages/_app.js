import React, { useState, useEffect } from "react";
import '../styles.css'

import SocketChat from "../components/Services/socket"
import SocketUser from "../components/Services/socketuser"
import KieroSocketChat from "../components/Services/kierochat-socket"

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <SocketChat/>
      <SocketUser/>
      <KieroSocketChat/>
      <Component {...pageProps} />
    </>
  )
}