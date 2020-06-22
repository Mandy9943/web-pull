import React from 'react';
import Head from 'next/head';
import ContactWsp from '../components/Help/ContactWsp/ContactWsp';

export default function contactanos_wsp() {
    return (
        <div>
            <Head>
                <title>Kiero | Anular cuenta</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ContactWsp />
        </div>
    )
}
