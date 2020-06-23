import React from 'react';
import Head from 'next/head';
import ContactEmail from '../components/Help/ContactEmail/ContactEmail';

export default function contactanos_email() {
    return (
        <div>
            <Head>
                <title>Kiero | Contactanos por email</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ContactEmail />
        </div>
    )
}
