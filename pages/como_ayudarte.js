import React from 'react';
import Head from 'next/head';
import HowCanHelp from '../components/Help/HowCanHelp/HowCanHelp';

export default function como_ayudarte() {
    return (
        <div>
            <Head>
                <title>Kiero | ¿Como podemos ayudarte?</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <HowCanHelp  />
        </div>
    )
}
