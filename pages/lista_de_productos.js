import React from 'react';
import Head from 'next/head';
import Category from '../components/Category/Category';
import {getUser, isAuthenticated } from "../lib/auth";

function Results({data, session}) {
    return (
        <div>
            <Head>
                <title>Kiero | Productos</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Category />
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps(context) {
    // Fetch data from external API
    const data = {
        "type":"search",
        "search": String(context.params.product).split("_"),
        "params": {
            "items_per_page": 0,
            "price_range": "",
            "order": "desc"
        }
    }

    let usr = getUser(context);
    const session = {
        user: (usr !== undefined ? usr  : null),
        authenticated: isAuthenticated(context)
    }

    return { props: { data, session } }
}


export default Results
