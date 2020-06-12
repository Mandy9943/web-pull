import React from 'react';
import Head from 'next/head';
import ModifyCategory from '../components/Account/ModifyCategory/ModifyCategory';

export default function modificar_categoria() {
    return (
        <div>
            <Head>
                <title>Kiero | Modificar categoría</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ModifyCategory />
        </div>
    )
}
