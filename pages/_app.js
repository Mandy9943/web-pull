import React, { useState, useEffect } from "react";
import '../styles.css'
import SocketChat from "../components/Services/socket"

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <SocketChat/>
      <Component {...pageProps} />
    </>
  )
}