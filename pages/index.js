import React from "react";
import Head from 'next/head';
import Home from "../components/Home";

export default function Index() {
    return(
        <div className="home">
            <Head>
                <title>Kiero | Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Home />
        </div>
    );
}