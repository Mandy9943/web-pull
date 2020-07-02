import React from 'react';
import Head from 'next/head';
import HowCanHelp from '../components/Help/HowCanHelp/HowCanHelp';

export default function como_ayudarte() {
    return (
        <div>
            <Head>
                <title>Kiero | ¿Como podemos ayudarte?</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="robots" content="index,follow" />
                <meta name="robots" content="noodp" />
                <meta name="robots" content="noydir" />
                <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis
                    a todo el pais, encuentra lo que buscas en Kiero.co" />
            </Head>
            <HowCanHelp  />
        </div>
    )
}
